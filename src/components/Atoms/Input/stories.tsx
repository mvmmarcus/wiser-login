import { Story, Meta } from '@storybook/react/types-6-0'
import Input, { InputProps } from '.'

export default {
  title: '/Atoms/Inputs/Input',
  component: Input,
  argTypes: {
    labelText: {
      type: 'string'
    },
    error: {
      type: 'boolean'
    },
    errorText: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<InputProps> = (args) => (
  <div style={{ width: '100%', maxWidth: '300px' }}>
    <Input {...args} />
  </div>
)

Default.args = {
  labelText: 'Label'
}

export const WithError: Story<InputProps> = (args) => (
  <div style={{ width: '100%', maxWidth: '300px' }}>
    <Input {...args} />
  </div>
)

WithError.args = {
  labelText: 'Label',
  error: true,
  errorText: 'Error message.'
}
