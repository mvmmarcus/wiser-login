import { Story, Meta } from '@storybook/react/types-6-0'
import FormSignin from '.'

export default {
  title: '/Molecules/Form/FormSignin',
  component: FormSignin,
  argTypes: {
    isSubmiting: {
      type: 'boolean'
    }
  }
} as Meta

export const Default: Story = (args) => (
  <div
    style={{
      width: 300,
      margin: 'auto',
      position: 'relative',
      padding: '24px'
    }}
  >
    <FormSignin isSubmiting={false} onSubmit={() => undefined} {...args} />
  </div>
)

Default.args = {
  isSubmiting: false
}
