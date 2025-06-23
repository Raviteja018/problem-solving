const books = [
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    description: "A philosophical novel about a young shepherd's journey to fulfill his dream."
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    description: "A guide to building good habits and breaking bad ones through small daily changes."
  },
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    description: "A handbook of agile software craftsmanship that teaches how to write readable and maintainable code."
  },
  {
    title: "Deep Work",
    author: "Cal Newport",
    description: "Explores the power of focused work in a distracted world."
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt and David Thomas",
    description: "Tips and practices for software developers to become more effective and adaptable."
  }
];

// for(let i=0; i<books.length; i++){
//     for(let j = 0 ; j<books.length-1; j++){
//         if(books[j].title > books[j+1].title){
//             [books[j], books[j+1]] = [books[j+1], books[j]];
//         }
//     }
// }

books.sort((a,b)=>a.title.localeCompare(b.title))

console.log(books)
























