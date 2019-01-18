import { Component, OnInit, Output } from '@angular/core';
import { AdviserService } from '../adviser.service';

@Component({
  selector: 'app-adviser',
  templateUrl: './adviser.component.html',
  styleUrls: ['./adviser.component.css']
})
export class AdviserComponent implements OnInit {

  list:any = [];
  @Output() selected = { id: 0};

  constructor(private adviserService: AdviserService) { }

  ngOnInit() {
    this.findAll();
  }

  findAll() {
    this.list = [];
    this.adviserService.findAll().subscribe((data: {}) => {      
      this.list = data;
    });
  }

}
