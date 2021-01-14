const puppeteer = require("puppeteer");
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

// end 2 end testing using puppeteer.

test("should click  on the add button", async () => {
  const browser = await puppeteer.launch({
    headless: true, // set true to run test without opening chrome instance
    slowMo: 80,
    args: ["--window-size=1920,1080"],
  });
  const page = await browser.newPage();
  await page.goto(
    "file:///Users/a.gore/Personal/LearningNode/JestPuppeteerTesting/index.html"
  );
  await page.click("input#name");
  await page.type("input#name", "gore");
  await page.click("input#age");
  await page.type("input#age", "30");
  await page.click("#btnAddUser");
  const name = page.$eval(".user-item", "gore[30 years old]");
}, 10000);
