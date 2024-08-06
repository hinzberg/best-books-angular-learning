import { Routes } from '@angular/router';
import { BookEntryComponent } from './Components/book-entry/book-entry.component';
import { BookTableComponent } from './Components/book-table/book-table.component';
import { ShoppingCartComponent } from './Components/shopping-cart/shopping-cart.component';
import { ShoppingStoreComponent } from './Components/shopping-store/shopping-store.component';
import { TaggingCellComponent } from './Components/tagging-cell/tagging-cell.component';
import { PlaygroundComponent } from './Components/playground/playground.component';
import { TopListComponent } from './Components/top-list/top-list.component';
import { BooksWarehouseComponent } from './Components/books-warehouse/books-warehouse.component';

export const routes: Routes = [
  // The path with an empty name is the default page and will be
  // loaded automatically at startup.
  { path: '', component: BookEntryComponent },

  //{ path: '', component: PlaygroundComponent },
  // { path: '', component: ShoppingStoreComponent },
  // { path: '', component: TaggingCellComponent },
  { path: 'playground', component: PlaygroundComponent },
  { path: 'all-books', component: BookTableComponent },
  { path: 'book-entry', component: BookEntryComponent },
  { path: 'book-entry/:bookId', component: BookEntryComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'shopping-store', component: ShoppingStoreComponent },
  { path: 'top-list', component: TopListComponent },
  { path: 'warehouse', component: BooksWarehouseComponent },
];
