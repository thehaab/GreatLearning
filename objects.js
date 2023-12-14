// Write a program to create an object of a book having different properties like ‘name’ , ’authors’ , ’publication year’ and ‘publisher’.

//    Add a property called ‘change name’ as a function to change the name of the current book object.
//    Add a property called ‘addAuthors’ as a function to the book object to add more authors to this current book object.

var book = {
  name: "",
  author: "",
  publicationYear: "",
  publisher: "",
  
  changeName: function(newName) {
    this.name = newName;
  },

  addAuthors: function(authors) {
    this.author += (Array.isArray(authors) ? authors.join(", ") : authors) || "";
  }
};

book.changeName("This Amulet");
book.addAuthors(["Mike Roth", "Tim Heartly", "Yarris Fenwicky"]); 
console.log(book);