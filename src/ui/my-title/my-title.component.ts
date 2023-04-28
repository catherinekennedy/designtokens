import { Component,Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'my-title',
  template: `


    <p-avatar
  *ngIf="avatarData.items === undefined"
  image="{{ avatarData.image }}"
  icon="{{ avatarData.icon }}"
  label="{{ avatarData.label }}"
  shape="{{ avatarData.shape }}"
  size="{{ avatarData.size }}"
  class="avatar text-primary"
></p-avatar>

<p-avatarGroup
  class="flex items-center justify-center"
  *ngIf="avatarData.items !== undefined"
>
  <p-avatar
  [ngClass]="item.image !== undefined ? 'mt-1' : ''"
    *ngFor="let item of avatarData.items.slice(0, avatarData.limit)"
    image="{{ item.image }}"
    icon="{{ item.icon }}"
    label="{{ item.label }}"
    shape="{{ avatarData.shape }}"
    size="{{ avatarData.size }}"
    class="avatar text-primary"
  ></p-avatar>
  <p-avatar
    *ngIf="avatarData.items.length - avatarData.limit > 0"
    icon="fa fa-plus"
    shape="{{ avatarData.shape }}"
    size="{{ avatarData.size }}"
    class="avatar text-primary"
  ></p-avatar>
</p-avatarGroup>

`,
  styleUrls: ['./my-title.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MyTitleComponent {
  constructor() {}

  @Input() avatarData: any=  {
    type: 'avatar',
    label:'JD',
    shape: 'circle',
  };
  ngOnInit(): void {
    console.log(this.avatarData);
  }
}
