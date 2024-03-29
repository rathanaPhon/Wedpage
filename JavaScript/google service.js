const { getAsset } = require('node:sea');
// Returns a copy of the data in an ArrayBuffer
const image = getAsset('a.jpg');
// Returns a string decoded from the asset as UTF8.
const text = getAsset('b.txt', 'utf8');
// Returns a Blob containing the asset without copying.
const blob = getAssetAsBlob('a.jpg');
