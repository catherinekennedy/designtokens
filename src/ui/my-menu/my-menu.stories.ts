// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { MyMenuComponent } from './my-menu.component';
import { moduleMetadata } from '@storybook/angular';
import { MyMenuModule } from './my-menu.module';

//

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'SharedComponent/Menu',
  component: MyMenuComponent,
  decorators: [
    moduleMetadata({
      // declarations: [MyTitleComponent],
      imports: [MyMenuModule,BrowserAnimationsModule],
    }),
  ],
} as Meta;

const Template: Story<MyMenuComponent> = (args: MyMenuComponent) => ({
  props: args,
});

export const light = Template.bind({});
light.args = {
    menuClass:'light-menu',
    menuData:[
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
      ]

};


export const dark = Template.bind({});
dark.args = {
    menuClass:'dark-menu',
    menuData:[
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
      ]

};






