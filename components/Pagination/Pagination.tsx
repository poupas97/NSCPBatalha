import React from 'react'
import Button from '~/primitive/Button'
import Row from '~/primitive/Row'

const Pagination = () => {
  return (
    <Row horizontal='center' css={{ marginTop: '$20' }}>
      {[...Array(3)].map((_, index) => (
        <Button
          key={index}
          text={index + 1}
          css={{
            borderRadius: '50%',
            width: '$30',
            height: '$30',
            marginRight: index < 2 ? '5px' : undefined
          }}
        />
      ))}
    </Row>
  )
}

export default Pagination