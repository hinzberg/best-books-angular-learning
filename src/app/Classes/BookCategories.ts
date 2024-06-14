import { BookCategory } from "./BookCategory";

export class BookCategories {
    static categories : BookCategory[] = [
        new BookCategory(0, "Science Fiction"),
        new BookCategory(1,"Fantasy"),
        new BookCategory(2,"Romance") ,
        new BookCategory(3,"Technology"),       
        new BookCategory(4,"Young Adult")       
    ];
}

