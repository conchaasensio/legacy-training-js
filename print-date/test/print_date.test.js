const PrintDate = require("../src/print_date");
const Calendar = require("../src/calendar");
const Printer = require("../src/printer");

describe("PrintDate", function () {
  it("change_this_name", function () {
    let printDate = new PrintDate(new Calendar(), new Printer());

    printDate.printCurrentDate();

    // I don't know how to test it
  });
});
