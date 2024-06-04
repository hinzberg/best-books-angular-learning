import { Routes } from '@angular/router';
import { BookEntryComponent } from './Components/book-entry/book-entry.component';
import { BookTableComponent } from './Components/book-table/book-table.component';
import { BookShelfComponent } from './Components/book-shelf/book-shelf.component';
import { ShoppingCartComponent } from './Components/shopping-cart/shopping-cart.component';
import { ShoppingStoreComponent } from './Components/shopping-store/shopping-store.component';
import { TaggingCellComponent } from './Components/tagging-cell/tagging-cell.component';
import { PlaygroundComponent } from './Components/playground/playground.component';

export const routes: Routes = [
  { path: '', component: PlaygroundComponent },
  // { path: '', component: ShoppingStoreComponent },
  // { path: '', component: TaggingCellComponent },
  { path: 'playground', component: PlaygroundComponent },
  { path: 'all-books', component: BookTableComponent },
  { path: 'book-entry', component: BookEntryComponent },
  { path: 'book-entry/:bookId', component: BookEntryComponent },
  { path: 'book-shelf', component: BookShelfComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'shopping-store', component: ShoppingStoreComponent },
];
