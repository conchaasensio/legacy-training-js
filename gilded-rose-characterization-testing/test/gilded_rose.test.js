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
  it("decreases item´s quality by 1 at the end of each day", function () {
    const gildedRose = new GildedRose([new Item("Book", 10, 20)]);

    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(19);
  });
  it("decreases item´s quality by 2 when the sell by date has passed", function () {
    const gildedRose = new GildedRose([new Item("Book", 0, 20)]);

    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(18);
  });
  it("will never have an item with negative quality", function () {
    const gildedRose = new GildedRose([new Item("Book", 10, 0)]);

    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(0);
  });
  it("increases Aged Brie´s quality by 1 every day", function () {
    const gildedRose = new GildedRose([new Item("Aged Brie", 10, 20)]);

    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(21);
  });
  it("will never have an item whose quality is more than 50", function () {
    const gildedRose = new GildedRose([new Item("Aged Brie", 10, 50)]);

    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(50);
  });
  it("never has to sell Sulfuras", function () {
    const gildedRose = new GildedRose([new Item("Sulfuras, Hand of Ragnaros", 10, 50)]);

    const items = gildedRose.updateQuality();

    expect(items[0].sellIn).toBe(10);
  });
  it("never has to increase Sulfuras´ quality", function () {
    const gildedRose = new GildedRose([new Item("Sulfuras, Hand of Ragnaros", 10, 50)]);

    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(50);
  });
});
