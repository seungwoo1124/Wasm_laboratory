var exports;
var importObject = {}

function run_wasm() {
    const startTime = new Date();

    let sum = exports.count(100000000);

    const endTime = new Date();
    let wasmEl = document.getElementById("time_wasm");
    wasmEl.innerText = (endTime - startTime) + " ms";
    console.log("wasm sum :" + sum);
}

WebAssembly.instantiateStreaming(fetch("count.wasm"), importObject)
    .then(obj => {
        exports = obj.instance.exports;
        console.log(exports);
        console.log(exports.memory);
    });
