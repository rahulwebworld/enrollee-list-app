import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ListRoutingModule } from './list-routing.module';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailComponent } from './detail/detail.component';



@NgModule({
  declarations: [ViewComponent, EditComponent, DetailComponent],
  imports: [
    CommonModule,
    ListRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class ListModule { }
