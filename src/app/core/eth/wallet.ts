
import { Mnemonic } from '../thirdparty/bip39';
import { WORDLISTS } from '../thirdparty/wordlist';
import { ethereumjs } from '../thirdparty/ethereumjs-wallet-hd-0.6.0';
import { Cipher } from '../crypto/cipher';

const Buffer = ethereumjs.Buffer.Buffer;;
const Wallet = ethereumjs.Wallet;
const WalletHD = ethereumjs.WalletHD;
const ETHTx = ethereumjs.Tx;
const ETHUtil = ethereumjs.Util;

const LANGUAGES = {"english": 0, "chinese_simplified": 1, "chinese_traditional": 2};
const DEFAULT_DERIVE_PATH = "m/44'/60'/0'/0/0";

// currently use the default config
const cipher = new Cipher();

export interface Transaction {
    to: string;
    nonce: number | string;
    gasPrice: number | string;
    gasLimit: number | string;
    value: number | string;
    data: string;
}

export class GaiaWallet {

    private _nickName: string;
    private _address: string;
    private _balance: number;
    private _txs: string[];

    private _mnemonic: string;
    private _privKey: string;

    // private _isHD: boolean;
    // private _extendedPrivKey: string;
    // private _lastUsedIndex: number;

    constructor() {
        this._txs = [];
        this._balance = 0;
        this._mnemonic = "";
    }

    get nickName() : string {
        return this._nickName;
    }

    set nickName(name: string) {
        this._nickName = name;
    }

    get address() : string {
        return this._address;
    }

    get balance() : number {
        return this._balance;
    }

    set balance(value: number) {
        this._balance = value;
    }

    // TODO: how to define a tx history?
    get txHistory() : string[] {
        return this._txs;
    }

    set txHistory(txs: string[]) {
        this._txs = txs;
    }

    /**
     * recover wallet from mnenomic words
     * 
     * @static
     * @param {string} mnemonic words
     * @param {string} language what's the language of the mnenomic words
     * @param {string} passwd used to encrypt the mnemonic
     * @returns {GaiaWallet} 
     * @memberof GaiaWallet
     */
    static fromMnemonic(mnemonic: string, language: string, passwd: string) : GaiaWallet {
        if (!(language in LANGUAGES)) {
            throw new Error("this language does not supported")
        }

        let mn = new Mnemonic(language);
        let seedBuffer = mn.toSeed(mnemonic);
        let rootNode = WalletHD.fromMasterSeed(Buffer(seedBuffer, 'hex'));
        
        let hdwlt = rootNode.derivePath(DEFAULT_DERIVE_PATH);
        let wlt = hdwlt.getWallet();

        let gwlt = new GaiaWallet();
        gwlt._address = wlt.getChecksumAddressString();
        gwlt._privKey = cipher.encrypt(passwd, wlt.getPrivateKey().toString('hex'));
        gwlt._mnemonic = cipher.encrypt(passwd, mnemonic);
        // gwlt._isHD = true;
        // gwlt._lastUsedIndex = 0;

        return gwlt;
    }
    
    /**
     * recovery wallet from a keystore file
     * 
     * @static
     * @param {string} v3string stringfy from keystore file
     * @param {string} passwd used to decrypt keystore file
     * @returns 
     * @memberof GaiaWallet
     */
    static fromKeyStore(v3string: string, passwd: string) : GaiaWallet {
        let wlt = Wallet.fromV3(v3string, passwd, true);
        let gwlt = new GaiaWallet();
        gwlt._address = wlt.getChecksumAddressString();
        gwlt._privKey = cipher.encrypt(passwd, wlt.getPrivateKey().toString('hex'));

        return gwlt;
    }

    /**
     * recover wallet from private key
     * 
     * @static
     * @param {string} passwd
     * @param {string} privKey 
     * @returns {GaiaWallet} 
     * @memberof GaiaWallet
     */
    static fromPrivateKey(passwd: string, privKey: string) : GaiaWallet {
        let sk = Buffer(privKey, 'hex');
        let wlt = Wallet.fromPrivateKey(sk);
        let gwlt = new GaiaWallet();
        gwlt._address = wlt.getChecksumAddressString();
        gwlt._privKey = cipher.encrypt(passwd, privKey);

        return gwlt;
    }

