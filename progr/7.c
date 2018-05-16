#include "stdio.h" 
#include "conio.h" 
#include "windows.h" 
#include "math.h" 

double factorial(double n); 
double rec(double k, double ch); 

int main() 
{ 
	SetConsoleCP(1251); 
	SetConsoleOutputCP(1251); 
	double result_function, res, x=2; 
	result_function = (1+cos(2*x))/2; 
	res = 1 - (rec(1, 4)); 
	printf("\nRec function: %f", res); 
	printf("\ncos^2(x): %f", result_function); 
	printf("\n\n"); 
	getch(); 
	return 0; 
} 

double rec(double k, double ch) 
{ 
	double eps=0.000001, x=2, result,fact; 

	printf("%f\n", k); 
	printf("%f\n", ch); 

	if (fabs(ch) < eps) 
	result = ch; 
	else 
	{ 
	fact = factorial(2*k); 
	ch = pow(-1, k+1)*pow(2, 2*k-1)*pow(x, 2*k)/fact; 
	result = ch + rec(k + 1, ch); 
	} 
	return result; 
} 

double factorial(double n) 
{
	double r; 
	for (r = 1; n > 1; r *= (n--)); 
	return r; 
}