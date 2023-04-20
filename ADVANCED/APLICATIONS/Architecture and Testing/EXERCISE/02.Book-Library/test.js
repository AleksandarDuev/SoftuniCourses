const { chromium } = require("playwright-chromium");
const { expect } = require("chai");

const mockData = {
  "d953e5fb-a585-4d6b-92d3-ee90697398a0": {
    author: "J.K.Rowling",
    title: "Harry Potter and the Philosopher's Stone",
  },
  "d953e5fb-a585-4d6b-92d3-ee90697398a1": {
    author: "Svetlin Nakov",
    title: "C# Fundamentals",
  },
};

function json(data) {
  return {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  };
}
let page, browser;

describe("tests", async function () {
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

  it("loads all books", async () => {
    await page.route("**/jsonstore/collections/books*", (route) => {
      // falsify request!
      route.fulfill(json(mockData));
    });
    await page.goto("http://localhost:5500");
    await page.click("text=load all books");
    await page.waitForSelector("text=Harry Potter");
    const rows = await page.$$eval("tr", (rows) =>
      rows.map((r) => r.textContent.trim())
    );
    expect(rows[1]).to.contains("Harry Potter");
    expect(rows[1]).to.contains("Rowling");
    expect(rows[2]).to.contains("C# Fundamentals");
    expect(rows[2]).to.contains("Nakov");
  });

  it("add new book", async () => {
    await page.goto("http://localhost:5500");

    await page.fill('form#createForm >> input[name="title"]', "Title");
    await page.fill('form#createForm >> input[name="author"]', "Author");

    const [request] = await Promise.all([
      page.waitForRequest((request) => request.method() == "POST"),
      page.click("form#createForm >> text=Submit"),
    ]);
    
    const data = JSON.parse(request.postData());
    expect(data.title).to.equal('Title');
    expect(data.author).to.equal('Author');

  });

  it("edit book", async () => {
    await page.goto("http://localhost:5500");
    
  });
});
