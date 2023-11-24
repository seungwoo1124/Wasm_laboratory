var exports;

var importObject = {
  wasi_snapshot_preview1: {
    proc_exit: function() {
      console.log("my wasi_snapshot_preview1 - proc_exit()");
    },
    fd_seek: function() { console.log("my wasi_snapshot_preview1 - fd_seek()") },
    fd_write: function() { console.log("my wasi_snapshot_preview1 - fd_write()") },
    fd_read: function() { console.log("my wasi_snapshot_preview1 - fd_read()") },
    fd_close: function() { console.log("my wasi_snapshot_preview1 - fd_close()") },
    environ_sizes_get: function() { console.log("my wasi_snapshot_preview1 - environ_sizes_get()") },
    environ_get: function() { console.log("my wasi_snapshot_preview1 - environ_get()") },
  }
}

function run_wasm() {
  let sum = exports._Z3addii(1, 2);
  let usevec = exports._Z10use_vectori(10);
  let memory = exports.memory;
  let memSize = memory.buffer.byteLength;
  let text = document.getElementById("wasmMemory");

  text.innerHTML = memSize / (1024 * 1024) + " MB";
  console.log("wasm sum : " + sum);
  console.log("usevec : " + usevec);
}

WebAssembly.instantiateStreaming(fetch("my_test_cpp.wasm"), importObject)
.then(obj => {
  exports = obj.instance.exports;
  console.log("exports");
  console.log(exports);
  console.log("memory");
  console.log(exports.memory);
})