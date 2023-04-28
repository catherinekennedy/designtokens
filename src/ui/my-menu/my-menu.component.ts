import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'my-menu',
  template: `
  
   <p-menu class="{{ menuClass }}" [model]="menuData" [popup]="popup"></p-menu>

   

`,
  styleUrls: ['./my-menu.component.scss'],
  
  encapsulation: ViewEncapsulation.None,
})
export class MyMenuComponent {
  @Input() menuData: any=[
    {
      items: [
        {
          label: 'Get Started',
          icon: 'pi pi-fw pi-book',
          // routerLink: ['get-started'],
        },
      ],
    },
  
    {
      label: 'Button',
      items: [
        {
          label: 'Button',
          icon: 'pi pi-tablet',
          // routerLink: ['button'],
        },
      ],
    },
    {
      label: 'Panel',
      icon: 'pi pi-list',
      items: [
        {
          label: 'Card',
          icon: 'fa-regular fa-clipboard',
          routerLink: ['card'],
        },
        {
          label: 'TabView',
          icon: 'pi pi-ellipsis-h',
          routerLink: ['tab'],
        },
        {
          label: 'Toolbar',
          icon: 'fa-solid fa-toolbox',
  
          routerLink: ['toolbar'],
        },
      ],
    },
    {
      label: 'Overlay',
      items: [
        {
          label: 'Tooltip',
          icon: 'pi pi-comment',
          routerLink: ['tooltip'],
        },
        {
          label: 'Custom Sidebar',
          icon: 'pi pi-ellipsis-v',
          routerLink: ['sidebar'],
        },
      ],
    },
  ];
  @Input() menuClass: any='dark-menu';
  @Input() popup = false;
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}
  items: any;
  ngOnInit(): void {
    this.items = [
      {label: 'New', icon: 'pi pi-fw pi-plus'},
      {label: 'Open', icon: 'pi pi-fw pi-download'},
      {label: 'Undo', icon: 'pi pi-fw pi-refresh'}
  ];
    console.log('');
  }
}
