import { GildedRose, Item } from '../src/gilded_rose';

describe('Gilded Rose', function () {
  it('change me', function () {
    const gildedRose = new GildedRose([new Item('Book', 10, 20)]);

    const items = gildedRose.updateQuality();

    expect(items[0].name).toBe('Book');
  });
});
