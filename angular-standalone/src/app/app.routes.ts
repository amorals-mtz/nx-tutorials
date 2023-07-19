import { Route } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: NxWelcomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'products',
    loadComponent: () =>
      import('@angular-standalone/modules/products').then(
        (m) => m.ProductsComponent
      ),
  },
  {
    path: 'orders',
    loadComponent: () =>
      import('@angular-standalone/modules/orders').then(
        (m) => m.OrdersComponent
      ),
  },
];
