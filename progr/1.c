#include <stdio.h> 
int what_day(int yo) 
{ 
	int a = (14 - 6) / 12; 
	int y = yo - a; 
	int m = 6 + 12 * a - 2; 
	int d = ((yo%4==0 && yo%100 != 0) || yo%400==0) ? 1 : 2; 
	int dn = (7000 + (d + y + y / 4 - y / 100 + y / 400 + (31 * m) / 12)) % 7; 
	return dn; 
} 

int main() 
{ 	
	char* gg; 
	int yo; 
	do{ 
	printf ("Change year: "); 
	scanf("%d", &yo); 
	} 
	while(yo<1583); 
	switch(what_day(yo)) 
	{ 
		case 0: 
		gg = "Sunday"; 
		break; 
		case 1: 
		gg = "Monday"; 
		break; 
		case 2: 
		gg = "Tuesday"; 
		break; 
		case 3: 
		gg = "Wendesday"; 
		break; 
		case 4: 
		gg = "Thursday"; 
		break; 
		case 5: 
		gg = "Friday"; 
		break; 
		case 6: 
		gg = "Saturday"; 
		break; 
	} 

	if (yo%4 == 0 && yo%100 != 0){
		printf("\n DAY: 1");
	}
	else if (yo%400 == 0){
		printf("\n DAY: 1");
	}
	else {
		printf("\n DAY: 2");
	}
	
	printf("\n Month: 6");
	printf("\n Year: %d",yo);
	printf("\n\n The semester will end in %s \n",gg); 
	getchar();getchar(); 
	return 0; 
}