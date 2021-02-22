import { FormSignin } from 'components/Atoms'
import Auth from 'components/Templates/Auth'
import { useState } from 'react'

export default function Home() {
  const [isSubmiting, setIsSubmiting] = useState(false)

  const handleSubmit = (values: { email: string; password: string }) => {
    console.log('values: ', values)

    setIsSubmiting(true)

    setTimeout(() => {
      setIsSubmiting(false)
    }, 1500)
  }

  return (
    <Auth
      title="Olá, seja bem-vindo!"
      description="Para acessar a plataforma, faça seu login."
    >
      <FormSignin onSubmit={handleSubmit} isSubmiting={isSubmiting} />
    </Auth>
  )
}
