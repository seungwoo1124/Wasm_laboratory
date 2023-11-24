#include <stdio.h>
#include <sys/time.h>

int count(int len)
{
	int ret = 0;
	for (int i = 0; i < len; i++)
	{
		ret++;
	}
	return ret;
}

int main()
{
	struct timeval start, end;
	long mtime, seconds, useconds;

	gettimeofday(&start, NULL);

	int sum = count(100000000);

	gettimeofday(&end, NULL);

	seconds = end.tv_sec - start.tv_sec;
	useconds = end.tv_usec - start.tv_usec;
	mtime = ((seconds) * 1000 + useconds / 1000.0);

	printf("count 함수 실행 시간: %ld ms\n", mtime);

	return 0;
}
