import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-money',
  standalone: true,
  imports: [],
  templateUrl: './money.component.html',
  styleUrl: './money.component.css'
})
export class MoneyComponent implements OnInit {

  ngOnInit(): void {
    console.log('hamze', 'hamze');
    console.log('Ghorbanali','ghorbanali');
  }

}
