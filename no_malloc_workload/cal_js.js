function run_js() {
    const startTime = new Date();

    let sum = count(100000000);

    const endTime = new Date();
    let jsEl = document.getElementById("time_js");
    jsEl.innerText = (endTime - startTime) + " ms";
    console.log("js sum :" + sum);
}

function count(num) {
    let ret = 0;
    for (let i = 0; i < num; i++) {
        ret++;
    }
    return ret;
}