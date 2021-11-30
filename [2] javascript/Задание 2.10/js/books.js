"use strict";
let booksByGenre = [
    {
        genreName: "Crafts",
        books: [
            {
                id: 8,
                title: "Lorem ipsum",
                description: "A ab aliquam consequatur ea fugit inventore laudantium natus, necessitatibus non nulla " +
                    "optio quae quod quos repudiandae rerum, tempore",
                img: "https://picsum.photos/1000/1000?random=20"
            },
            {
                id: 10,
                title: "Aliquam consequatur",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab aliquam consequatur " +
                    "ea fugit inventore laudantium natus",
                img: "https://picsum.photos/1000/1000?random=21"
            },
            {
                id: 34,
                title: "Laudantium",
                description: "A ab aliquam consequatur ea fugit inventore laudantium natus, necessitatibus non " +
                    "nulla optio quae quod quos repudiandae rerum, tempore, voluptate. laudantium natus, necessitatibus " +
                    "non nulla optio quae quod quos repudiandae rerum, tempore, voluptate.",
                img: "https://picsum.photos/1000/1000?random=22"
            }
        ]
    },
    {
        genreName: "Thriller",
        books: [
            {
                id: 4,
                title: "Necessitatibus",
                description: "A ab aliquam consequatur ea fugit inventore laudantium natus, necessitatibus non" +
                    " nulla optio quae quod quos repudiandae rerum, tempore",
                img: "https://picsum.photos/1000/1000?random=23"
            },
            {
                id: 13,
                title: "Nulla optio quae quod",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab aliquam consequatur ea " +
                    "fugit inventore laudantium natus",
                img: "https://picsum.photos/1000/1000?random=24"
            },
            {
                id: 59,
                title: "Non nulla",
                description: "A ab aliquam consequatur ea fugit inventore laudantium natus, necessitatibus non " +
                    "nulla optio quae quod quos repudiandae rerum, tempore, voluptate. laudantium natus," +
                    " necessitatibus non nulla optio quae quod quos repudiandae rerum, tempore, voluptate.",
                img: "https://picsum.photos/1000/1000?random=25"
            }
        ]
    }
];

function addBooks(booksArr, element)
{
            Object.values(booksArr).forEach((obj)=>
            {
                let card = document.createElement("div");
                card.classList.add("container");
                card.classList.add("col-12");
            
                let genreName = document.createElement("h2");
                genreName.innerText = obj.genreName;
                
                let divBooks = document.createElement("div");
                divBooks.classList.add("books");
                
                Object.values(obj.books).forEach((book)=>
                {
                    let aticle = document.createElement("aticle");
                    aticle.innerHTML = `
                        <span>${book.title}</span>
                        <img src='${book.img}'>
                        <p>${book.description}</p>
                        <a>Читать</a>
                        `;
                    aticle.classList.add("col-4");
                    aticle.classList.add("post");

                    divBooks.append(aticle);
                    card.append(genreName, divBooks);
                });
                element.append(card);
            });
}

let booksSection = document.querySelector(".books-section");
addBooks(booksByGenre, booksSection);
