import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiComponent } from '@angular-standalone/modules/shared/ui';

@Component({
  selector: 'angular-standalone-orders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent {}
