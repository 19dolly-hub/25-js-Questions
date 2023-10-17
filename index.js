// 1. Reverse the letters of words in a given paragraph
// SOLUTION
{
  let paragraph = "I am a paragraph";

  const arrayPara = paragraph.split(" ").map((word) => {
    return word.split("").reverse().join("");
  });
  const resultedPara = arrayPara.join(" ");
  console.log(resultedPara);
}

// 2. Check if something is Array or not | since typeOf [] implies object
// SOLUTION
{
  let something = [];

  const answer = Array.isArray(something);
  console.log(answer);
}

// 3. Empty an array | without reassinging and looping pop through
// SOLUTION
{
  const array = [5, 7, 2];
    console.log(array);
  array.length = 0;
    console.log(array);
}

// 4. Check if a number is integer | without using Number.isInteger()
// SOLUTION
{
  let num = 7.1;
  let isInteger = false;
  if(num % 1 === 0) {
    isInteger = true;
  }
  console.log(isInteger);
}

// 5. Make a duplicate function so that duplicate([1,2,3]) returns [1,2,3,1,2,3]
// SOLUTION
{
  let arr = [1, 2, 3];
  function duplicate(array) {
    return array.concat(array);
  }
  console.log(duplicate(arr));
}

// 6. Make a reverseDigits function that reverses the digits of a number
// SOLUTION
// approach 1 
{
  function reverseDigits(number) {
    return Number(number.toString().split("").reverse().join(""));
  }
  console.log(reverseDigits(1234));
}
// approach 2
{
  function reverseDigits(number) {
    let revHolder = 0;
    while(number > 0) {
      let lastDig = number%10;
      revHolder = revHolder*10 + lastDig;
      number = Math.floor(number/10);
    }
    return revHolder;
  }
  console.log(reverseDigits(12345));
}

// 7. Check if a string is a palindrome or not
// SOLUTION
{
  function isPalindrome(string) {
    return string === string.split("").reverse().join("");
  }
  console.log(isPalindrome("toot"));
  console.log(isPalindrome("loot"));
}

// 8. Write a function that return the passed string rearranged in alphabetical order
// SOLUTION
{
  function arrangeAlpha(string) {
    return string.split("").sort().join("");
  }
  console.log(arrangeAlpha("xyzabc"));
}

// 9.0 Make a function that takes a string and transforms the first letter to uppercase (warm-up ques for Q.9)
// SOLUTION
{
  function capitalize(string) {
    const small = string[0];
    const capital = string[0].toUpperCase();
    return string.replace(small, capital);
  }
  console.log(capitalize("many"));
}

// 9. Make a function that takes a sentence(string) and transforms the first letter of each word to uppercase
// SOLUTION
{
  function capitalize(sentence) {
    const words = sentence.split(" ");
    const capitals = words.map(word => word.replace(word[0], word[0].toUpperCase()));
    return capitals.join(" ");
  }
  console.log(capitalize("this is a capitalized sentence"));
}

// 11. Write a function which returns number of occurences of each letter in string
// SOLUTION
{
  function findOcc(string="hello world") {
    let resultedObj = {};
    string.split("").forEach((letter) => {
      if(resultedObj.hasOwnProperty(letter) === false) resultedObj[letter] = 1
      else resultedObj[letter]++
    })
    return resultedObj;
  }
}

// 12.