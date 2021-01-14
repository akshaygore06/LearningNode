const assert = require("chai").assert;
const app = require("../app");

describe("App", function () {
  it("greetings should return Hello", function () {
    assert.equal(app.greetings(), "Hello");
  });

  it("greetings should return Hello instead hello", function () {
    assert.notEqual(app.greetings(), "hello");
  });

  it("greetings should return Good Morning", function () {
    assert.notEqual(app.greetings(), "Good Morning");
  });

  it("greetings should return type String", function () {
    const res = app.greetings();
    assert.typeOf(res, "string");
  });

  it("greetings should return sum of 3 and 6", function () {
    const res = app.addNumbers(3, 6);
    assert.equal(res, 9);
  });

  it("greetings should return type number", function () {
    const res = app.addNumbers(3, 6);
    assert.typeOf(res, "number");
  });
});
