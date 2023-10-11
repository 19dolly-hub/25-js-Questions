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
  array.length = 0;
}