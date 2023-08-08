export const getRandomString = () => {
  const randomBuffer = window.crypto.getRandomValues(new Uint8Array(16))
  return Array.from(randomBuffer, (byte) => ('0' + byte.toString(16)).slice(-2)).join('')
}
