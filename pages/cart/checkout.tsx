import { createRef } from 'react'
import * as Yup from 'yup'
import Form, { FormRefProps } from '~/components/Form'
import Box from '~/primitive/Box'
import Button from '~/primitive/Button'

const Checkout = () => {
  const ref = createRef<FormRefProps<{}>>()

  const onSubmit = async () => {
    const result = await ref.current?.onSubmit()

    console.log(result);
  }

  return (
    <>
      <Form
        ref={ref}
        items={[
          [
            { type: 'input', field: 'firstName', label: 'Fist Name' },
            { type: 'input', field: 'lastName', label: 'Last Name' },
          ],
          [
            { type: 'input', field: 'address', label: 'Address' },
            { type: 'input', field: 'postCode', label: 'Postcode / ZIP' },
          ],
          [
            { type: 'input', field: 'phone', label: 'Phone' },
            { type: 'input', field: 'email', label: 'Email' },
          ],
          { type: 'input', field: 'orderNotes', label: 'Order notes' },
        ]}
        validationSchema={getValidationSchema()}
      />
      <Box flex vertical='bottom' css={{ marginTop: '$20' }}>
        <Button text='Submit' onClick={onSubmit} />
      </Box>
    </>
  )
}

export default Checkout

function getValidationSchema() {
  return Yup.object().shape({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    address: Yup.string().required('Required'),
    postCode: Yup.string().required('Required'),
    phone: Yup.string().required('Required'),
    email: Yup.string().required('Required'),
  });
}