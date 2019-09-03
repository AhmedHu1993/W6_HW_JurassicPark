const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur;
  let dinosaur2;

  beforeEach(function () {
    park = new Park('Jurassic', 15);
    dinosaur = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('Plateosaurus', 'herbivore', 40);
  });

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic');
  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 15);
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.collectionOfDinsosaur;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.addDino(dinosaur);
    const actual = park.collectionOfDinsosaur;
    assert.deepStrictEqual(actual, [dinosaur]);
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.addDino(dinosaur);
    park.addDino(dinosaur2);
    park.removeDino(dinosaur);
    const actual = park.collectionOfDinsosaur;
    assert.deepStrictEqual(actual, [dinosaur2]);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    park.addDino(dinosaur);
    park.addDino(dinosaur2);
    const actual = park.mostPopularDino();
    assert.deepStrictEqual(actual, dinosaur);
  });

  it('should be able to find all dinosaurs of a particular species', function () {
    park.addDino(dinosaur);
    park.addDino(dinosaur2);
    const actual = park.findSpecies('t-rex')
    assert.deepStrictEqual(actual, [dinosaur]);
  });

  it('should be able to calculate the total number of visitors per day', function () {
    park.addDino(dinosaur);
    park.addDino(dinosaur2);
    const actual = park.guestsPerDay();
    assert.strictEqual(actual, 90)
  });

  it('should be able to calculate the total number of visitors per year', function () {
    park.addDino(dinosaur);
    park.addDino(dinosaur2);
    const actual = park.guestsPerDay() * 365;
    assert.strictEqual(actual, 32850)
  });

  it('should be able to calculate total revenue for one year', function () {
    park.addDino(dinosaur);
    park.addDino(dinosaur2);
    const actual = park.guestsPerDay() * 365 * park.ticketPrice;
    assert.strictEqual(actual, 492750)
  });

});
