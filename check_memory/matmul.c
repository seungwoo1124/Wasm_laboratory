#include <emscripten.h>

int main()
{
    return 0;
}

int** createMatrix(int len)
{
    int** ret;
    ret = (int**)malloc(sizeof(int*) * len);
    for (int i = 0; i < len; i++)
    {
        ret[i] = (int*)malloc(sizeof(int) * len);
    }
    return ret;
}

EMSCRIPTEN_KEEPALIVE
int calculate(int num)
{
    int ret = 0;
    // m x n
    int** A = createMatrix(num);
    for (int y = 0; y < num; y++)
        for (int x = 0; x < num; x++)
            A[y][x] = (y + x) % 2;

    // n x k
    int** B = createMatrix(num);
    for (int y = 0; y < num; y++)
        for (int x = 0; x < num; x++)
            B[y][x] = (y + x + 1) % 2;

    // m x k
    int** result = createMatrix(num);
    for (int y = 0; y < num; y++)
        for (int x = 0; x < num; x++)
            result[y][x] = 0;

    for (int m = 0; m < num; m++)
        for (int k = 0; k < num; k++)
            for (int n = 0; n < num; n++)
                result[m][k] += A[m][n] * B[n][k];

    for (int y = 0; y < num; y++)
        for (int x = 0; x < num; x++)
            ret += result[y][x];

    return ret;
}
