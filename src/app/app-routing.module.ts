import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { AdviserComponent } from './adviser/adviser.component';

const routes: Routes = [
  {
    path: 'customers',
    component: CustomersComponent,
    data: { title: 'Clientes' }
  },
  {
    path: 'adviser',
    component: AdviserComponent,
    data: { title: 'Asesores Bancarios' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
