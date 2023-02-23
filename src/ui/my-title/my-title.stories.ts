// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
// import Button from '../../stories/button.component';
import { MyTitleComponent } from './my-title.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Catherine/catButton',
  component: MyTitleComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<MyTitleComponent> = (args: MyTitleComponent) => ({
  props: args,
});

export const short = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
short.args = {
//   primary: true,
  label: 'Catherine is a good girl',
};

export const long = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
long.args = {
//   primary: true,
  label: 'Storybook makes it easy to work on one component in one state (aka a story) at a time. When you edit the Button code or stories, Storybook will instantly re-render in the browser. No need to refresh manuall',
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
