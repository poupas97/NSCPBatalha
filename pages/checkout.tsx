import { createRef } from 'react'
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
            { type: 'input', field: 'test 3', label: 'Postcode / ZIP' },
          ],
          [
            { type: 'input', field: 'test', label: 'Phone' },
            { type: 'input', field: 'test 1', label: 'Email' },
          ],
          { type: 'input', field: 'test 3', label: 'Order notes' },
        ]}
      />
      <Box flex vertical='bottom' css={{ marginTop: '$20' }}>
        <Button text='Submit' onClick={onSubmit} />
      </Box>
    </>
  )
}

export default Checkout