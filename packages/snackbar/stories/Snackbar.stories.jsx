import { Sbar } from '../src'

export default {
  title: 'My Component/Sbar',
  component: Sbar,
}

const Template = (args) => (
  <Sbar args />
)

export const PrimarySnackbar = Template.bind({});
PrimarySnackbar.args = {
  message: 'msg',
  open:true
}
