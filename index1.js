//toUpperCase()
function stringToUpperCase(text) {
  const text2= text.toUpperCase();
  console.log(text2);
}
stringToUpperCase("hello world");
stringToUpperCase("barev");



//toLowerCase()
function stringtoLowerCase(text) {
  const text4 =text.toLowerCase();
  console.log(text4);
}
stringtoLowerCase("HELLO WORLD");

//charAt()
function stringcharAt(text) {
	const text6 =text.charAt(7);
	console.log(text6);	
}
stringcharAt("Hello World");

//isPrime
const isPrime = num => {
  for(let i = 2; i < num; i++)
    if(num % i === 0) return true;
  return num > 1;
}

console.log(isPrime(5));


const isPrime2 = n => {
  for(let i = 2; i < n; i++)
    if(n % i === 0) return false;
  return n > 1;
}

console.log(isPrime2(4));


//recusia

 const recursia = function (n) {
	 if (n===1) {
	 return [0, 1];
	 }
   else {
	 const s = recursia(n - 1);
		s.push(s[s.length - 1] + s[s.length - 2]); 
	return s;
 }
 };
 console.log(recursia(8));























