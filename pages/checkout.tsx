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
            { type: 'input', field: 'test', label: 'Fist Name' },
            { type: 'input', field: 'test 1', label: 'Last Name' },
          ],
          { type: 'input', field: 'test 2', label: 'Country' },
          [
            { type: 'input', field: 'test 3', label: 'Address' },
            { type: 'input', field: 'test 4', label: 'Postcode / ZIP' },
          ],
          [
            { type: 'input', field: 'test 5', label: 'Phone' },
            { type: 'input', field: 'test 6', label: 'Email' },
          ],
          { type: 'input', field: 'test 7', label: 'Order notes' },
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
    size: Yup.string().required('Required'),
    quantity: Yup.number().min(1, 'Minimum is 1').required('Required'),
  });
}