    /**
     * generate new wallet
     * 
     * @static
     * @param {string} language only support "english", "chinese_simplified" and "chinese_traditional"
     * @param {number} strength password strength must be the mutiply of 8 and at least 128
     * @param {string} passwd used to encrypt mnemonic
     * @returns {GaiaWallet}
     * @memberof GaiaWallet
     */
    static generate(language: string, strength: number, passwd: string) : GaiaWallet {
        if (!(language in LANGUAGES)) {
            throw new Error("this language does not supported")
        }

        if (strength % 8 != 0 || strength < 128) {
            throw new Error("strength must be the mutiply of 8 and at least 128!");
        }

        let mn = new Mnemonic(language);
        let mnemonic = mn.generate(strength);
        let seedBuffer = mn.toSeed(mnemonic);
        let rootNode = WalletHD.fromMasterSeed(Buffer(seedBuffer, 'hex'));
        
        let hdwlt = rootNode.derivePath(DEFAULT_DERIVE_PATH);
        let wlt = hdwlt.getWallet();

        let gwlt = new GaiaWallet();
        gwlt._address = wlt.getChecksumAddressString();
        gwlt._privKey = cipher.encrypt(passwd, wlt.getPrivateKey().toString('hex'));
        gwlt._mnemonic = cipher.encrypt(passwd, mnemonic);
        gwlt._balance = 0;
        // gwlt._isHD = true;
        // gwlt._lastUsedIndex = 0;

        return gwlt;
    }

    /**
     * This is a CPU intensive work, may take about 10 seconds!!!
     * 
     * @param {string} passwd used to decrypt the keystore file
     * @returns {string} 
     * @memberof GaiaWallet
     */
    exportKeystore(passwd: string) : string {
        let decrypted = cipher.decrypt(passwd, this._privKey);
        let wlt = Wallet.fromPrivateKey(decrypted);
        return wlt.toV3String(passwd);
    }

    /**
     * export private key of this wallet
     * 
     * @param {string} passwd used to decrypt the private key
     * @returns {string} 
     * @memberof GaiaWallet
     */
    exportPrivateKey(passwd: string) : string {
        return cipher.decrypt(passwd, this._privKey);
    }

    /**
     * export the mnemonic words of this wallet
     * 
     * @param {string} passwd used to decrypt the mnemonic words
     * @returns {string} 
     * @memberof GaiaWallet
     */
    exportMnemonic(passwd: string) : string {
        if(this._mnemonic.length != 0) {
            return cipher.decrypt(passwd, this._mnemonic);
        } else {
            throw new Error("Mnemonic unavailable");
        }
    }

    /**
     * sign a raw transaction
     * 
     * @param {Transaction} txObj an instance of raw transaction
     * @param {string} passwd passwd to decrypt private key
     * @returns signed and serilized transaction, could be send to Ethereum network via 'sendRawTransaction' RPC call
     * @memberof GaiaWallet
     */
    signRawTransaction(passwd: string, txObj: Transaction) {
        let tx = new ETHTx();

        tx.to = txObj.to;
        tx.nonce = txObj.nonce;
        tx.gasPrice = txObj.gasPrice;
        tx.gasLimit = txObj.gasLimit;
        tx.value = txObj.value;
        tx.data = txObj.data;

        let privKey = cipher.decrypt(passwd, this._privKey);
        privKey = Buffer(privKey, 'hex');
        tx.sign(privKey);
        let serializedTx = tx.serialize();

        return serializedTx;
    }

    toJSON() : string {
        let wlt = {
            nickname: this._nickName,
            address: this._address,
            balance: this._balance,
            txs: this._txs,
            mnemonic: this._mnemonic,
            privkey: this._privKey
        }
        return JSON.stringify(wlt);
    }

    static fromJSON(jsonstring: string) : GaiaWallet {
        let wlt = JSON.parse(jsonstring);
        let gwlt = new GaiaWallet();
        
        gwlt._nickName = jsonstring['nickname'];
        gwlt._address = jsonstring['address'];
        gwlt._balance = jsonstring['balance'];
        gwlt._mnemonic = jsonstring['mnemonic'];
        gwlt._privKey = jsonstring['privkey'];
        gwlt._txs = jsonstring['txs'];

        return gwlt;
    }
}