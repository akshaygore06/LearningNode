const assert = require("chai").assert;
const app = require("../app");
describe("App", function () {
  it("test should return Hello", function () {
    assert.equal(app(), "Hello");
  });
});

describe("App", function () {
  it("test should return hello instead Hello", function () {
    assert.notEqual(app(), "hello");
  });
});
