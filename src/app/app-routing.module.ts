import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemDetailComponent } from './items/item-detail/item-detail.component';
import { ItemsComponent } from './items/items.component';

const routes: Routes = [
  {path: 'items', component: ItemsComponent, children: [
    {
      path: 'nav1',
      component: ItemDetailComponent,
      data: {id: '1'}
    },
    {
      path: 'nav2',
      component: ItemDetailComponent,
      data: {id: '2'} 
    },
    {
      path: 'nav3',
      component: ItemDetailComponent,
      data: {id: '3'}
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
