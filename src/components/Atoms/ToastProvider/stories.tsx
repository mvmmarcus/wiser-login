import { Story, Meta } from '@storybook/react/types-6-0'
import { CustomBody as ToastCustomBody } from '.'

export default {
  title: '/Atoms/Toasts/ToastCustomBody',
  component: ToastCustomBody,
  argTypes: {
    message: {
      type: 'string'
    },
    error: {
      type: 'boolean'
    }
  }
} as Meta

export const Default: Story = (args) => (
  <div
    style={{
      width: '100%',
      maxWidth: '300px',
      height: '50px',
      position: 'relative',
      margin: 'auto'
    }}
  >
    <ToastCustomBody {...args} />
  </div>
)

Default.args = {
  message: 'Toast message',
  error: false
}
