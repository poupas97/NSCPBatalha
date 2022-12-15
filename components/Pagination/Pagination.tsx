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

interface Props {
  pages: number
  onClick: (page: number) => () => void
}

const Pagination = ({ pages, onClick }: Props) => {
  return (
    <Row horizontal='center' css={{ marginTop: '$20' }}>
      {createArray(pages).map((_, index) => (
        <PageButton
          key={index}
          text={index + 1}
          isLast={index === pages - 1}
          onClick={onClick(index)}
        />
      ))}
    </Row>
  )
}

export default Pagination