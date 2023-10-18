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

// 12. Loop an array and add all numbers of it
// SOLUTION
{
  let array = [2, 4, 6, 8];
  let total = 0;
  // for(let i=0; i<array.length; i++) {
  //   total += array[i];
  // }
  array.forEach(value => total += value);
  console.log(total);
}

// 13. In an array of numbers and strings, only add those members which are not strings
// SOLUTION
{
  let array = [1, 3, "2", "4", 8];
  let sum = 0;
  array.forEach(value => {
    if(typeof value === "number") sum+= value
  });
  console.log(sum);
}

// 14. Loop an array of objects and remove all objects which don't have gender's value male
// SOLUTION
{
  let objArr = [
    {name: "kailey", gender: "f"},
    {name: "sholey", gender: "m"},
    {name: "tillu", gender: "m"},
    {name: "jooley", gender: "f"}
  ];

  let newArr = objArr.filter((obj) => {
    return obj.gender === "m";
  });
  console.log(newArr);

  objArr.forEach((obj, i) => {
    if(obj.gender !== "m") objArr.splice(i, 1)
  });
  console.log(objArr);
}

// 15. Write a function to clone an array
// SOLUTION
{
  function clone(array) {
    return [...array];

    /* 
    let newArr = []
    array.forEach((value) => {
        newArr.push(value);
    });
    return newArr;
    */

    /*
    return array.map(value => value);
     */
  }
  console.log(clone([1, 4, "uu"]));
}

// 10. Write a function which returns the type of the argument passed [object, boolean, function, number, string, undefined]
// SOLUTION
{
  function getType(arg) {
    return typeof arg;
  }
  let o;
  console.log(getType([]));
  console.log(getType(false));
  console.log(getType(8));
  console.log(getType(""));
  console.log(getType(o));
  console.log(getType(()=>{}));
}

// 16. Write a function which prints first n elements of an array
// SOLUTION
{
  function returnElements(array, n=1) {
    if (n<=array.length) {
      for(let i=0; i<n; i++) {
        console.log(array[i]);
      }
    }
    else {
      console.log(`only ${array.length} elements are in the array!`);
    }
  }
  returnElements([1, 2, 3, 4, 5]);
  returnElements([1, 2, 3, 4, 5], 2);
}

// 17. Write a function which prints last n elements of an array
// SOLUTION
{
  // function returnElements(array, n=1) {
  //   if(n<=array.length) {
  //     for(let i = array.length-1; i>=array.length-n; i--) {
  //       console.log(array[i]);
  //     }
  //   }
  //   else {
  //     console.log(`only ${array.length} elements are in the array!`);
  //   }  
  // }
  function returnElements(array, n=1) {
    if (n<=array.length) {
      for(let i=0; i<n; i++) {
        console.log(array[array.length -1 -i]);
      }
    }
    else {
      console.log(`only ${array.length} elements are in the array!`);
    }
  }
  returnElements([1, 2, 3, 4, 5]);
  returnElements([1, 2, 3, 4, 5], 2);
}