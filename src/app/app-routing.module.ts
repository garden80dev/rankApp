import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemDetailComponent } from './items/item-detail/item-detail.component';
import { ItemsComponent } from './items/items.component';

const routes: Routes = [
  {
    path: '', component: ItemsComponent, children: [
      {
        path: 'All',
        component: ItemDetailComponent,
        data: { id: 'allranks' }
      },
      {
        path: 'Ferrari',
        component: ItemDetailComponent,
        data: { id: 'ferrari' }
      },
      {
        path: 'Maserati',
        component: ItemDetailComponent,
        data: { id: 'maserati' }
      },
      {
        path: 'Lamborghini',
        component: ItemDetailComponent,
        data: { id: 'lamborghini' }
      }
      ,
      {
        path: '',
        redirectTo: '/All',
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: '/All',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
