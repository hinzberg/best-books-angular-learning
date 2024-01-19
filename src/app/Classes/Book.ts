export class Book 
{
    Title: string;
    Autor: string;
    ISBN: string;
    NumberOfPages: number

    constructor(title:string, autor:string, isbn:string, pages:number) {
        this.Autor = autor;
        this.Title = title;
        this.ISBN = isbn;
        this.NumberOfPages = pages
    }
}
