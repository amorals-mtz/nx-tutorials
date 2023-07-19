import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiComponent } from '@angular-standalone/modules/shared/ui'

@Component({
  selector: 'angular-standalone-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {}
