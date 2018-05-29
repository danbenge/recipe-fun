import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.module';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('amountInput') amountInput:ElementRef;
  @ViewChild('nameInput') nameInput:ElementRef;

  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  addIngredient()
  {
    const ingredient = new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value);
    this.ingredientAdded.emit(ingredient);
    this.clearForm();
  }

  clearForm()
  {
    this.nameInput.nativeElement.value = '';
    this.amountInput.nativeElement.value = '';
  }

}
