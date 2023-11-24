var exports;

var importObject = {}

function run_wasm() {
  let sum = exports.add(1, 2);
  console.log("wasm sum : " + sum);
}

WebAssembly.instantiateStreaming(fetch("test_cpp.wasm"), importObject)
.then(obj => {
  exports = obj.instance.exports;
})