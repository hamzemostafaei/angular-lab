import { Component } from '@angular/core';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { NzInputNumberComponent } from 'ng-zorro-antd/input-number';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-number',
  standalone: true,
  imports: [
    NzIconDirective,
    FormsModule
  ],
  templateUrl: './input-number.component.html',
  styleUrl: './input-number.component.css'
})
export class InputNumberComponent extends NzInputNumberComponent {

  override onModelChange(value: any): void {
    console.log('value', value);
  }

}
