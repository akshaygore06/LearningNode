const { generateText } = require("./util");
// unit tests
test("should output the text Akshay", () => {
  const text = generateText("Akshay", 29);
  expect(text).toBe("Akshay [29 years old]");
});

test("should output type string", () => {
  const text = generateText("Akshay", 29);
  expect(typeof text).toBe("string");
});

//integrated tests

test("should output the text Gore", () => {
  const text = generateText("Gore", 29);
  expect(text).toBe("Gore [29 years old]");
});
