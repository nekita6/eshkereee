#include<stdio.h>
#include<stdlib.h>
#include<conio.h>
#include<math.h>

void PrintMatrix(int** arr, int n, int m)
{
	int i, j;
	for (i = 0; i < n; i++)
	{
	for (j = 0; j < m; j++)
	printf("%d ", arr[i][j]);
	printf("\n");
	}
}
void Change(int** X, int n, int m)
{
	int i,j,p;
	int k,z;
	int i_m=n-1;
	int otric, r_otr;
	int min=0;
	for (i = 0; i < n; i++)
	{
		for (j = 0; j < m; j++)
		{
			if ((i == i_m) && ((X[i][j]) < 0))
			{
			otric = X[i][j];
			r_otr=j;
			}
		}
	}

	for (i = 0; i < n; i++)
	{
		for (j = 0; j < m; j++)
		{
			if ((j == r_otr) && ((X[i][j]) < min))
			{
			min=X[i][j];
			}
		}
	}

	for (i = 0; i < n; i++)
	{
		for (j = 0; j < m; j++)
		{
			if (j == r_otr)
			{
			X[i][j] = (X[i][j]) * min;
			}
		}
	}
	printf("\n\nChange matrix:\n\n");
	PrintMatrix(X, n, m);
}
void Vvod()
{
	int M,N,r;
	int ** Matrix;
	int i, j;
	printf("Enter the number of strings: ");
	scanf("%d", &N);
	printf("Enter the number of columns: ");
	scanf("%d", &M);
	printf("Your array: strings = %d, columns = %d\n\n", N, M);

	Matrix = (int**)malloc(N * sizeof(int*));
	for (i = 0; i < N; i++)
	Matrix[i] = (int*)malloc(M * sizeof(int));
	for (i = 0; i < N; i++)
	{
		for (j = 0; j < M; j++)
		{
		printf("Enter the element [%d;%d]: ", i, j);
		scanf("%d", &r);
		Matrix[i][j] = r;
		}
	}
printf("\n\nYour matrix:\n\n");
PrintMatrix(Matrix, N, M);
Change(Matrix, N, M);
}

int main()
{
Vvod();
getch();
}