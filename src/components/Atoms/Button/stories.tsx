import { Story, Meta } from '@storybook/react/types-6-0'
import Button, { ButtonProps } from '.'

export default {
  title: '/Atoms/Buttons/Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<ButtonProps> = (args) => (
  <div style={{ width: '100%', maxWidth: '300px', margin: 'auto' }}>
    <Button {...args} />
  </div>
)

Default.args = {
  children: 'Button',
  fullWidth: true
}
