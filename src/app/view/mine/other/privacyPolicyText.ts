/**
 * 隐私政策文本
 */
import { getLang } from '../../../../pi/util/lang';
import { getModulConfig } from '../../../modulConfig';

// tslint:disable-next-line:max-func-body-length
export const getPrivacyPolicy = () => {
    const walletName = getModulConfig('WALLET_NAME');
    const privacyPolicy = {
        zh_Hans:`
        一.总则
        1.1 本《隐私政策及用户协议》为您（即用户）与仙之侠道游戏（以下简称仙之侠道）就仙之侠道所提供的服务达成的协议。仙之侠道在此特别提醒您认真阅读、充分理解本《协议》:用户应认真阅读、充分理解本《协议》中各条款，特别涉及免除或者限制仙之侠道责任的免责条款，对用户的权利限制的条款，法律适用、争议解决方式的条款。如果您未满18周岁，请在法定监护人的陪同下阅读本《协议》。
        1.2 请您审慎阅读并选择同意或不同意本《协议》，除非您接受本《协议》所有条款，否则您无权以下载、安装、升级、登陆、显示、运行、截屏等方式使用本软件及其相关服务。您的下载、安装、显示、账号获取和登录、截屏等行为表明您自愿接受本协议的全部内容并受其约束，不得以任何理由包括但不限于以未能认真阅读本协议等作为纠纷抗辩理由。
        1.3 仙之侠道有权不定期对本《协议》进行必要的更新，更新后的协议条款一旦公布即代替原来的协议条款，您可在应用内相关页面查看最新版协议条款。在仙之侠道修改《协议》条款后，如果您不接受更新后的条款，请立即停止使用仙之侠道提供的软件和服务，您继续使用仙之侠道提供的软件和服务将被视为已接受了更新后的协议。
        1.4 本《协议》内容包括但不限于本协议以下内容，针对某些具体服务所约定的管理办法、公告、重要提示、指引、说明等均为本协议的补充内容，为本协议不可分割之组成部分，具有与本协议同等的法律效力，接受本协议即视为您同时接受以上管理办法、公告、重要提示、指引、说明等并受其约束；否则请您立即停止使用仙之侠道提供的软件和服务。
        
        
        
        二、定义 
        2. 1仙之侠道：本协议下文中，“仙之侠道”即指仙之侠道应用软件。
        2. 2用户：
        （1）用户必须是具备完全民事行为能力的自然人；
        （2）若您为18周岁以下的未成年人使用仙之侠道服务，需要在您父母或监护人的指导下使用仙之侠道。无民事行为能力人使用仙之侠道或限制民事行为能力人超过其民事权利或行为能力范围从事交易的，造成的一切后果，仙之侠道有权要求您及您的父母或监护人负责。
        2.3游戏规则：指仙之侠道游戏服务提供方不时发布并修订的关于仙之侠道游戏的用户守则、玩家条例、游戏公告、提示及通知等内容。
        2.4 仙之侠道游戏服务：指仙之侠道向您提供的与游戏相关的各项在线运营服务。
        2.5 您：又称“玩家”或“用户”，指被授权使用仙之侠道应用及其服务的自然人。
        2.6 创建或导入钱包：指您使用仙之侠道，确认履行本协议并创建或导入钱包的过程。在您的这台移动设备或仙之侠道的服务器，一旦丢失你需要借助明文私钥或助记词重置新密码。
        2.8信息提示：仙之侠道软件操作界面涉及的信息提示内容，建议用户按照相关步骤进行操作。
        2.9私钥：由256位随机字符构成，是用户拥有并使用数字代币的核心。
        2.10公钥：由私钥借助密码学原理单向推导生成，并用以生成数字货币地址，数字货币地址即为公开收款地址。
        2.11助记词：符合区块链BIP39 行业标准，由随机算法生成的12（或15/18/21/24）个有序单词组成。是私钥的易记录表现形式，方便用户备份保管。
        2.12个人信息：指以电子或者其他方式记录的能够单独或者与其他信息结合识别用户个人身份的各种信息，包括但不限于自然人的姓名、出生日期、身份证件号码、个人生物识别信息、住址、电话号码、银行卡号、邮件地址、钱包地址、移动设备信息、操作记录、交易记录等，但不包括用户的钱包密码、私钥、助记词、Keystore。
        2.13服务数据：指您在使用仙之侠道软件过程中产生的被服务器记录的各种数据，包括但不限于角色数据、虚拟物品数据、行为日志、购买日志等等数据。
        
        三、账号
        3.1您如果需要使用并享受仙之侠道应用中的游戏及其他服务，则您需要注册仙之侠道账号作为游戏及其他服务使用账号。如个人资料有任何变动，必须及时更新。因用户提供个人资料不准确、不真实而引发的一切后果由用户承担。
        3.2 仙之侠道账号的所有权归仙之侠道，用户完成注册申请手续后，获得仙之侠道账号的使用权。
        3.3您进一步知悉并同意，用户应当为自身注册帐户下的一切行为负责，因用户行为而导致的用户自身或其他任何第三方的任何损失或损害，仙之侠道不承担责任。
        3.4您进一步知悉并同意，您在游客模式下可能无法进行游戏充值或消费。且一旦您卸载或重装仙之侠道，或您更换手机、电脑等终端设备或该等终端设备损坏的，您在该游客模式下所有游戏相关数据可能都将会被清空，且无法查询和恢复。如因此造成您任何损失的，均由您自行承担。
        3.5您充分理解并同意，仙之侠道有权审查用户注册所提供的信息是否真实、有效，并应积极地采取技术与管理等合理措施保障用户账号的安全、有效；用户有义务妥善保管其账号及密码，并正确、安全地使用其账号及密码，若您丢失账号及密码，仙之侠道不提供账号和密码找回服务。
        3.6您理解并同意，您不得将游戏账号以任何方式提供给他人使用，包括但不限于不得以转让、出租、借用等方式提供给他人作包括但不限于代打代练等商业性使用。否则，因此产生任何法律后果及责任均由您自行承担，且仙之侠道有权对您的游戏账号采取包括但不限于警告、限制或禁止使用游戏帐号全部或部分功能、删除游戏账号及游戏数据及其他相关信息、封号直至注销的处理措施，因此造成的一切后果由您自行承担。
        
        
        四、用户信息收集、使用及保护
        4.1您同意并授权仙之侠道为履行本协议之目的收集您的用户信息，这些信息包括您系统中注册的信息、您游戏账号下的游戏数据以及其他您在使用软件服务的过程中向仙之侠道基于安全、用户体验优化等考虑而需收集的信息，仙之侠道对您的用户信息的收集将遵循本协议及相关法律的规定。
        4.2您充分理解并同意：仙之侠道可以根据您的用户信息，通过短信、电话、邮件等各种方式向您提供关于仙之侠道游戏的活动信息、推广信息等各类信息。
        4.3您理解并同意：为了更好地向您提供游戏服务，改善游戏体验，仙之侠道可对您游戏帐号中的昵称、头像以及在仙之侠道中的相关操作信息、游戏信息等信息（以下称“该等信息”。该等信息具体包括但不限于您的登录状态、对战信息/状态、成就信息等）进行使用，并可向您本人或其他用户或好友展示该等信息。
        4.4您应对通过仙之侠道游戏及相关服务了解、接收或可接触到的包括但不限于其他用户在内的任何人的个人信息予以充分尊重，您不应以搜集、复制、存储、传播或以其他任何方式使用其他用户的个人信息，否则，由此产生的后果由您自行承担。
        
        
        五.仙之侠道服务说明
        5.1仙之侠道对用户提供服务包括但不限于授权用户通过其账号进行在线游戏、即时通讯、添加好友、加入小组、发布评论、登录及使用充值服务。仙之侠道可以对其提供的所有服务予以变更、增加或强化，包括所推出的新功能，均受到本协议之规范。
        5.2仙之侠道所有产品和服务上可能包含了指向第三方网站的链接（以下简称“第三方网站”）。“第三方网站”非由仙之侠道控制，对于任何“第三方网站”的内容，包含但不限于“第三方网站”内含的任何链接，或“第三方网站”的任何改变或更新，仙之侠道均不予负责。“第三方网站”接收的网络传播或其它形式之传送，仙之侠道不予负责。
        5.3仙之侠道所有产品和服务上可能包含了指向第三方API服务。第三方API服务非由仙之侠道控制。对于任何通过第三方API进行的服务，在您使用仙之侠道集成的第三方API服务时，请您仔细阅读本协议及APP提示，了解交易或服务对象及产品信息，谨慎评估风险后再采取行动。所有您在第三方API进行的操作行为系您的个人行为，有约束力的合同关系在您和您的相对方之间建立，与仙之侠道无关。仙之侠道对因您的交易行为所引起的一切风险、责任、损失、费用不承担任何责任。
        5.4在任何情况下，仙之侠道不对因不可抗力导致的您在使用仙之侠道服务过程中遭受的损失承担责任。该等不可抗力事件包括但不限于国家法律、法规、政策及国家机关的命令及其他政府行为或者其它的诸如地震、水灾、雪灾、火灾、海啸、台风、罢工、战争等不可预测、不可避免且不可克服的事件。
        5.5仙之侠道可能因游戏软件BUG、版本更新缺陷、第三方病毒攻击或其他任何因素导致您的游戏角色、游戏道具、游戏装备及游戏币等账号数据发生异常。在数据异常的原因未得到查明前，仙之侠道有权暂时冻结该游戏账号；若查明数据异常为非正常游戏行为所致，仙之侠道有权恢复游戏账号数据至异常发生前的原始状态（包括向第三方追回被转移数据），且仙之侠道无须向您承担任何责任。
        5.6针对仙之侠道钱包服务，仙之侠道对以下情形不承担责任：
        （1）因用户遗失移动设备、删除且未备份仙之侠道、删除且未备份钱包、钱包被盗或遗忘钱包密码、私钥、助记词、Keystore而导致的数字代币丢失；
        （2）因用户自行泄露钱包密码、私钥、助记词、Keystore，或借用、转让或授权他人使用自己的移动设备或仙之侠道钱包，或未通过仙之侠道官方渠道下载仙之侠道应用程序或其他不安全的方式使用仙之侠道应用程序导致的数字代币丢失；
        5.7您充分理解并同意，为高效利用服务器资源，如果您长期未使用游戏账号登录仙之侠道，仙之侠道有权视需要，在提前通知的情况下，对该账号及其账号下的游戏数据及相关信息采取删除等处置措施，上述处置可能导致您对该游戏账号下相关权益的丧失，对此仙之侠道不承担任何责任。
        5.8仙之侠道自行决定终止运营仙之侠道游戏及其他服务时，仙之侠道会按照文化部有关网络游戏终止运营的相关规定处理游戏及其他服务终止运营相关事宜，以保障用户合法权益。
        5.9您理解并接受仙之侠道提供的服务中可能包括广告，同意在使用服务的过程中显示仙之侠道和第三方供应商、合作伙伴提供的广告。
        
        六、用户行为规范
         用户在使用仙之侠道服务过程中，必须遵循以下原则：
        6.1 遵守中国有关的法律和法规；
        6.2 遵守所有与网络服务有关的网络协议、规定和程序；
        6.3 不得为任何非法目的而使用网络服务系统；
        6.4 不得利用仙之侠道服务系统进行任何可能对互联网或移动网正常运转造成不利影响的行为；
        6.5 不得利用仙之侠道提供的服务上传、展示或传播任何虚假的、骚扰性的、中伤他人的、辱骂性的、恐吓性的、庸俗淫秽的或其他任何非法的信息资料；
        6.6 不得侵犯仙之侠道和其他任何第三方的专利权、著作权、商标权、名誉权或其他任何合法权益；
        6.7 不得利用仙之侠道服务系统进行任何不利于仙之侠道的行为；
        6.8不得利用任何相关系统漏洞或服务漏洞，包括但不限于仙之侠道的系统或服务漏洞、仙之侠道相关合作方的系统或服务漏洞，作出损害仙之侠道合法权益的行为；
        6.9对游戏软件进行反向工程、反向汇编、反向编译或者以其他方式尝试发现软件的源代码；
        6.10对游戏软件或者软件运行过程中释放到任何终端内存中的数据、软件运行过程中客户端与服务器端的交互数据，以及软件运行所必需的系统数据，进行复制、修改、增加、删除、挂接运行或创作任何衍生作品，形式包括但不限于使用插件、外挂或非经合法授权的第三方工具/服务接入软件和相关系统；
        6.11 如发现任何非法使用用户账号或账号出现安全漏洞的情况，应立即通告仙之侠道。
        6.12 如用户在使用仙之侠道服务时违反相关法律规定或者本协议的任何约定，仙之侠道或其授权人有权采取包括但不限于下列措施：
        1.要求用户改正相关行为；
        2.变更、中断、终止用户使用仙之侠道的服务；
        3.对用户的账号采取临时性或永久性的禁止登陆（即封号）措施等。
        
        七、知识产权 
        7.1 仙之侠道提供的服务中包含的任何文本、图片、图形、音频和/或视频资料均受版权、商标和/或其它财产所有权法律的保护，未经相关权利人同意，上述资料均不得用于任何商业目的。
        7.2 仙之侠道为提供服务而使用的任何软件（包括但不限于软件中所含的任何图像、照片、动画、录像、录音、音乐、文字等）的一切权利均属于该软件的著作权人，未经该软件的著作权人许可，用户不得对该软件进行反向工程（reverse engineer）、反向编译（decompile）或反汇编（disassemble），不得进行任何有可能损害著作权人合法权益的行为。
        
        八、隐私声明
        8.1 保护用户隐私是仙之侠道的一项基本政策，仙之侠道保证不对外公开或向第三方提供单个用户的注册资料及用户在使用本服务时存储在仙之侠道的非公开内容，但下列情况除外：
        （1） 事先获得用户的明确授权；
        （2） 根据有关的法律法规要求；
        （3） 按照相关政府主管部门的要求；
        （4） 为维护社会公众的利益；
        （5）为维护仙之侠道的合法权益。
        8.2仙之侠道制定了以下三项隐私权保护原则，指导我们如何来处理产品中涉及到用户隐私权和用户信息等方面的问题：
        （1） 利用我们收集的信息为用户提供有价值的产品和服务。
        （2） 开发符合隐私权标准和隐私权惯例的产品。
        （3） 尽最大的努力保护我们掌握的信息。
        8.3仙之侠道非常重视对未成年人个人信息的保护。若您是18周岁以下的未成年人，在使用仙之侠道服务前，应事先取得您家长或法定监护人的同意。
        
        九、资费说明
        9.1 仙之侠道在提供产品和服务时，可能会对部分产品和服务向用户收取一定的费用。在此情况下，仙之侠道会在相关页面上做明确的提示。
        9.2仙之侠道有权决定所提供的产品和服务的资费标准和收费方式，仙之侠道可能会就不同的产品和服务制定不同的资费标准和收费方式，也可能按照仙之侠道所提供的产品和服务的不同阶段确定不同的资费标准和收费方式。另外，仙之侠道有权利根据市场实际情况修改资费政策。仙之侠道会将有关产品和服务的收费信息以及与该产品和服务有关的资费标准、收费方式、购买方式或其他有关资费政策的信息放置在该产品和服务相关网页的显著位置。
        9.3对于仙之侠道的收费产品和服务，用户可自主选择接受或拒绝该收费产品或服务，并保证在使用收费产品或服务时，将按照仙之侠道的相关收费规定支付费用。
        9.4除非法律另有明文规定，否则用户不得要求仙之侠道返还用户已经支付予仙之侠道游戏的任何资费（以下简称“退款”），无论该等资费是否已被消费。仙之侠道有权决定是否、何时、以何种方式向用户退款。仙之侠道同意退款的，用户应补偿支付时使用信用卡、手机等支付渠道产生的费用，仙之侠道有权在返还用户的资费中直接扣收。存在下列情况之一的，仙之侠道有权不予退款：
        1.用户已经消费的资费部分，不予退款；
        2.用户存在违反本协议约定的行为的，仙之侠道有权不予退款；
        （3）仙之侠道在产品和服务提供过程中赠送的充值金额、虚拟货币、虚拟道具等，不予退款或变现。
        
        十、免责条款
        10.1 用户之间因线上游戏行为所发生或可能发生的任何心理、生理上的伤害和经济上的损失，仙之侠道不承担任何责任。
        10.2 用户因其个人原因造成账号资料保管不妥而导致个人信息数据被他人泄露或账号中虚拟财产、游戏道具被盗或损失的，仙之侠道不承担任何责任。
        10.3 用户因除了按游戏规则进行游戏的行为外的其他行为触犯了中华人民共和国法律法规的，责任自负，仙之侠道不承担任何责任。
        10.4 用户账号长期不使用的，仙之侠道有权进行回收，因此带来的用户个人信息数据丢失、账户内虚拟财产和游戏道具清零等一切损失由用户个人承担，仙之侠道不承担任何责任。
        10.5基于网络环境的复杂性，仙之侠道不担保服务一定能满足用户的要求，不保证各项服务完全无错误、无缺陷、不会中断、或不会受到任何来自他方因素的干扰及损害等，对服务的及时性、安全性也不作担保。因网络安全、网络故障问题和其他用户的非法行为给用户造成的损失，仙之侠道不承担任何责任。
        10.6 基于网络环境的特殊性，仙之侠道不担保对用户限制性行为和禁止性行为的判断的准确性，用户因此产生的任何损失仙之侠道不承担任何责任，用户可按仙之侠道相关规定进行申诉解决。
        10.7 仙之侠道不保证您从第三方获得的仙之侠道虚拟货币、游戏道具等游戏物品能正常使用，也不保证该等物品不被索回，因私下购买虚拟货币、游戏道具等游戏物品所产生的一切损失均由用户自行承担，仙之侠道不承担任何责任。
        10.8用户在使用仙之侠道服务时，必须遵守中华人民共和国相关法律法规的规定，用户同意将不会利用本服务进行任何违法或不正当的活动，包括但不限于下列行为∶
        上传、展示、张贴、传播或以其它方式传送含有下列内容之一的信息：
           （1）反对宪法所确定的基本原则的；
           （2）危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的；
           （3）损害国家荣誉和利益的；
           （4）煽动民族仇恨、民族歧视、破坏民族团结的；
           （5）破坏国家宗教政策，宣扬邪教和封建迷信的；
           （6）散布谣言，扰乱社会秩序，破坏社会稳定的；
           （7）散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的；
           （8）侮辱或者诽谤他人，侵害他人合法权利的；
           （9）含有虚假、有害、胁迫、侵害他人隐私、骚扰、侵害、中伤、粗俗、猥亵、或其它道德上令人反感的内容；
           （10）含有中国法律、法规、规章、条例以及任何具有法律效力之规范所限制或禁止的其它内容的或以任何方式危害他人的合法权益。
        10.9用户违反本协议的约定或相关的服务条款的规定，导致或产生的任何第三方主张的任何索赔、要求或损失，包括合理的律师费，您同意赔偿仙之侠道与合作公司、关联公司，并使之免受损害。对此，仙之侠道有权视用户的行为性质，采取包括但不限于下列一项或多项措施：（1）删除用户发布信息内容；（2）暂停或终止使用许可；（3）暂停或终止服务；（4）限制或禁止使用账号（封号）；（5）回收账号；（6）追究法律责任等。因上述措施所导致的用户帐号内相关游戏道具（包括但不限于游戏虚拟货币、游戏装备等）、信息数据等过期或者失效等后果，由用户自行承担。同时，仙之侠道会按照司法部门的要求，协助司法调查。
        
        
        十一、未成年人使用条款及健康游戏忠告
        11.1 未成年人用户必须遵守全国青少年网络文明公约：
        要善于网上学习，不浏览不良信息；要诚实友好交流，不侮辱欺诈他人；要增强自护意识，不随意约会网友；要维护网络安全，不破坏网络秩序；要有益身心健康，不沉溺虚拟时空。
        11.2根据国家新闻出版总署关于健康游戏的忠告，仙之侠道提醒您：抵制不良游戏，拒绝盗版游戏；注意自我保护，谨防受骗上当；适度游戏益脑，沉迷游戏伤身。
        
        十二、法律适用及争议解决 
        12.1 本协议适用中华人民共和国大陆地区法律。
        12.2 因本协议引起的或与本协议有关的任何争议，各方应友好协商解决；协商不成的，任何一方均可将有关争议向仙之侠道公司所在地人民法院提起诉讼。
        
        十三、其他条款 
        13.1 如果本协议中的任何条款无论因何种原因完全或部分无效或不具有执行力，或违反任何适用的法律，则该条款被视为删除，但本协议的其余条款仍继续有效并且有约束力。
        13.2 仙之侠道在法律允许范围内对本协议拥有解释权与修改权。
        仙之侠道团队
        2019年4月`,
        zh_Hant:`一.總則
        1.1 本《隱私政策及用戶協議》為您（即用戶）與仙之俠道遊戲（以下簡稱仙之俠道）就仙之俠道所提供的服務達成的協議。仙之俠道在此特別提醒您認真閱讀、充分理解本《協議》:用戶應認真閱讀、充分理解本《協議》中各條款，特別涉及免除或者限制仙之俠道責任的免責條款，對用戶的權利限制的條款，法律適用、爭議解決方式的條款。如果您未滿18周歲，請在法定監護人的陪同下閱讀本《協議》。
        1.2 請您審慎閱讀並選擇同意或不同意本《協議》，除非您接受本《協議》所有條款，否則您無權以下載、安裝、升級、登陸、顯示、運行、截屏等方式使用本軟件及其相關服務。您的下載、安裝、顯示、賬號獲取和登錄、截屏等行為表明您自願接受本協議的全部內容並受其約束，不得以任何理由包括但不限於以未能認真閱讀本協議等作為糾紛抗辯理由。
        1.3 仙之俠道有權不定期對本《協議》進行必要的更新，更新後的協議條款一旦公佈即代替原來的協議條款，您可在應用內相關頁面查看最新版協議條款。在仙之俠道修改《協議》條款後，如果您不接受更新後的條款，請立即停止使用仙之俠道提供的軟件和服務，您繼續使用仙之俠道提供的軟件和服務將被視為已接受了更新後的協議。
        1.4 本《協議》內容包括但不限於本協議以下內容，針對某些具體服務所約定的管理辦法、公告、重要提示、指引、說明等均為本協議的補充內容，為本協議不可分割之組成部分，具有與本協議同等的法律效力，接受本協議即視為您同時接受以上管理辦法、公告、重要提示、指引、說明等並受其約束；否則請您立即停止使用仙之俠道提供的軟件和服務。
        
        
        
        二、定義
        2. 1仙之俠道：本協議下文中，“仙之俠道”即指仙之俠道應用軟件。
        2. 2用戶：
        （1）用戶必須是具備完全民事行為能力的自然人；
        （2）若您為18周歲以下的未成年人使用仙之俠道服務，需要在您父母或監護人的指導下使用仙之俠道。無民事行為能力人使用仙之俠道或限制民事行為能力人超過其民事權利或行為能力範圍從事交易的，造成的一切後果，仙之俠道有權要求您及您的父母或監護人負責。
        2.3遊戲規則：指仙之俠道遊戲服務提供方不時發布並修訂的關於仙之俠道遊戲的用戶守則、玩家條例、遊戲公告、提示及通知等內容。
        2.4 仙之俠道遊戲服務：指仙之俠道向您提供的與遊戲相關的各項在線運營服務。
        2.5 您：又稱“玩家”或“用戶”，指被授權使用仙之俠道應用及其服務的自然人。
        2.6 創建或導入錢包：指您使用仙之俠道，確認履行本協議並創建或導入錢包的過程。在您的這台移動設備或仙之俠道的服務器，一旦丟失你需要藉助明文私鑰或助記詞重置新密碼。
        2.8信息提示：仙之俠道軟件操作界面涉及的信息提示內容，建議用戶按照相關步驟進行操作。
        2.9私鑰：由256位隨機字符構成，是用戶擁有並使用數字代幣的核心。
        2.10公鑰：由私鑰借助密碼學原理單向推導生成，並用以生成數字貨幣地址，數字貨幣地址即為公開收款地址。
        2.11助記詞：符合區塊鏈BIP39 行業標準，由隨機算法生成的12（或15/18/21/24）個有序單詞組成。是私鑰的易記錄表現形式，方便用戶備份保管。
        2.12個人信息：指以電子或者其他方式記錄的能夠單獨或者與其他信息結合識別用戶個人身份的各種信息，包括但不限於自然人的姓名、出生日期、身份證件號碼、個人生物識別信息、住址、電話號碼、銀行卡號、郵件地址、錢包地址、移動設備信息、操作記錄、交易記錄等，但不包括用戶的錢包密碼、私鑰、助記詞、Keystore。
        2.13服務數據：指您在使用仙之俠道軟件過程中產生的被服務器記錄的各種數據，包括但不限於角色數據、虛擬物品數據、行為日誌、購買日誌等等數據。
        
        三、賬號
        3.1您如果需要使用並享受仙之俠道應用中的遊戲及其他服務，則您需要註冊仙之俠道賬號作為遊戲及其他服務使用賬號。如個人資料有任何變動，必須及時更新。因用戶提供個人資料不准確、不真實而引發的一切後果由用戶承擔。
        3.2 仙之俠道賬號的所有權歸仙之俠道，用戶完成註冊申請手續後，獲得仙之俠道賬號的使用權。
        3.3您進一步知悉並同意，用戶應當為自身註冊帳戶下的一切行為負責，因用戶行為而導致的用戶自身或其他任何第三方的任何損失或損害，仙之俠道不承擔責任。
        3.4您進一步知悉並同意，您在遊客模式下可能無法進行遊戲充值或消費。且一旦您卸載或重裝仙之俠道，或您更換手機、電腦等終端設備或該等終端設備損壞的，您在該遊客模式下所有遊戲相關數據可能都將會被清空，且無法查詢和恢復。如因此造成您任何損失的，均由您自行承擔。
        3.5您充分理解並同意，仙之俠道有權審查用戶註冊所提供的信息是否真實、有效，並應積極地採取技術與管理等合理措施保障用戶賬號的安全、有效；用戶有義務妥善保管其賬號及密碼，並正確、安全地使用其賬號及密碼，若您丟失賬號及密碼，仙之俠道不提供賬號和密碼找回服務。
        3.6您理解並同意，您不得將游戲賬號以任何方式提供給他人使用，包括但不限於不得以轉讓、出租、借用等方式提供給他人作包括但不限於代打代練等商業性使用。否則，因此產生任何法律後果及責任均由您自行承擔，且仙之俠道有權對您的遊戲賬號採取包括但不限於警告、限製或禁止使用遊戲帳號全部或部分功能、刪除遊戲賬號及遊戲數據及其他相關信息、封號直至註銷的處理措施，因此造成的一切後果由您自行承擔。
        
        
        四、用戶信息收集、使用及保護
        4.1您同意並授權仙之俠道為履行本協議之目的收集您的用戶信息，這些信息包括您系統中註冊的信息、您遊戲賬號下的遊戲數據以及其他您在使用軟件服務的過程中向仙之俠道基於安全、用戶體驗優化等考慮而需收集的信息，仙之俠道對您的用戶信息的收集將遵循本協議及相關法律的規定。
        4.2您充分理解並同意：仙之俠道可以根據您的用戶信息，通過短信、電話、郵件等各種方式向您提供關於仙之俠道遊戲的活動信息、推廣信息等各類信息。
        4.3您理解並同意：為了更好地向您提供遊戲服務，改善遊戲體驗，仙之俠道可對您遊戲帳號中的暱稱、頭像以及在仙之俠道中的相關操作信息、遊戲信息等信息（以下稱“該等信息”。該等信息具體包括但不限於您的登錄狀態、對戰信息/狀態、成就信息等）進行使用，並可向您本人或其他用戶或好友展示該等信息。
        4.4您應對通過仙之俠道遊戲及相關服務了解、接收或可接觸到的包括但不限於其他用戶在內的任何人的個人信息予以充分尊重，您不應以蒐集、複製、存儲、傳播或以其他任何方式使用其他用戶的個人信息，否則，由此產生的後果由您自行承擔。
        
        
        五.仙之俠道服務說明
        5.1仙之俠道對用戶提供服務包括但不限於授權用戶通過其賬號進行在線遊戲、即時通訊、添加好友、加入小組、發布評論、登錄及使用充值服務。仙之俠道可以對其提供的所有服務予以變更、增加或強化，包括所推出的新功能，均受到本協議之規範。
        5.2仙之俠道所有產品和服務上可能包含了指向第三方網站的鏈接（以下簡稱“第三方網站”）。 “第三方網站”非由仙之俠道控制，對於任何“第三方網站”的內容，包含但不限於“第三方網站”內含的任何鏈接，或“第三方網站”的任何改變或更新，仙之俠道均不予負責。 “第三方網站”接收的網絡傳播或其它形式之傳送，仙之俠道不予負責。
        5.3仙之俠道所有產品和服務上可能包含了指向第三方API服務。第三方API服務非由仙之俠道控制。對於任何通過第三方API進行的服務，在您使用仙之俠道集成的第三方API服務時，請您仔細閱讀本協議及APP提示，了解交易或服務對象及產品信息，謹慎評估風險後再採取行動。所有您在第三方API進行的操作行為系您的個人行為，有約束力的合同關係在您和您的相對方之間建立，與仙之俠道無關。仙之俠道對因您的交易行為所引起的一切風險、責任、損失、費用不承擔任何責任。
        5.4在任何情況下，仙之俠道不對因不可抗力導致的您在使用仙之俠道服務過程中遭受的損失承擔責任。該等不可抗力事件包括但不限於國家法律、法規、政策及國家機關的命令及其他政府行為或者其它的諸如地震、水災、雪災、火災、海嘯、颱風、罷工、戰爭等不可預測、不可避免且不可克服的事件。
        5.5仙之俠道可能因遊戲軟件BUG、版本更新缺陷、第三方病毒攻擊或其他任何因素導致您的遊戲角色、遊戲道具、遊戲裝備及遊戲幣等賬號數據發生異常。在數據異常的原因未得到查明前，仙之俠道有權暫時凍結該遊戲賬號；若查明數據異常為非正常遊戲行為所致，仙之俠道有權恢復遊戲賬號數據至異常發生前的原始狀態（包括向第三方追回被轉移數據），且仙之俠道無須向您承擔任何責任。
        5.6針對仙之俠道錢包服務，仙之俠道對以下情形不承擔責任：
        （1）因用戶遺失移動設備、刪除且未備份仙之俠道、刪除且未備份錢包、錢包被盜或遺忘錢包密碼、私鑰、助記詞、Keystore而導致的數字代幣丟失；
        （2）因用戶自行洩露錢包密碼、私鑰、助記詞、Keystore，或借用、轉讓或授權他人使用自己的移動設備或仙之俠道錢包，或未通過仙之俠道官方渠道下載仙之俠道應用程序或其他不安全的方式使用仙之俠道應用程序導致的數字代幣丟失；
        5.7您充分理解並同意，為高效利用服務器資源，如果您長期未使用遊戲賬號登錄仙之俠道，仙之俠道有權視需要，在提前通知的情況下，對該賬號及其賬號下的遊戲數據及相關信息採取刪除等處置措施，上述處置可能導致您對該遊戲賬號下相關權益的喪失，對此仙之俠道不承擔任何責任。
        5.8仙之俠道自行決定終止運營仙之俠道遊戲及其他服務時，仙之俠道會按照文化部有關網絡遊戲終止運營的相關規定處理遊戲及其他服務終止運營相關事宜，以保障用戶合法權益。
        5.9您理解並接受仙之俠道提供的服務中可能包括廣告，同意在使用服務的過程中顯示仙之俠道和第三方供應商、合作夥伴提供的廣告。
        六、用戶行為規範
    用戶在使用仙之俠道服務過程中，必須遵循以下原則：
    6.1 遵守中國有關的法律和法規；
    6.2 遵守所有與網絡服務有關的網絡協議、規定和程序；
    6.3 不得為任何非法目的而使用網絡服務系統；
    6.4 不得利用仙之俠道服務系統進行任何可能對互聯網或移動網正常運轉造成不利影響的行為；
    6.5 不得利用仙之俠道提供的服務上傳、展示或傳播任何虛假的、騷擾性的、中傷他人的、辱罵性的、恐嚇性的、庸俗淫穢的或其他任何非法的信息資料；
    6.6 不得侵犯仙之俠道和其他任何第三方的專利權、著作權、商標權、名譽權或其他任何合法權益；
    6.7 不得利用仙之俠道服務系統進行任何不利於仙之俠道的行為；
    6.8不得利用任何相關係統漏洞或服務漏洞，包括但不限於仙之俠道的系統或服務漏洞、仙之俠道相關合作方的系統或服務漏洞，作出損害仙之俠道合法權益的行為；
    6.9對遊戲軟件進行反向工程、反向彙編、反向編譯或者以其他方式嘗試發現軟件的源代碼；
    6.10對遊戲軟件或者軟件運行過程中釋放到任何終端內存中的數據、軟件運行過程中客戶端與服務器端的交互數據，以及軟件運行所必需的系統數據，進行複制、修改、增加、刪除、掛接運行或創作任何衍生作品，形式包括但不限於使用插件、外掛或非經合法授權的第三方工具/服務接入軟件和相關係統；
    6.11 如發現任何非法使用用戶賬號或賬號出現安全漏洞的情況，應立即通告仙之俠道。
    6.12 如用戶在使用仙之俠道服務時違反相關法律規定或者本協議的任何約定，仙之俠道或其授權人有權採取包括但不限於下列措施：
    1.要求用戶改正相關行為；
    2.變更、中斷、終止用戶使用仙之俠道的服務；
    3.對用戶的賬號採取臨時性或永久性的禁止登陸（即封號）措施等。

    七、知識產權 
    7.1 仙之俠道提供的服務中包含的任何文本、圖片、圖形、音頻和/或視頻資料均受版權、商標和/或其它財產所有權法律的保護，未經相關權利人同意，上述資料均不得用於任何商業目的。
    7.2 仙之俠道為提供服務而使用的任何軟件（包括但不限於軟件中所含的任何圖像、照片、動畫、錄像、錄音、音樂、文字等）的一切權利均屬於該軟件的著作權人，未經該軟件的著作權人許可，用戶不得對該軟件進行反向工程（reverse engineer）、反向編譯（decompile）或反彙編（disassemble），不得進行任何有可能損害著作權人合法權益的行為。

    八、隱私聲明
    8.1 保護用戶隱私是仙之俠道的一項基本政策，仙之俠道保證不對外公開或向第三方提供單個用戶的註冊資料及用戶在使用本服務時存儲在仙之俠道的非公開內容，但下列情況除外：
    （1） 事先獲得用戶的明確授權；
    （2） 根據有關的法律法規要求；
    （3） 按照相關政府主管部門的要求；
    （4） 為維護社會公眾的利益；
    （5）為維護仙之俠道的合法權益。
    8.2仙之俠道製定了以下三項隱私權保護原則，指導我們如何來處理產品中涉及到用戶隱私權和用戶信息等方面的問題：
    （1） 利用我們收集的信息為用戶提供有價值的產品和服務。
    （2） 開發符合隱私權標準和隱私權慣例的產品。
    （3） 盡最大的努力保護我們掌握的信息。
    8.3仙之俠道非常重視對未成年人個人信息的保護。若您是18周歲以下的未成年人，在使用仙之俠道服務前，應事先取得您家長或法定監護人的同意。

    九、資費說明
    9.1 仙之俠道在提供產品和服務時，可能會對部分產品和服務向用戶收取一定的費用。在此情況下，仙之俠道會在相關頁面上做明確的提示。
    9.2仙之俠道有權決定所提供的產品和服務的資費標準和收費方式，仙之俠道可能會就不同的產品和服務制定不同的資費標準和收費方式，也可能按照仙之俠道所提供的產品和服務的不同階段確定不同的資費標準和收費方式。另外，仙之俠道有權利根據市場實際情況修改資費政策。仙之俠道會將有關產品和服務的收費信息以及與該產品和服務有關的資費標準、收費方式、購買方式或其他有關資費政策的信息放置在該產品和服務相關網頁的顯著位置。
    9.3對於仙之俠道的收費產品和服務，用戶可自主選擇接受或拒絕該收費產品或服務，並保證在使用收費產品或服務時，將按照仙之俠道的相關收費規定支付費用。
    9.4除非法律另有明文規定，否則用戶不得要求仙之俠道返還用戶已經支付予仙之俠道遊戲的任何資費（以下簡稱“退款”），無論該等資費是否已被消費。仙之俠道有權決定是否、何時、以何種方式向用戶退款。仙之俠道同意退款的，用戶應補償支付時使用信用卡、手機等支付渠道產生的費用，仙之俠道有權在返還用戶的資費中直接扣收。存在下列情況之一的，仙之俠道有權不予退款：
    1.用戶已經消費的資費部分，不予退款；
    2.用戶存在違反本協議約定的行為的，仙之俠道有權不予退款；
    （3）仙之俠道在產品和服務提供過程中贈送的充值金額、虛擬貨幣、虛擬道具等，不予退款或變現。

    十、免責條款
    10.1 用戶之間因線上游戲行為所發生或可能發生的任何心理、生理上的傷害和經濟上的損失，仙之俠道不承擔任何責任。
    10.2 用戶因其個人原因造成賬號資料保管不妥而導致個人信息數據被他人洩露或賬號中虛擬財產、遊戲道具被盜或損失的，仙之俠道不承擔任何責任。
    10.3 用戶因除了按遊戲規則進行遊戲的行為外的其他行為觸犯了中華人民共和國法律法規的，責任自負，仙之俠道不承擔任何責任。
    10.4 用戶賬號長期不使用的，仙之俠道有權進行回收，因此帶來的用戶個人信息數據丟失、賬戶內虛擬財產和遊戲道具清零等一切損失由用戶個人承擔，仙之俠道不承擔任何責任。
    10.5基於網絡環境的複雜性，仙之俠道不擔保服務一定能滿足用戶的要求，不保證各項服務完全無錯誤、無缺陷、不會中斷、或不會受到任何來自他方因素的干擾及損害等，對服務的及時性、安全性也不作擔保。因網絡安全、網絡故障問題和其他用戶的非法行為給用戶造成的損失，仙之俠道不承擔任何責任。
    10.6 基於網絡環境的特殊性，仙之俠道不擔保對用戶限制性行為和禁止性行為的判斷的準確性，用戶因此產生的任何損失仙之俠道不承擔任何責任，用戶可按仙之俠道相關規定進行申訴解決。
    10.7 仙之俠道不保證您從第三方獲得的仙之俠道虛擬貨幣、遊戲道具等遊戲物品能正常使用，也不保證該等物品不被索回，因私下購買虛擬貨幣、遊戲道具等遊戲物品所產生的一切損失均由用戶自行承擔，仙之俠道不承擔任何責任。
    10.8用戶在使用仙之俠道服務時，必須遵守中華人民共和國相關法律法規的規定，用戶同意將不會利用本服務進行任何違法或不正當的活動，包括但不限於下列行為∶
    上傳、展示、張貼、傳播或以其它方式傳送含有下列內容之一的信息：
    （1）反對憲法所確定的基本原則的；
    （2）危害國家安全，洩露國家秘密，顛覆國家政權，破壞國家統一的；
    （3）損害國家榮譽和利益的；
    （4）煽動民族仇恨、民族歧視、破壞民族團結的；
    （5）破壞國家宗教政策，宣揚邪教和封建迷信的；
    （6）散佈謠言，擾亂社會秩序，破壞社會穩定的；
    （7）散佈淫穢、色情、賭博、暴力、兇殺、恐怖或者教唆犯罪的；
    （8）侮辱或者誹謗他人，侵害他人合法權利的；
    （9）含有虛假、有害、脅迫、侵害他人隱私、騷擾、侵害、中傷、粗俗、猥褻、或其它道德上令人反感的內容；
    （10）含有中國法律、法規、規章、條例以及任何具有法律效力之規範所限製或禁止的其它內容的或以任何方式危害他人的合法權益。
    10.9用戶違反本協議的約定或相關的服務條款的規定，導致或產生的任何第三方主張的任何索賠、要求或損失，包括合理的律師費，您同意賠償仙之俠道與合作公司、關聯公司，並使之免受損害。對此，仙之俠道有權視用戶的行為性質，採取包括但不限於下列一項或多項措施：（1）刪除用戶發布信息內容；（2）暫停或終止使用許可；（3）暫停或終止服務；（4）限製或禁止使用賬號（封號）；（5）回收賬號；（6）追究法律責任等。因上述措施所導致的用戶帳號內相關遊戲道具（包括但不限於遊戲虛擬貨幣、遊戲裝備等）、信息數據等過期或者失效等後果，由用戶自行承擔。同時，仙之俠道會按照司法部門的要求，協助司法調查。


    十一、未成年人使用條款及健康遊戲忠告
    11.1 未成年人用戶必須遵守全國青少年網絡文明公約：
    要善於網上學習，不瀏覽不良信息；要誠實友好交流，不侮辱欺詐他人；要增強自護意識，不隨意約會網友；要維護網絡安全，不破壞網絡秩序；要有益身心健康，不沉溺虛擬時空。
    11.2根據國家新聞出版總署關於健康遊戲的忠告，仙之俠道提醒您：抵制不良遊戲，拒絕盜版遊戲；注意自我保護，謹防受騙上當；適度遊戲益腦，沉迷遊戲傷身。

    十二、法律適用及爭議解決 
    12.1 本協議適用中華人民共和國大陸地區法律。
    12.2 因本協議引起的或與本協議有關的任何爭議，各方應友好協商解決；協商不成的，任何一方均可將有關爭議向仙之俠道公司所在地人民法院提起訴訟。

    十三、其他條款 
    13.1 如果本協議中的任何條款無論因何種原因完全或部分無效或不具有執行力，或違反任何適用的法律，則該條款被視為刪除，但本協議的其餘條款仍繼續有效並且有約束力。
    13.2 仙之俠道在法律允許範圍內對本協議擁有解釋權與修改權。
    仙之俠道團隊
    2019年4月`,
        en:``
    };

    return privacyPolicy[getLang()];
};