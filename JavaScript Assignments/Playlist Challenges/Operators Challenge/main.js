let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++); //

/*
[++a] value: 11
explain: the variable a have a pre increament so
 it will be 11

[+] value: addition operator 
explain: the + here is a arithmatic operator
 cuz the next number have a unary operator.

 [+b++] value: 20
 explain: the variable b have a unary operator so it will be a number 
 also have a post increament so it will increase 1 in the next operation.


[+] value: addition operator 
explain: the + here is a arithmatic operator
 cuz the next number have a unary operator.

 [+c++] value:80
explain:explain: the variable c have a unary operator but it will not effect cuz its already number
and have a post increament so it will increase 1 in the next operation.


[-] value: subtraction operator.
explain: the - here is a arithmatic operator
 cuz the next number have a unary operator.


[+a++] value: 11
explain: the variable a have a unary operator but it will not effect cuz its already numbe
it also have a post increament so it will increase 1 in the next operation.

*/
console.log(++a + -b + +c++ - -a++ + +a); //

/*
[++a] value: 13
explain: the variable a have a post increament in the last operation so
 and pre one here again so it will be 13

[+] value: addition operator 
explain: the + here is a arithmatic operator
 cuz the next number have a unary operator.

 [-b] value: -21
 explain: the variable b have a negation unary operator so
  it will be a negative number and have a post increamnet in the last operator.
  so it will increase one to becomes -21


[+] value: addition operator 
explain: the + here is a arithmatic operator
 cuz the next number have a unary operator.

 [+c++] value: 81
explain:explain: the variable c have a unary operator but it will not effect cuz its already number
and have a post increament in the last operation
 so it will increase 1 now and also one in the next operation.


[-] value: subtraction operator.
explain: the - here is a arithmatic operator
 cuz the next number have a unary operator.


[-a++] value: -13
explain: the variable a have a negation unary operator so it will convert it to negative number
it also have a post increament so it will increase 1 in the next operation.

[+] value: addition operator 
explain: the + here is a arithmatic operator
 cuz the next number have a unary operator.

[+a] value: 14
explain: the variable have a post increamnet in the last operation so it will be 14.
*/

console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

/*
[--c] value: 81
explain: the variable a have a post increament in the last operation 
 so it will increase 1
and also have a pre decreament now and will decrease one to become 81

[+] value: addition operator 
explain: the + here is a arithmatic operator
 cuz the next number have a unary operator.

 [+b] value: 21
 explain: the variable b have a unary operator
  so it will be converted to become number. 


[+] value: addition operator 
explain: the + here is a arithmatic operator
 cuz the next number have a unary operator.

 [--a] value: 13
explain: the variable a have a pre decreament and will decrease one to become 81

[*] value: multiplaction operator.
explain: the * here is a arithmatic operator.

 [+b++] value: 21
explain:explain: the variable c have a unary operator but it will not effect cuz its already number
and have a post increament in the last operation
 so it will increase 1 now and also one in the next operation.


[-] value: subtraction operator.
explain: the - here is a arithmatic operator

[+b] value: 22
explain: the variable b have a unary operator so it will be converted to become number. 
 also have a post increament in the last operation so it will increase 1.

[*] value: multiplaction operator.
explain: the * here is a arithmatic operator.

 [a] value: 13
explain: there is no explanation.


[+] value: addition operator 
explain: the + here is a arithmatic operator
 cuz the next number have a unary operator.


 [--a] value: 12
explain: the vairable have a pre decreament and will decrease one


[-] value: subtraction operator.
explain: the - here is a arithmatic operator

 [+true] value: 1
 explain:the bolean value have a unary operator
  so it will converted to become 1
*/

let d = "-100";
let e = "20";
let f = 30;
let g = true;

console.log(-d * +e + (f % g)); //2000
console.log(++e * ++g + -d + ++f); //173
