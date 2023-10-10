import { MMKVLoader, useMMKVStorage } from "react-native-mmkv-storage";

// create storage instance
const storage = new MMKVLoader().withEncryption().initialize();

/**
 * uses encrypted app storage
 * 
 * @param key {string}
 * @returns [value, setValue]
 */
export const useStorage = (key: string, defaultValue?: any) => useMMKVStorage(key, storage, defaultValue);