import { Component, OnInit } from '@angular/core';
import { ListService} from '../list.service';
import { List } from '../list';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  enrollees: List[] = [];
  constructor(public listService: ListService) {
   }

   ngOnInit(): void {
    this.listService.getAll().subscribe((data: List[]) => {
      this.enrollees = data;
      console.log(this.enrollees);
    })
  }
}
