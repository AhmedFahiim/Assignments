let ip = "2001:db8:3333:4444:5555:6666:7777:8888";

let regEx =
  /\d\d\d\d\W\w\w\d\W\d\d\d\d\W\d\d\d\d\W\d\d\d\d\W\d\d\d\d\W\d\d\d\d\W\d\d\d\d/g;
console.log(ip.match(regEx));
