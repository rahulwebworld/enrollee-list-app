import { Component, OnInit } from '@angular/core';
import { List } from '../list';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ListService } from '../list.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  id: number;
  enrollee: List;
  form: FormGroup;
  
  constructor(
    public listService: ListService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.listService.find(this.id).subscribe((data: List) => {
      this.enrollee = data;
    });
    console.log(this.enrollee);
    
    this.form = new FormGroup({
      active: new FormControl(''),
      name: new FormControl('', [Validators.required]),
      dateOfBirth: new FormControl('')
        });
  }
   
  get f(){
    return this.form.controls;
  }
     
  submit(){
    console.log(this.form.value);
    this.listService.update(this.id, this.form.value).subscribe(res => {
         console.log('Enrollee updated successfully!');
         this.router.navigateByUrl('list/view');
    })
  }

}
