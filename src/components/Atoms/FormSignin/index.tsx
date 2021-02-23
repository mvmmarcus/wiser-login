import Link from 'next/link'

import { Formik } from 'formik'

import Spinner from '../Spinner'
import theme from 'styles/theme'
import { Input } from 'components/Atoms'

import * as Yup from 'yup'

import * as S from './styles'

type FormValues = {
  email: string
  password: string
}

type FormProps = {
  onSubmit: (values: FormValues) => void
  isSubmiting: boolean
}

const FormSignin = ({ onSubmit, isSubmiting }: FormProps) => {
  return (
    <S.Wrapper data-testid="form-wrapper">
      <Formik
        initialValues={initialValues}
        validationSchema={LoginSchema}
        onSubmit={onSubmit}
      >
        {({
          errors,
          values,
          touched,
          handleChange,
          handleBlur,
          handleSubmit
        }) => {
          return (
            <S.Form data-testid="form-form" onSubmit={handleSubmit}>
              <Input
                data-testid="form-input-email"
                type="email"
                value={values.email}
                onChange={handleChange('email')}
                onBlur={handleBlur('email')}
                name="email"
                labelText="e-mail"
                placeholder="Digite seu e-mail"
                error={errors.email && touched.email ? true : false}
                errorText={errors.email}
              />

              <Input
                data-testid="form-input-password"
                type="password"
                autoComplete="off"
                value={values.password}
                onChange={handleChange('password')}
                onBlur={handleBlur('password')}
                name="password"
                labelText="senha"
                placeholder="Digite sua senha"
                error={errors.password && touched.password ? true : false}
                errorText={errors.password}
              />

              {isSubmiting ? (
                <Spinner
                  data-testid="form-spinner"
                  size={40}
                  color={theme.colors.primary}
                />
              ) : (
                <S.CustomButtonWrapper
                  data-testid="form-button"
                  type="submit"
                  fullWidth
                >
                  Entrar
                </S.CustomButtonWrapper>
              )}

              <S.DescriptionFooter data-testid="form-description">
                Esqueceu seu login ou senha? Clique
                <Link href="#">
                  <S.LinkText>aqui</S.LinkText>
                </Link>
              </S.DescriptionFooter>
            </S.Form>
          )
        }}
      </Formik>
    </S.Wrapper>
  )
}

const initialValues: FormValues = {
  email: '',
  password: ''
}

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Digite um e-mail válido.')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .required('A senha é obrigatória')
    .min(6, 'A senha deve ter 6 caracteres, no mínimo.')
})

export default FormSignin
