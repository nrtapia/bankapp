import { Component, OnInit, Output } from '@angular/core';
import { CustomerService } from '../customer.service';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  list:any = [];
  transactionList:any = [];

  @Output() selected = { id: 0, cards: [] };

  constructor(private customerService: CustomerService, private transactionService: TransactionService) { }

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
    this.transactionList = [];
  }

  customerDeleted(customer){    
    this.list = this.list.filter(obj => obj !== customer);
    this.selected = { id: 0, cards: [] }
    this.transactionList = [];
  }

  setCardSelected(cardId){
    this.transactionService.findByCard(cardId).subscribe((data:{}) =>{
      this.transactionList = data;  
    })
  }

}
