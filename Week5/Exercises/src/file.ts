interface IBook {
    title: string,
    readonly author: string,
    published?: Date,
    pages?: number
}

function bookFunction(book: IBook) {
    book.title = "newTitle"
    console.log(book.author + " " + book.title)

}
var d = new Date();
let myBook = { title: "Title", author: "author", published: d, pages: 4 }
let myBook2 = { title: "title2", author: "author2" }
bookFunction(myBook)
bookFunction(myBook2)


class Book implements IBook {
    title: string
    author: string
    published: Date
    pages: number

    constructor(title: string, author: string, published: Date, pages: number) {
        this.title = title;
        this.author = author;
        this.published = published;
        this.pages = pages;
    }

}