#include <emscripten.h>

int main()
{
    return 0;
}

EMSCRIPTEN_KEEPALIVE
int count(int num) {
    int ret = 0;
    for (int i = 0; i < num; i++)
        ret++;
    return ret;
}