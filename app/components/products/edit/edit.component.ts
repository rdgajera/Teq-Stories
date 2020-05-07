import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // + converts it into number 
    // type coercion or type conversion
    // const id = +this.route.snapshot.paramMap.get('id');
    // console.log(id);

    this.route.paramMap.subscribe(
      params => {
          const id = +params.get('id');
          console.log(id);
      }
      )
  }

}
