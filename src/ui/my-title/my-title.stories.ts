// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
// import Button from '../../stories/button.component';
import { MyTitleComponent } from './my-title.component';
import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { MyTitleModule } from './my-title.module';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'SharedComponent/avatar',
  component: MyTitleComponent,
  decorators: [
    moduleMetadata({
      // declarations: [MyTitleComponent],
      imports: [CommonModule,MyTitleModule],
    }),
  ],
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<MyTitleComponent> = (args: MyTitleComponent) => ({
  props: args,
});

export const label = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
label.args = {
//   primary: true,
  avatarData: {
    type: 'avatar',
    label:'JD',
    shape: 'circle',
  }
};




export const avatargrp = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
avatargrp.args = {
//   primary: true,
avatarData:  {
  type:'avatar',
  size:"",
  shape:"circle",
  limit:3,
  items:[{
    label:"JD",
  },
{
  label:"AW",
},{
  image:"https://organicthemes.com/demo/profile/files/2018/05/profile-pic.jpg",
},{
  label:'JD'
}]

}
};

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
