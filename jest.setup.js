// Polyfill TextEncoder for Node.js environment
if (typeof global.TextEncoder === "undefined") {
  const { TextEncoder } = require("util")
  global.TextEncoder = TextEncoder
}

if (typeof global.TextDecoder === "undefined") {
  const { TextDecoder } = require("util")
  global.TextDecoder = TextDecoder
}
