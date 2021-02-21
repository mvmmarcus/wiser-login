import { Story, Meta } from '@storybook/react/types-6-0'
import FormSignin from '.'

export default {
  title: '/Molecules/Form/FormSignin',
  component: FormSignin
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
    <FormSignin onSubmit={() => undefined} {...args} />
  </div>
)
