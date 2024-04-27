import { StateStorage } from "zustand/middleware";
// https://docs.pmnd.rs/zustand/guides/connect-to-state-with-url-hash
// Real developers copy from documentation
export const getUrlSearch = () => {
  return window.location.search.slice(1);
};

const JSURL = require("jsurl");

export const persistentStorage: StateStorage = {
  getItem: (key): string => {
    // Check URL first
    if (getUrlSearch()) {
      const searchParams = new URLSearchParams(getUrlSearch());
      const storedValue = searchParams.get(key);
      return JSURL.parse(storedValue as string);
    } else {
      // Otherwise, we should load from localstorage or alternative storage
      return JSURL.parse(localStorage.getItem(key) as string);
    }
  },
  setItem: (key, newValue): void => {
    // Check if query params exist at all, can remove check if always want to set URL
    // if (getUrlSearch()) {
    const searchParams = new URLSearchParams(getUrlSearch());
    searchParams.set(key, JSURL.stringify(newValue));
    searchParams.delete("logsdata");
    window.history.replaceState(null, "", `?${searchParams.toString()}`);
    // }
    localStorage.setItem(key, JSURL.stringify(newValue));
  },
  removeItem: (key): void => {
    const searchParams = new URLSearchParams(getUrlSearch());
    searchParams.delete(key);

    window.location.search = searchParams.toString();
  },
};
