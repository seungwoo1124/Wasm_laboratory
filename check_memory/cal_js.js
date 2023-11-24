
function createMatrix(len) {
    var matrix = new Array(len);
    for (let i = 0; i < len; i++) {
        matrix[i] = new Array(len);
    }
    return matrix;
}

function run_js() {
    const startTime = new Date();

    let sum = 0;
    for (let i = 0; i < 10; i++) {
        sum += matmul(100);
    }

    const endTime = new Date();
    let jsEl = document.getElementById("time_js");
    jsEl.innerText = (endTime - startTime) + " ms";

    console.log("js matmul sum : " + sum);
}

function matmul(len) {
    let ret = 0;
    let A = createMatrix(len);
    for (let y = 0; y < len; y++) {
        for (let x = 0; x < len; x++) {
            A[y][x] = (y + x) % 2;
        }
    }
    let B = createMatrix(len);
    for (let y = 0; y < len; y++) {
        for (let x = 0; x < len; x++) {
            B[y][x] = (y + x + 1) % 2;
        }
    }
    let result = createMatrix(len);
    for (let y = 0; y < len; y++) {
        for (let x = 0; x < len; x++) {
            result[y][x] = 0;
        }
    }

    for (let m = 0; m < len; m++) {
        for (let k = 0; k < len; k++) {
            for (let n = 0; n < len; n++) {
                result[m][k] += A[m][n] * B[n][k];
            }
        }
    }

    for (let y = 0; y < len; y++) {
        for (let x = 0; x < len; x++) {
            ret += result[y][x];
        }
    }

    return ret;
}