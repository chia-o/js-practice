let recipe = {
  title : "Cheeseburger",
  servings : 1,
  ingredients : ["beef", "cheese", "onion", "ketchup", "lettuce"],
}

console.log(recipe.title);
console.log("-----");
console.log(`Serves: ${recipe.servings}`);
console.log("-----");
console.log(`Ingredients:`);
for (var i = 0; i < recipe.ingredients.length; i++) {
     console.log(recipe.ingredients[i]);
}



    // Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
    // Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
    // Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.' 


function Book(title, author, alreadyRead) {
  book.title : "title";
  book.author : "author";
  book.status : alreadyRead === true ? `You have already read this book!` : `You have not read this book yet.`
 }

 const book1 = new Book("The Alchemist", "Paul Coelho", false);
 const book2 = new Book("The Outsiders", "S.E. Hinton", true);
 const book3 = new Book("Watchmen", "Alan Moore", true);

 let books = [book1, book2, book3];

 for (i = 0; i < books.length; i++) {
   console.log(`${book.title} by ${book.author}. ${alreadyRead}.`);
 }


 let books = [
     {title: "The Alchemist",
      author: "Paul Coelho",
      alreadyRead: false
     },
     {title: "The Outsiders",
      author: "S.E. Hinton",
      alreadyRead: true
     },
     {title: "Watchmen",
     author: "Alan Moore",
      alreadyRead: true
     },
 ];

 for (i = 0; i < books.length; i++) {
   let book = books[i]; //you could skip this, but its good to write it out
   console.log(`${book.title} by ${books[i].author}. ${books[i].alreadyRead === true ? `You have already read this book!` : `You have not read this book yet.` }`); //could've just done books[i] and wouldve worked fine. also, could've done an if else statement for alreadyRead.
 }


let word = "hello";
let result = word.slice(0,2);

console.log(result);
