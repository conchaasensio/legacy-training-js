const { GildedRose, Item } = require("../src/gilded_rose");

describe("Gilded Rose", function () {
  it("decreases item´s quality by 1 at the end or each day", function () {
    const gildedRose = new GildedRose([new Item("Book", 10, 20)]);

    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(19);
  });

  it("decreases item´s sellIn by 1 at the end or each day", function () {
    const gildedRose = new GildedRose([new Item("Book", 10, 20)]);

    const items = gildedRose.updateQuality();

    expect(items[0].sellIn).toBe(9);
  });

  it("decreases item´s quality by 2 when the sell by date has passed", function () {
    const gildedRose = new GildedRose([new Item("Book", 0, 20)]);

    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(18);
  });
});
