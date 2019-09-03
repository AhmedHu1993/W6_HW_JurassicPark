const Park = function (name, ticketPrice) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.collectionOfDinsosaur = [];
}

Park.prototype.addDino = function (dinosaur) {
  this.collectionOfDinsosaur.push(dinosaur);
};

Park.prototype.removeDino = function (dinosaur) {
  const pos = this.collectionOfDinsosaur.indexOf(dinosaur);
  this.collectionOfDinsosaur.splice(pos, 1)
};

// Park.prototype.mostPopularDino = function () {
//   function compare( a, b ) {
//     if ( a.guestsAttractedPerDay < b.guestsAttractedPerDay ){
//       return -1;
//     }
//     if ( a.guestsAttractedPerDay > b.guestsAttractedPerDay ){
//       return 1;
//     }
//     return 0;
//   }
//   this.collectionOfDinsosaur.sort(compare);
//   return this.collectionOfDinsosaur[0];
// };

Park.prototype.findSpecies = function (speciesName) {
  const foundDinos = [];
  for (dino of this.collectionOfDinsosaur) {
    if (dino.species === speciesName) {
      foundDinos.push(dino);
    }
    return foundDinos
  }
  };

Park.prototype.guestsPerDay = function () {
  let totalVisitors = 0;
  for (var i = 0; i < this.collectionOfDinsosaur.length; i++) {
    totalVisitors += this.collectionOfDinsosaur[i].guestsAttractedPerDay;
  }
  return totalVisitors
};



module.exports = Park;
