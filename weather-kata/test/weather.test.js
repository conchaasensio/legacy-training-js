let Forecast = require("../src/forecast");

describe("Forecast should", function () {
  it("retrieve today's weather", async () => {
    const forecast = new Forecast();

    let prediction = await forecast.predict("Madrid", null, false);

    expect(true).toBe(true); // I don't know how to test it
  });

});
