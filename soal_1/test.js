const { Builder, By } = require("selenium-webdriver");
const { expect } = require("chai");

describe("Profil Saya HTML Page Test", function () {
  let driver;

  before(async function () {
    driver = await new Builder().forBrowser("chrome").build();
    await driver.get("http://localhost:8080"); // Adjust if your local server is on a different port
  });

  after(async function () {
    await driver.quit();
  });

  it("should have a main heading", async function () {
    const heading = await driver.findElement(By.tagName("h1"));
    const headingText = await heading.getText();
    expect(headingText).to.be.a("string").that.is.not.empty;
  });

  it("should have a paragraph with name, major, and university details", async function () {
    const paragraph = await driver.findElement(By.tagName("p"));
    const paragraphText = await paragraph.getText();
    expect(paragraphText).to.include("Name");
    expect(paragraphText).to.include("Major");
    expect(paragraphText).to.include("University");
  });

  it("should have an unordered list with hobbies", async function () {
    const ul = await driver.findElement(By.tagName("ul"));
    const listItems = await ul.findElements(By.tagName("li"));
    expect(listItems.length).to.be.greaterThan(0);
    for (let item of listItems) {
      const text = await item.getText();
      expect(text).to.be.a("string").that.is.not.empty;
    }
  });
});
