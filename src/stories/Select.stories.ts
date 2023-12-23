import { Meta, StoryObj } from '@storybook/react';
import {Select} from './Select';

const meta: Meta = {
  title: 'Example/Select',
  component: Select,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    options: { control: 'array' },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        id: 'select-default',
        label: 'Select Label',
        assistiveText: 'Select Assistive Text',
        ariaDescribedBy: 'select-default-at',
        options: [
          { value: 'option1', label: 'Option 1' },
          { value: 'option2', label: 'Option 2' },
          { value: 'option3', label: 'Option 3' },
          { value: 'option3', label: 'Option 4' },
        ],
      }
}

