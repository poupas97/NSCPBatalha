import React from 'react'
import Highlight from '~/components/Highlight';
import { IHighlight } from '~/types';
import { getSortedHighlights } from '~/utils/highlights';

interface Props {
  highlights: IHighlight[]
}

const Highlights = ({ highlights }: Props) => {
  const { length } = highlights

  return (
    <>
      {highlights.map((it, index,) => (
        <Highlight key={index} highlight={it} isLast={index === length - 1} />
      ))}
    </>
  )
}

export default Highlights

export async function getStaticProps() {
  return {
    props: {
      highlights: getSortedHighlights(),
    },
  };
}



