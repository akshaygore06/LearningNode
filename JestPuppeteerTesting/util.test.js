const { generateText } = require("./util");

test("should output the text", () => {
  const text = generateText("Akshay", 29);
  expect(text).toBe("Akshay [29 years old]");
});

test("should output type string", () => {
  const text = generateText("Akshay", 29);
  expect(typeof text).toBe("string");
});
