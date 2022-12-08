import Form from '~/components/Form'
import Pagination from '~/components/Pagination/Pagination'
import Box from '~/primitive/Box'
import Button from '~/primitive/Button'
import Grid, { GridItem } from '~/primitive/Grid'
import Image from '~/primitive/Image'
import Text from '~/primitive/Text'
import { createArray } from '~/utils/array'

const Checkout = () => {
  return (
    <>
      <Form items={[{ type: 'input', field: 'test', label: 'test' }]} />
    </>
  )
}

export default Checkout