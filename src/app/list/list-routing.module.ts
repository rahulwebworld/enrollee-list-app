import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ViewComponent} from 'src/app/list/view/view.component';
import {EditComponent} from 'src/app/list/edit/edit.component';


const routes: Routes = [
  { path: '', component: ViewComponent },
  { path: 'list/view', component: ViewComponent },
  { path: 'list/:id/edit', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule { }
