// let New_1 = () => `Iam A Normal Function`;

// console.log(New_1()); // Iam A Normal Function

let New = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;
console.log(New("https", "elzero", "org")); // https://www.elzero.org
