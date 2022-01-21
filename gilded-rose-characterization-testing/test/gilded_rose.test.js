const { GildedRose, Item } = require("../src/gilded_rose");

describe("Gilded Rose", function () {
  it("does not change item´s name at the end of each day", function () {
    const gildedRose = new GildedRose([new Item("Book", 10, 20)]);

    const items = gildedRose.updateQuality();

    expect(items[0].name).toBe("Book");
  });
  it("decreases item´s sellIn by 1 at the end of each day", function () {
    const gildedRose = new GildedRose([new Item("Book", 10, 20)]);

    const items = gildedRose.updateQuality();

    expect(items[0].sellIn).toBe(9);
  });
});
