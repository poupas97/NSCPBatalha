import React from 'react'
import Button from '~/primitive/Button'
import Row from '~/primitive/Row'
import { styled } from '~/theme'
import { createArray } from '~/utils/array'

const PageButton = styled(Button, {
  borderRadius: '50%',
  width: '$30',
  height: '$30',
  padding: '$5',

  variants: {
    isLast: {
      false: {
        marginRight: '$5'
      }
    }
  }
})

const Pagination = () => {
  return (
    <Row horizontal='center' css={{ marginTop: '$20' }}>
      {createArray(3).map((_, index) => (
        <PageButton
          key={index}
          text={index + 1}
          isLast={index === 2}
        />
      ))}
    </Row>
  )
}

export default Pagination