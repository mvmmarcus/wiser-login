import { Story, Meta } from '@storybook/react/types-6-0'
import theme from 'styles/theme'
import Spinner from '.'

export default {
  title: '/Atoms/Spinners/Spinner',
  component: Spinner,
  argTypes: {
    size: {
      type: 'number'
    },
    color: {
      control: 'color'
    }
  }
} as Meta

export const Default: Story = (args) => (
  <div
    style={{
      display: 'flex',
      width: '100%',
      height: '300px',
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
    <Spinner {...args} />
  </div>
)

Default.args = {
  size: 40,
  color: theme.colors.primary
}
