import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';
import { ActivatedRoute, Router } from '@angular/router';
import { List } from '../list';



@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  id: number;
  enrollee: List;
   
  constructor(
    public listService: ListService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
      
    this.listService.find(this.id).subscribe((data: List)=>{
      this.enrollee = data;
    });
  }

}
