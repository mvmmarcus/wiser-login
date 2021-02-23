import React from 'react'
import { toast } from 'react-toastify'
import { CustomBody } from 'components/Atoms/ToastProvider'

export default {
  success: (message: string) => toast(<CustomBody message={message} />),
  error: (message: string) => toast(<CustomBody message={message} error />)
}
