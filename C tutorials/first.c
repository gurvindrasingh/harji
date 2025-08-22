# include<stdio.h>

int main(){
    printf("Hello World");
    printf("Hello World \n");// using \n for moving to the next line
    return 0;
}

int main2() {
    int number = 5;
    char star = '*';
    int age = 19;
    age = 20;// variable can be changed
    float pi = 3.14;
    return 0;

// This is a rules in C 
// 1= C language is case sensitive means a,A has different meaning
    int a = 10;
    int A = 20;
    return 0;

// 2= Variable names can only contain letters, numbers, and underscores nothing else
    int _age = 20;
    //int -age = 30; it will give an error

//3= comma(,)/ blank space(  ) are not allowed
    int final_score = 100;
    //int final score = 100; / it will give an error

//4= Special characters are not allowed only underscores(_) is allowed
    //int age@ = 25; / it will give an error
    
}

// data types in C
// 1= int
    int age = 19;
// 2= float
    float salary = 50000.50;
// 3= char
    char grade = 'A';
// 4= double
    double pi = 3.14159;

// 32 keywords in C
// 1= auto
// 2= break
// 3= case
// 4= char
// 5= const
// 6= continue
// 7= default
// 8= do
// 9= double
// 10= else
// 11= enum
// 12= extern
// 13= float
// 14= for
// 15= goto
// 16= if
// 17= inline
// 18= int
// 19= long
// 20= register
// 21= restrict
// 22= return
// 23= short
// 24= signed
// 25= sizeof
// 26= static
// 27= struct
// 28= switch
// 29= typedef
// 30= union
// 31= unsigned
// 32= void


int main3(){
    int age = 19;
    printf("age is %d", age);
    return 0;
}