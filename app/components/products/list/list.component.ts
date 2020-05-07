import { DataService } from './../../../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  data:any;
  constructor(private _data:DataService) { }

  ngOnInit() {
    this._data.getData().subscribe(res=>{
        this.data=res;
        console.log(this.data);
      });
  }

}
