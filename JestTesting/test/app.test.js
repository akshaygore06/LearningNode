const app = require("../app");

test("should output Hello", () => {
  const res = app.greetings();
  expect(res).toBe("Hello");
});

test("should output type string", () => {
  const res = app.greetings();
  expect(typeof res).toBe("string");
});

test("greetings should return sum of 3 and 6", () => {
  const res = app.addNumbers(3, 6);
  expect(res).toBe(9);
});

test("greetings should return type number", () => {
  const res = app.addNumbers(3, 6);
  expect(typeof res).toBe("number");
});
