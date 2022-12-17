// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow

import React, { useState } from 'react'
import Image from '~/primitive/Image'
import { keyframes, styled } from '~/theme'

const fade = keyframes({
  from: { opacity: 0.4 },
  to: { opacity: 1 }
})
const SlideshowContainer = styled('div', {
  maxWidth: '1000px',
  position: 'relative',
  margin: 'auto',
})

const Dot = styled('span', {
  cursor: 'pointer',
  height: '15px',
  width: '15px',
  margin: '0 2px',
  backgroundColor: '#bbb',
  borderRadius: '50%',
  display: 'inline-block',
  transition: 'background-color 0.6s ease',

  '&:hover': {
    backgroundColor: '#717171',
  },

  variants: {
    active: {
      true: {
        backgroundColor: '#717171',
      }
    }
  }
})

const MySlides = styled('div', {
  display: 'none',
  animation: `${fade} 1.5s`,

  variants: {
    active: {
      true: {
        display: 'block',
      }
    }
  }
})

const StyledImage = styled(Image, {
  verticalAlign: 'middle',
  width: '500px',
  maxWidth: '500px',
})

const NavButtons = styled('a', {
  cursor: 'pointer',
  position: 'absolute',
  top: '50%',
  width: 'auto',
  padding: '16px',
  marginTop: '-22px',
  color: 'white',
  fontWeight: 'bold',
  fontSize: '18px',
  transition: '0.6s ease',
  borderRadius: '0 3px 3px 0',
  userSelect: 'none',

  '&:hover': {
    backgroundColor: 'rgba(0,0,0,0.8)'
  }

})

const IMAGES = ['download-0.jpeg', 'download-1.jpeg', 'download-2.jpeg']

const Slider = () => {
  const [carrousel, setCarrousel] = useState(0)

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCarrousel(current => {
  //       const next = current + 1

  //       return next === 3 ? 0 : next
  //     })
  //   }, 2000)

  //   return () => {
  //     clearInterval(interval)
  //   }
  // }, [])

  const plusSlides = (value: number) => () => {
    setCarrousel(current => {
      const next = current + value

      if (next === -1)
        return 2

      return next === 3 ? 0 : next
    })
  }

  return (
    <>
      <SlideshowContainer>
        {IMAGES.map((image, index) => (
          <MySlides active={carrousel === index}>
            <StyledImage src={`images/${image}`} alt={`images/${image}`} />
          </MySlides>
        ))}

        <NavButtons style={{ left: 0, }} onClick={plusSlides(-1)}>❮</NavButtons>
        <NavButtons style={{ right: 0, }} onClick={plusSlides(1)}>❯</NavButtons>
      </SlideshowContainer>

      <div style={{ textAlign: "center", marginTop: '10px' }}>
        {IMAGES.map((_, index) => (
          <Dot active={carrousel === index} onClick={() => setCarrousel(index)}></Dot>
        ))}
      </div>
    </>
  )
}

export default Slider