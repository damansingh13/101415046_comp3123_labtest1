//Damanpreet Singh - 101415046
const lowerCaseWords = (arr) =>
    new Promise((resolve, reject) => {
      const filtered = arr.filter((item) => typeof item === 'string');
      const lowerCase = filtered.map((word) => word.toLowerCase());
      if (lowerCase.length > 0) {
        resolve(lowerCase);
      } else {
        reject("No string in the array");
      }
    });
    const mixedArray = ['PIZZA',10,true,25,false,'Wings']
    lowerCaseWords(mixedArray)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));