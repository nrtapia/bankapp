import { Component, OnInit, Output } from '@angular/core';
import { CustomerService } from '../customer.service';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  list:any = [];
  @Output() selected = { id: 0};

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.findAll();
  }

  findAll() {
    this.list = [];
    this.customerService.findAll().subscribe((data: {}) => {      
      this.list = data;
    });
  }

  setSelected(customer) {
    this.selected = customer;
  }

  customerDeleted(customer){    
    this.list = this.list.filter(obj => obj !== customer);
    this.selected = { id: 0}
  }

}
