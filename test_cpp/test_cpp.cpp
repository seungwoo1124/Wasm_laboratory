#include <iostream>
#include <algorithm>
#include <emscripten.h>

using namespace std;

int main() { return 0; }

EMSCRIPTEN_KEEPALIVE
int add(int a, int b)
{
    return a + b;
}

EMSCRIPTEN_KEEPALIVE
int use_vector(int len)
{
    vector<int> vec(len);
    for (int i = 0; i < len; i++)
    {
        vec[i] = i;
        cout << i << ' ';
    }

    return vec[len - 1];
}