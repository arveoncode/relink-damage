export const buildURLSuffix = (params: any, version = 0) => {
  const searchParams = new URLSearchParams();

  const zustandStoreParams = {
    state: {
      character: params.character,
      otherInputs: params.otherInputs,
      overmasteries: params.overmasteries,
      traits: params.traits,
    },
    version: version, // version is here because that is included with how Zustand sets the state
  };

  // The URL param key should match the name of the store, as specified as in the storage options
  searchParams.set("character", JSON.stringify(zustandStoreParams));
  return searchParams.toString();
};

export const buildShareableUrl = (params: any, version: number) => {
  return `${window.location.origin}?${buildURLSuffix(params, version)}`;
};
