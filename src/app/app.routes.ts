import { Routes } from '@angular/router';
import { BookEntryComponent } from './Components/book-entry/book-entry.component';
import { BookTableComponent } from './Components/book-table/book-table.component';

export const routes: Routes = [
    { path: '', component: BookTableComponent },
    { path: 'all-books', component: BookTableComponent },
    { path: 'book-entry', component: BookEntryComponent },
    { path: 'book-entry/:bookId', component: BookEntryComponent }
];
