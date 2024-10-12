import { Component } from '@angular/core';
import { NzDescriptionsComponent, NzDescriptionsItemComponent } from 'ng-zorro-antd/descriptions';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzTooltipDirective } from 'ng-zorro-antd/tooltip';
import { NzInputDirective } from 'ng-zorro-antd/input';
import { SeparatorDirective } from '../separator-directive';

@Component({
  selector: 'lib-money',
  standalone: true,
  imports: [
    NzDescriptionsComponent,
    NzDescriptionsItemComponent,
    FormsModule,
    NzTooltipDirective,
    NzInputDirective,
    ReactiveFormsModule,
    SeparatorDirective
  ],
  templateUrl: './money.component.html',
  styleUrl: './money.component.css'
})
export class MoneyComponent {
}
