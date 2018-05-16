#include "stdio.h"
#include "stdlib.h"
#include "conio.h"
#include "string.h"
#include <windows.h>

#define R 78
#define H 56
#define M 46
#define N 100
#define A 20
#define Z 10

struct crop
{char name[A+1];
float a;
float b;
float c;
float d;
float e;
float f;
};
struct crop c[N];

struct
{char name[A+1];
float a;
float b;
float f;
float m;
}c_r[N];

int main()
{
	SetConsoleCP(1251);
    SetConsoleOutputCP(1251);
	int n=0,i=-1, min, p=0, max;
	float y,r;
	float MAX=0;
	int exit=1;

	char ru[R+1]="+-----------+------+------+------+------+------+------+";
	char ch[H+1]="+-----------+--------------+";
	char mr[M+1]="+-----------+------+------+---------+";
	char key;

	do
	{n++; i++;
	printf("Запись %d", n);
		printf("\nСтрана: ");
		scanf("%s", c[i].name); 
			printf("1883: ");
			scanf_s("%f", &r); c[i].a=r;
				printf("1913: ");
				scanf_s("%f", &r); c[i].b=r;
					printf("1929: ");
					scanf_s("%f", &r); c[i].c=r;
				printf("1937: ");
				scanf_s("%f", &r); c[i].d=r;
			printf("1946: ");
			scanf_s("%f", &r); c[i].e=r;
		printf("1956: ");
		scanf_s("%f", &r); c[i].f=r;
	printf("\nПродолжить - введите a \n\n");
	key = getch();
	}
	while(key=='а');
	
	printf("\nИсходная таблица");
	printf("\n%s\n", ru);
	printf("| Страны    | 1883 | 1913 | 1929 | 1937 | 1946 | 1956 |\n");
	printf("%s\n", ru);
	for(i=0; i<n; i++)
	{
	printf("| %-9s |% 5.1f |% 5.1f |% 5.1f |% 5.1f |% 5.1f |% 5.1f |\n",
			c[i].name, c[i].a, c[i].b, c[i].c, c[i].d, c[i].e, c[i].f);
	printf("%s\n", ru);
	}

	for(i=0; i<n; i++) 
	{
		if(c[i].f > MAX)
		{
		c_r[i].f = c[i].f;
		strcpy_s(c_r[i].name, c[i].name);
		MAX=c[i].f;
		max=i;
		}
	}

	printf("\nа) Макс. удельный вес в мировом экспорте в 1956г\n");
	printf("%s\n", ch);
	printf("| Страна    | Удельный вес |\n");
	printf("%s\n", ch);
	printf("| %-9s |% 13.1f |\n", c_r[max].name, c_r[max].f);
	printf("%s\n", ch);

	printf("\nВведите Y: "); 
	scanf_s("%f", &y);

	for(i=0; i<n; i++) 
	{
	c_r[p].m = ((float(c[i].b) - float(c[i].a)) / float(c[i].b) * 100);
		if(c_r[p].m > y)
		{
		strcpy_s(c_r[p].name, c[i].name);
		c_r[p].a = c[i].a;
		c_r[p].b = c[i].b;
		p++;
		}
	}

	if (p>0)
	{
		printf("\nб) Относительный прирост более %0.1f (1883-1913)\n", y);
		printf("%s\n", mr);
		printf("| Страна    | 1883 | 1913 | Прирост |\n");
		printf("%s\n", mr);
		for(i=0; i<p; i++)
		{
		printf("| %-9s |% 5.1f |% 5.1f |% 8.1f |\n",
				c_r[i].name, c_r[i].a, c_r[i].b, c_r[i].m);
		printf("%s\n", mr);
		}
	}
	else
	{
	printf("\nб) Нет прироста более %0.1f (1883-1913гг)\n", y);
	}

	_getch();
	return 0;
}