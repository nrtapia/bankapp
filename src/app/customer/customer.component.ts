import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  defaultValue = {fullName: '', id:0, city: '', address: '', phone: '' };

  @Input() data = this.defaultValue;
  
  @Output() customerSelected = new EventEmitter();
  @Output() customerDeleted = new EventEmitter();

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
  }
  
  select() {
    this.customerSelected.emit(this.data);    
  }

  delete(event){
    event.stopPropagation();

    if(confirm("Confirma borrar el cliente " + this.data.fullName + "?")) {    
      this.customerService.delete(this.data.id).subscribe(response => this.customerDeleted.emit(this.data));
    }
  }

}
