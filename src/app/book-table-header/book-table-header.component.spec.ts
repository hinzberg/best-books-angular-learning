import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookTableHeaderComponent } from './book-table-header.component';

describe('BookTableHeaderComponent', () => {
  let component: BookTableHeaderComponent;
  let fixture: ComponentFixture<BookTableHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookTableHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookTableHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
