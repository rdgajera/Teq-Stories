import { DataService } from './../../../data.service';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  data;
  constructor(private route: ActivatedRoute,private _data:DataService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
          const id = +params.get('id');
          console.log(id);
          this._data.getDataById(id).subscribe(res=>{
            this.data=res
            console.log(this.data);
          })
      }
      )
  }
}
