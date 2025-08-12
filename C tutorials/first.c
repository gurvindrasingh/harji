# include<stdio.h>

int main(){
    printf("Hello World");
    return 0;
}

int main () {
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