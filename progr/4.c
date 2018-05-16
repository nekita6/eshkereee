#include "locale.h"
#include "stdio.h"
#include "stdlib.h"
#include "conio.h"
#include "string.h"
#include <windows.h>
#define N 100

int main()
{       
SetConsoleCP(1251); SetConsoleOutputCP(1251);
char* c="ауыоюеёяaoiuye?.,!?:; ";
char a [N]; a[0]=' ';
char b[N]={0}; 
char key;
int y, i, x, j, n;
do
{y=0; i=0; x=0;
	printf("Введите строку: "); 
	gets(a+1);
	y=-1;
	do
	{i++;
	y=0;
	if(a[i] == a[i+1])
	{n=0;
	 for(j=0; j<16;j++)
	 {
	 if(a[i]!=c[j])
	 {n++;
	 }}
	 if(n==16)
	 {
		 do
		 {
		   i--;
		 }
		 while(a[i] != ' ' && a[i] != '\0');
		  do
		  {i++;
		    if(a[i]!=',' && a[i]!='.'&& a[i]!=' ')
		    {
		     b[y] = a[i];
		     y++;
		    }
		  }
		  while(a[i] != ' ' && a[i] != '\0');
		  x++;
		if(x==1)
		{
		printf("Слова с удвоенной согласной: ");
		}
		printf("%s ", b); 
		  for(int t=0; t<20; t++)
		  {b[t] = 0; 
	}}}}
	while(a[i] != NULL);
if(x==0)
printf("Нет слов с удвоенной согласной");
printf("\nПродолжить - введите a \n\n");
key = getch();
}
while(key=='а');
_getch();
return 0;
}