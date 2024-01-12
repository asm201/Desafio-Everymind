import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProdutoComponent } from './add-produto.component';

describe('AddProdutoComponent', () => {
  let component: AddProdutoComponent;
  let fixture: ComponentFixture<AddProdutoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddProdutoComponent]
    });
    fixture = TestBed.createComponent(AddProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
