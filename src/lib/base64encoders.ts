export function encodeString(_string: string) {
  return btoa(_string);
}

export function decodeString(_string: string) {
  return atob(_string);
}
