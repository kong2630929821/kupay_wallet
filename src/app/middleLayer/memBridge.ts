import { deleteAccount, getAllAccount, getCloudBalances, getStore, setStore } from '../store/memstore';

/**
 * memstroe.ts 对应的 bridge
 */

/**
 * 获取store数据
 */
export const getStoreData = (key:string, defaultValue = undefined):Promise<any> => {
    return new Promise((resolve) => {
        resolve(getStore(key,defaultValue));
    });
};

/**
 * 更新store并通知
 */
export const setStoreData = (path: string, data: any, notified = true):Promise<any> => {
    return new Promise((resolve) => {
        setStore(path,data,notified);
        resolve();
    });
};

/**
 * 获取所有的账户列表
 */
export const callGetAllAccount = ():Promise<any> => {
    return new Promise((resolve) => {
        resolve(getAllAccount());
    });
};

/**
 * 获取云端余额
 */
export const callGetCloudBalances = ():Promise<any> => {
    return new Promise((resolve) => {
        resolve(getCloudBalances());
    });
};

/**
 * 删除账户
 */
export const callDeleteAccount = (id: string) => {
    return new Promise((resolve) => {
        deleteAccount(id);
        resolve();
    });
};