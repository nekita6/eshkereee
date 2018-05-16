#include <stdlib.h>
#include <stdio.h>
#include <conio.h>
#include <math.h>

int main()
{
	int d1x, d1y, d2x, d2y, d3x, d3y, d4x, d4y, d5x, d5y, error;
	float a, b, c, d, e, f, z;
	float s;
	float m, p1, s2, p2, s3, p3;
	do {
		error = 0;
		printf("Dot 1 X: ");
		scanf("%d", &d1x);

		printf("Dot 1 Y: ");
		scanf("%d", &d1y);

		printf("Dot 2 X: ");
		scanf("%d", &d2x);

		printf("Dot 2 Y: ");
		scanf("%d", &d2y);

		printf("Dot 3 X: ");
		scanf("%d", &d3x);

		printf("Dot 3 Y: ");
		scanf("%d", &d3y);

		printf("Dot 4 X: ");
		scanf("%d", &d4x);

		printf("Dot 4 Y: ");
		scanf("%d", &d4y);

		printf("Dot 5 X: ");
		scanf("%d", &d5x);

		printf("Dot 5 Y: ");
		scanf("%d", &d5y);

		//высчитываем длины сторон
		a = sqrt(((d5x - d1x)*(d5x - d1x)) + ((d5y - d1y)*(d5y - d1y)));
		b = sqrt(((d5x - d4x)*(d5x - d4x)) + ((d5y - d4y)*(d5y - d4y)));
		c = sqrt(((d4x - d1x)*(d4x - d1x)) + ((d4y - d1y)*(d4y - d1y)));
		d = sqrt(((d1x - d2x)*(d1x - d2x)) + ((d1y - d2y)*(d1y - d2y)));
		e = sqrt(((d2x - d4x)*(d2x - d4x)) + ((d2y - d4y)*(d2y - d4y)));
		f = sqrt(((d2x - d3x)*(d2x - d3x)) + ((d2y - d3y)*(d2y - d3y)));
		z = sqrt(((d3x - d4x)*(d3x - d4x)) + ((d3y - d4y)*(d3y - d4y)));

		//Если одна из сторон равна 0, значит координаты точек совпадают
		if (a == 0 || b == 0 || c == 0 || d == 0 || e == 0 || f == 0 || z == 0 ||
			d1x / d2x == d2x / d3x && d1y / d2y == d2y / d3y ||
			d1x / d2x == d1y / d2y && d2x / d3x == d2y / d3y ||
			d2x / d3x == d3x / d4x && d2y / d3y == d3y / d4y ||
			d2x / d3x == d2y / d3y && d3x / d4x == d3y / d4y ||
			d3x / d4x == d4x / d5x && d3y / d4y == d4y / d5y ||
			d3x / d4x == d3y / d4y && d4x / d5x == d4y / d5y)
		{
			printf("\nMore than two points lie on a straight line or put equal points.\nRetype:\n\n");
			error = 1;
		};
	} while (error == 1);

	//Вычисление полупериметра треугольника
	p1 = (a + b + c)*0.5;
	//Вычисление площади треугольника abc
	m = sqrt((p1*(p1 - a)*(p1 - b)*(p1 - c)));

	//Вычисление полупериметра треугольника
	p2 = (c + d + e)*0.5;
	//Вычисление площади треугольника cde
	s2 = sqrt((p2*(p2 - c)*(p2 - d)*(p2 - e)));

	//Вычисление полупериметра треугольника
	p3 = (e + f + z)*0.5;
	//Вычисление площади треугольника efz 
	s3 = sqrt((p3*(p3 - e)*(p3 - f)*(p3 - z)));

	//Вычисление площади пятиугольника
	s = m + s2 + s3;

	printf("\n Length of the sides of the pentagon:\n\n");
	printf("AB = %f\n", d);
	printf("BC = %f\n", f);
	printf("CD = %f\n", z);
	printf("DE = %f\n", b);
	printf("EA = %f\n", a);

	printf("\n Area of the pentagon:\n\n");
	printf("S = %f\n", s);

	system("pause");
	_getch();
	return 0;
}
