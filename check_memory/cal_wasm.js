const memory = new WebAssembly.Memory({ initial: 4, maximum: 256});
var exports;

function showDetails(mem) {
    var buf = mem.buffer;
    var memEl = document.getElementById('mem');
    var pagesEl = document.getElementById('initial_pages');

    memEl.innerText = buf.byteLength;
    pagesEl.innerText = buf.byteLength / 65536;
};

var importObject = {
    js: {
        mem: memory
    },
    env: {
        emscripten_resize_heap: function (delta) { 
            console.log("delta : " + delta);
            console.log("extension size : " + Math.ceil(delta / 65536));
            let grow_size = Math.ceil(delta / 65536);
            memory.grow(grow_size); 
        }
    }
}

function run_wasm() {
    const startTime = new Date();

    let sum = 0;
    for (let i = 0; i < 10; i++){
        sum += exports.calculate(100);
    }

    const endTime = new Date();
    let wasmEl = document.getElementById("time_wasm");
    wasmEl.innerText = (endTime - startTime) + " ms";
    let mallocByteEl = document.getElementById("after_malloc_mem");
    mallocByteEl.innerText = memory.buffer.byteLength;
    let mallocEl = document.getElementById("after_malloc_pages");
    mallocEl.innerText = memory.buffer.byteLength / 65536;

    console.log("wasm matmul sum : " + sum);
}

WebAssembly.instantiateStreaming(fetch("matmul_myV.wasm"), importObject)
    .then(obj => {
        exports = obj.instance.exports;
        showDetails(memory);
        console.log(exports);
        console.log(memory);
    });