const input = document.querySelector("input");
const log = document.getElementById("results");
const runButton = document.getElementById("runButton");
const resetButton = document.getElementById("resetButton");

const prod_code = (number) => {
  if (number % 3 === 0 && number % 5 === 0) {
    return "FizzBuzz";
  } else if (number % 3 === 0) {
    return "Fizz";
  } else if (number % 5 === 0) {
    return "Buzz";
  } else {
    return number;
  }
};

const fizzbuzzArrayFn = (number) => {
  const result = [];

  for (let i = 1; i <= number; i++) {
    const outcome = prod_code(i);
    result.push(outcome);
  }
  console.log(result);
  return result;
};
// describe("Fizzbuzz Tests", () => {
//   it("Returns Fizz if the number is divisible by 3", () => {
//     // Arrange
//     let number = 3;
//     // Act
//     const result = prod_code(number);
//     // Assert
//     expect(result).toEqual("Fizz");
//   });
//   it("Returns Buzz if the number is divisible by 5", () => {
//     //Arrange
//     let number = 5;
//     //Act
//     const result = prod_code(number);
//     //Assert
//     expect(result).toEqual("Buzz");
//   });
//   it("Returns FizzBuzz if the number is divisible by both 3 and 5", () => {
//     //Arrange
//     let number = 15;
//     //Act
//     const result = prod_code(number);
//     //Assert
//     expect(result).toEqual("FizzBuzz");
//   });
// });
// describe("Fizzbuzz Array", () => {
//   it("recieve an number and create an array", () => {
//     const number = 12;

//     const result = fizzbuzzArrayFn(number);

//     expect(result).toHaveLength(number);
//   });
//   it("recieve number 15 and return specified array", () => {
//     const number = 15;
//     const theSpecifiedArray = [
//       1,
//       2,
//       "Fizz",
//       4,
//       "Buzz",
//       "Fizz",
//       7,
//       8,
//       "Fizz",
//       "Buzz",
//       11,
//       "Fizz",
//       13,
//       14,
//       "FizzBuzz",
//     ];

//     const result = fizzbuzzArrayFn(number);

//     expect(result).toEqual(theSpecifiedArray);
//   });
// });

runButton.addEventListener("click", printResults);
resetButton.addEventListener("click", resetResults);

function resetResults(e) {
  e.preventDefault();
  log.textContent = "";
}

function printResultsSequentially(fizzArray) {
  const fizzElements = fizzArray;
  for (let i = 0; i <= fizzElements.length; i++) {
    setTimeout(() => {
      log.textContent = i;
    });
  }
}

function printResults(e) {
  e.preventDefault();
  const results = Number(input.value);
  const fizzArray = fizzbuzzArrayFn(results);
  printResultsSequentially(fizzArray);
}
