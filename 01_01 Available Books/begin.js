/*
  WRITE YOUR SOLUTION HERE
*/
class Book {
  constructor(title, author, isbn, numCopies) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.numCopies = numCopies;
  }
  // Getter

  get availability() {
    return this.getAvailability();
  }

  getAvailability() {
    if (this.numCopies === 0) {
      return "out of stock";
    } else if (this.numCopies < 10) {
      return "low stock";
    } else {
      return "in stock";
    }
  }
  // Method
  sell(numSold = 1) {
    return this.numCopies - numSold;
  }
  restock(numCopies = 5) {
    return (this.numCopies += numCopies);
  }
}

const HungerGames = new Book(
  "Hunger Games",
  "Suzanne Collins",
  123919,
  5
);
console.log(HungerGames.availability);
HungerGames.restock(12);
console.log(HungerGames.availability);
HungerGames.sell(17);
console.log(HungerGames.availability);
