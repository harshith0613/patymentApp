import { Component } from '@angular/core';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.css'
})
export class TransactionComponent {
  
  transactions = [
    { name: 'John Doe', amount: 150.00 },
    { name: 'Jane Smith', amount: 200.50 },
    { name: 'Alice Johnson', amount: 99.99 },
    // Add more transactions as needed
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
