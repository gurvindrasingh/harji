# include <stdio.h>

// void main() {
//     int age;
//     printf("Enter age: ");
//     scanf("%d", &age);      
//     if (age >= 18)
//     {
//         printf("Adult");
//     }
//     else
//     {
//         printf("Minor");
//     }

// }

// void main() {
//     int number;
//     printf("Enter a number: ");
//     scanf("%d", &number);      
//     if (number % 2 == 0)
//     {
//         printf("Even");
//     }
//     else
//     {
//         printf("Odd");
//     }

// }

// find a program largest of two number

// void main() {
//     int num1, num2;
//     printf("Enter two numbers: ");
//     scanf("%d %d", &num1, &num2);
//     if (num1 > num2)
//     {
//         printf("Largest number is: %d", num1);
//     }
//     else
//     {
//         printf("Largest number is: %d", num2);
//     }
// }

// check if year is a leap year
// void main() {
//     int year;
//     printf("Enter a year: ");
//     scanf("%d", &year);
//     if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0))
//     {
//         printf("%d is a leap year.", year);
//     }
//     else
//     {
//         printf("%d is not a leap year.", year);
//     }
// }

// two find largest amoung three number

void main() {
    int a, b, c;
    printf("enter three numbers: ");
    scanf("%d %d %d", &a, &b, &c);
    if (a > b && a > c)
    {
        printf("Largest number is: %d", a);
    }
    else if (b > c)
    {
        printf("Largest number is: %d", b);
    }
    else
    {
        printf("Largest number is: %d", c);
    }
}
