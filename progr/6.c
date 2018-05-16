#include "stdio.h"
#include "conio.h"
#include "string.h"
#include "windows.h"

struct name_s { char name[11], a[5], b[5], c[5], d[5], e[5], f[5]; };
struct name_s r = { "Имя страны", "1883", "1913", "1929", "1937", "1946", "1956"};
struct {char name[15]; float a, b, c, d, e, f;}c[10]; 
struct {char name[15]; float a, b, m;}c_r[10]; 

void start();
void input_output();
void input();
void output(int n);
void first(int n);
void first_output(int max);
void second(int n);
void second_output(float y, int p);

void main()
{
	SetConsoleCP(1251); 
	SetConsoleOutputCP(1251);
	input(); 
	getch();
}

void input()
{
	int i = -1, n = 0; 
	char key;
	do
	{ i++; n++;
		printf("\nЗапись %d", n);
		printf("\n%s: ", r.name); gets_s(c[i].name);
		printf("%s: ", r.a); scanf_s("%f", &c[i].a);
		printf("%s: ", r.b); scanf_s("%f", &c[i].b);
		printf("%s: ", r.c); scanf_s("%f", &c[i].c);
		printf("%s: ", r.d); scanf_s("%f", &c[i].d);
		printf("%s: ", r.e); scanf_s("%f", &c[i].e);
		printf("%s: ", r.f); scanf_s("%f", &c[i].f);
		printf("\nПродолжить - введите a ");
		getchar(); key = _getch(); printf("\n");
	} 
	while (key == 'а');
	output(n);
}

void output(int n)
{
	char ru[95] = "+-------------+-----------+-----------+-----------+-----------+-----------+-----------+";
	printf("\nИсходная таблица\n");
	printf("%s\n", ru);
	printf("| % 11s | % 9s | % 9s | % 9s | % 9s | % 9s | % 9s |\n", r.name, r.a, r.b, r.c, r.d, r.e, r.f);
	printf("%s\n", ru);
	for (int i = 0; i<n; i++)
	{
		printf("| % 11s |% 10.1f |% 10.1f |% 10.1f |% 10.1f |% 10.1f |% 10.1f |\n", c[i].name, c[i].a, c[i].b, c[i].c, c[i].d, c[i].e, c[i].f);
		printf("%s\n", ru);
	}
	first(n);
	second(n);
}

void first(int n)
{
int max; float MAX = 0;
	for(int i=0; i<n; i++) 
	{
		if(c[i].f > MAX)
		{
		MAX = c[i].f;
		max = i;
		}
	}

	if(MAX>0)
	first_output(max);
	else
	printf("\nа) Нет макс. удельный веса в мировом экспорте в 1956г\n");
}
void first_output(int max)
{
	char ch[30] = "+-------------+-----------+";
	printf("\nа) Макс. удельный вес в мировом экспорте в 1956г\n");
	printf("%s\n", ch);
	printf("| % 11s | % 9s |\n", r.name, r.f);
	printf("%s\n", ch);
	printf("| % 11s |% 10.1f |\n", c[max].name, c[max].f);
	printf("%s\n", ch);
}

void second(int n)
{float y; int p=0;
	printf("\nВведите Y: "); 
	scanf_s("%f", &y);
	for(int i=0; i<n; i++) 
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
		second_output(y, p);
	else
	 printf("\nб) Нет прироста более %0.1f (1883-1913гг)\n", y);
}

void second_output(float y, int p)
{ char three[55]="+-------------+-----------+-----------+-----------+";
		printf("\nб) Относительный прирост более %0.1f (1883-1913)\n", y);
		printf("%s\n", three);
		printf("| % 11s |% 10s |% 10s |   Прирост |\n", r.name, r.a, r.b);
		printf("%s\n", three);
		for(int i=0; i<p; ++i)
		{
		printf("| % 11s |% 10.1f |% 10.1f |% 10.1f |\n", c[i].name, c[i].a, c[i].b, c_r[i].m);
		printf("%s\n", three);
		}
}