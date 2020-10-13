import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ListModule} from 'src/app/list/list.module';
import { ListRoutingModule} from 'src/app/list/list-routing.module';
import  { ListService} from 'src/app/list/list.service';
import { Routes, RouterModule } from '@angular/router';




import { AppComponent } from './app.component';
import { ViewComponent } from './list/view/view.component';
import { EditComponent } from './list/edit/edit.component';

const routes: Routes = [
  { path: 'view', component: ViewComponent },
  { path: 'edit', component: EditComponent },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ListRoutingModule,
    ListModule,
    RouterModule.forRoot([])
  ],
  exports: [RouterModule],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
