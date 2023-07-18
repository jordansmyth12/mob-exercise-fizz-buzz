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

describe("Fizzbuzz Tests", () => {
  it("Returns Fizz if the number is divisible by 3", () => {
    // Arrange
    let number = 3;
    // Act
    const result = prod_code(number);
    // Assert
    expect(result).toEqual("Fizz");
  });
  it("Returns Buzz if the number is divisible by 5", () => {
    //Arrange
    let number = 5;
    //Act
    const result = prod_code(number);
    //Assert
    expect(result).toEqual("Buzz");
  });
  it("Returns FizzBuzz if the number is divisible by both 3 and 5", () => {
    //Arrange
    let number = 15;
    //Act
    const result = prod_code(number);
    //Assert
    expect(result).toEqual("FizzBuzz");
  });
});
describe("Fizzbuzz Array", () => {
  it("recieve an number and create an array", () => {
    let number = 12;

    const result = fizzbuzzArrayFn(number);

    expect(result).toHaveLength(12);
  });
});
