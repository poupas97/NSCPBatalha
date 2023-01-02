import { CSS } from '@stitches/react';
import { styled } from '~/theme';

export type IGridColumns = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

type GridMediaQueries = '@initial' | '@xs' | '@sm' | '@md' | '@lg' | '@xl';

type GridGaps = 0 | 20 | 50;

interface Props {
  children: JSX.Element | JSX.Element[];
  columns: IGridColumns | Partial<Record<GridMediaQueries, IGridColumns>>;
  gapX?: GridGaps | Partial<Record<GridMediaQueries, GridGaps>>;
  gapY?: GridGaps | Partial<Record<GridMediaQueries, GridGaps>>;
  css?: CSS
}

const StyledDiv = styled('div', {
  boxSizing: 'border-box',
  display: 'grid',
  width: '100%',

  variants: {
    gapX: {
      0: {
        columnGap: 0,
      },
      20: {
        columnGap: '$20',
      },
      50: {
        columnGap: '$50',
      },
    },
    gapY: {
      0: {
        rowGap: '0',
      },
      20: {
        rowGap: '$20',
      },
      50: {
        rowGap: '$50',
      },
    },
    columns: {
      1: {
        gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
      },
      2: {
        gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
      },
      3: {
        gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
      },
      4: {
        gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
      },
      5: {
        gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
      },
      6: {
        gridTemplateColumns: 'repeat(6, minmax(0, 1fr))',
      },
      7: {
        gridTemplateColumns: 'repeat(7, minmax(0, 1fr))',
      },
      8: {
        gridTemplateColumns: 'repeat(8, minmax(0, 1fr))',
      },
      9: {
        gridTemplateColumns: 'repeat(9, minmax(0, 1fr))',
      },
      10: {
        gridTemplateColumns: 'repeat(10, minmax(0, 1fr))',
      },
      11: {
        gridTemplateColumns: 'repeat(11, minmax(0, 1fr))',
      },
      12: {
        gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
      },
    },
  },
});

const Grid = (props: Props) => {
  return <StyledDiv {...props} />;
};

export default Grid;