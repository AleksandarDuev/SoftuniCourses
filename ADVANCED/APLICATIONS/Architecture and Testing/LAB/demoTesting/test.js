const { chromium } = require("playwright-chromium");
const { expect } = require("chai");
let browser, page; // Declare reusable variables
describe("E2E tests", async function () {
  this.timeout(5000);

  before(async () => {
    browser = await chromium.launch();
  });
  after(async () => {
    await browser.close();
  });
  beforeEach(async () => {
    page = await browser.newPage();
  });
  afterEach(async () => {
    await page.close();
  });

  it("test", async () => {
    await page.goto("http://localhost:5500");

    await page.waitForSelector(".accordion"); // it waits the browser to load content.

    const content = await page.textContent("#main");
    expect(content).to.contains("Scalable Vector Graphics");
    expect(content).to.contains("Open standard");
    expect(content).to.contains("Unix");
    expect(content).to.contains("ALGOL");
  });
  
  it("tests MORE button works", async () => {
    await page.goto("http://localhost:5500");
    await page.waitForSelector(".accordion");

    await page.click("text=more"); // tests the first match!
    await page.waitForResponse(/articles\/details/i);
    //await page.waitForSelector(".accordion p");
    const visible = await page.isVisible(".accordion p");
    expect(visible).to.be.true;
  });
  
  it('tests LESS button working', async ()=>{
    await page.goto("http://localhost:5500");
    await page.waitForSelector(".accordion");

    await page.click("text=more"); 
    await page.waitForResponse(/articles\/details/i);
    await page.waitForSelector('.accordion p',{state:'visible'});
    await page.click("text=less");
    const visible = await page.isVisible(".accordion p");
    expect(visible).to.be.false;
});
});
