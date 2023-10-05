function lowerCaseWords(inputArray) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(inputArray)) {
      reject("Input is not an array.");
      return;
    }

    const filteredWords = inputArray.filter(item => typeof item === 'string' && item === item.toLowerCase());

    if (filteredWords.length === 0) {
      reject("No lowercase words found.");
    } else {
      resolve(filteredWords);
    }
  });
}

// Example usage:
const mixedArray = [42, "jordan", "Beach", "cinderela", "grape", "Mount Everest"];
lowerCaseWords(mixedArray)
  .then(result => {
    console.log("Lowercase words:", result);
  })
  .catch(error => {
    console.error("Error:", error);
  });
