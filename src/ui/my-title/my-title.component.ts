import { Component,Input } from '@angular/core';

@Component({
  selector: 'my-title',
  template: `
    <p style="color:red;">
    {{label}}
    </p>
`,
  styleUrls: ['./my-title.component.scss']
})
export class MyTitleComponent {
  constructor() {}

  @Input()
  label:string="title Works";
}
