import { Component, Input } from '@angular/core';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'app-error',
  standalone: true,
  imports: [],
  templateUrl: './error.component.html',
  styleUrl: './error.component.css'
})
export class ErrorComponent {
  @Input() control!: NgModel;
}
