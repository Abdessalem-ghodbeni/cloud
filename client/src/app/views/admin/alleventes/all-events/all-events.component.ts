import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-all-events',
  templateUrl: './all-events.component.html',
  styleUrls: ['./all-events.component.scss']
})
export class AllEventsComponent implements OnInit {
dataArray: any
  constructor(private ds:DataService) { 
  this.ds.getAllevenement().subscribe(data=>this.dataArray=data)
}
  ngOnInit(): void {
  }

}
