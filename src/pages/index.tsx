import { FormSignin } from 'components/Atoms'
import Auth from 'components/Templates/Auth'

export default function Home() {
  const handleSubmit = (values: { email: string; password: string }) =>
    console.log('values: ', values)

  return (
    <Auth
      title="Olá, seja bem-vindo!"
      description="Para acessar a plataforma, faça seu login."
    >
      <FormSignin onSubmit={handleSubmit} />
    </Auth>
  )
}
