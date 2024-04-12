export const buildURLSuffix = (params: any, version = 0) => {
  const searchParams = new URLSearchParams();

  const zustandStoreParams = {
    state: params,
    version: version, // version is here because that is included with how Zustand sets the state
  };

  // The URL param key should match the name of the store, as specified as in the storage options
  searchParams.set("build", JSON.stringify(zustandStoreParams));
  return searchParams.toString();
};

export const buildShareableUrl = (params: any, version: number) => {
  if (typeof window !== "undefined") {
    return `${window.location.origin}?${buildURLSuffix(params, version)}`;
  } else {
    return "";
  }
};
