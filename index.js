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

// 6. 