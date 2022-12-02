import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MyLabel } from '../../components/MyLabel';

export default {
  title: 'UI/MyLabel',
  component: MyLabel,
  argTypes: {
    // size: {
    //   control: {
    //     type: 'select',
    //   },
    // },
    color: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'tertiary'],
      },
    },
  },
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = (args) => (
  <MyLabel {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  label: 'Hi there',
  size: 'normal',
  allCaps: false,
};

export const AllCaps = Template.bind({});
AllCaps.args = {
  label: 'Hi there',
  size: 'normal',
  allCaps: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Hi there',
  size: 'normal',
  color: 'secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  label: 'Hi there',
  size: 'normal',
  color: 'tertiary',
};

export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
  label: 'Hi there',
  size: 'h1',
  color: 'tertiary',
  fontColor: '#5517ac',
};

export const CustomBackgroundColor = Template.bind({});
CustomBackgroundColor.args = {
  label: 'Hi there',
  size: 'h1',
  color: 'tertiary',
  backgroundColor: '#5517ac',
};
