import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MoneyComponent } from '@angular-lab/ui';
import { NzInputNumberComponent } from 'ng-zorro-antd/input-number';
import { FormsModule } from '@angular/forms';
import { InputNumberComponent } from './input-number/input-number.component';
import { NzCardComponent } from 'ng-zorro-antd/card';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, MoneyComponent, NzInputNumberComponent, FormsModule, InputNumberComponent, NzCardComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


  value: any = 1234567.55;
  formatter = (value: any) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  parser = (value: any) => value.replace(/\$\s?|(,*)/g, '');

  onValueChange(event: any): void {
    this.formatter(event);
    /*console.log('event',event);
    const parsedValue = this.parser(event);
    console.log('parsedValue',event);
    if (event) {
      const numberValue = parseFloat(event);
      this.value = isNaN(numberValue) ? null : numberValue;
    }*/
  }
}
