const { Script, constants } = require('node:vm');
const { resolve } = require('node:path');
const { writeFileSync } = require('node:fs');

// Write test.js and test.txt to the directory where the current script
// being run is located.
writeFileSync(
  resolve(__dirname, 'test.mjs'),
  'export const filename = "./test.json";'
);
writeFileSync(resolve(__dirname, 'test.json'), '{"hello": "world"}');

// Compile a script that loads test.mjs and then test.json
// as if the script is placed in the same directory.
const script = new Script(
  `(async function() {
    const { filename } = await import('./test.mjs');
    return import(filename, { with: { type: 'json' } })
  })();`,
  {
    filename: resolve(__dirname, 'test-with-default.js'),
    importModuleDynamically: constants.USE_MAIN_CONTEXT_DEFAULT_LOADER,
  }
);

// { default: { hello: 'world' } }
script.runInThisContext().then(console.log);
  
