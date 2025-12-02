const isPowerOfTwo = (number) => {
  //your code here
	 // number must be positive
  if (number <= 0) return false;

  // Check power of 2 using bitwise AND
  return (number & (number - 1)) === 0;
};

const num = parseInt(prompt("Enter a number"));
alert(isPowerOfTwo(num));
