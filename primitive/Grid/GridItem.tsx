import { ReactNode } from 'react';
import { styled } from '~/theme';

export type IGridSpan = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

type GridMediaQueries = '@initial' | '@xs' | '@sm' | '@md' | '@lg' | '@xl';

type GridStartEnd = IGridSpan | 13;

interface Props {
  children?: ReactNode;
  colSpan?: IGridSpan | Partial<Record<GridMediaQueries, IGridSpan>>;
  colStart?: GridStartEnd | Partial<Record<GridMediaQueries, GridStartEnd>>;
  colEnd?: GridStartEnd | Partial<Record<GridMediaQueries, GridStartEnd>>;
  horizontal?: 'start' | 'center' | 'end'
  vertical?: 'start' | 'center' | 'end'
}

const StyledDiv = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',

  variants: {
    colSpan: {
      1: {
        gridColumn: 'span 1 / span 1',
      },
      2: {
        gridColumn: 'span 2 / span 2',
      },
      3: {
        gridColumn: 'span 3 / span 3',
      },
      4: {
        gridColumn: 'span 4 / span 4',
      },
      5: {
        gridColumn: 'span 5 / span 5',
      },
      6: {
        gridColumn: 'span 6 / span 6',
      },
      7: {
        gridColumn: 'span 7 / span 7',
      },
      8: {
        gridColumn: 'span 8 / span 8',
      },
      9: {
        gridColumn: 'span 9 / span 9',
      },
      10: {
        gridColumn: 'span 10 / span 10',
      },
      11: {
        gridColumn: 'span 11 / span 11',
      },
      12: {
        gridColumn: 'span 12 / span 12',
      },
    },
    colStart: {
      1: {
        gridColumnStart: '1',
      },
      2: {
        gridColumnStart: '2',
      },
      3: {
        gridColumnStart: '3',
      },
      4: {
        gridColumnStart: '4',
      },
      5: {
        gridColumnStart: '5',
      },
      6: {
        gridColumnStart: '6',
      },
      7: {
        gridColumnStart: '7',
      },
      8: {
        gridColumnStart: '8',
      },
      9: {
        gridColumnStart: '9',
      },
      10: {
        gridColumnStart: '10',
      },
      11: {
        gridColumnStart: '11',
      },
      12: {
        gridColumnStart: '12',
      },
      13: {
        gridColumnStart: '13',
      },
    },
    colEnd: {
      1: {
        gridColumnEnd: '1',
      },
      2: {
        gridColumnEnd: '2',
      },
      3: {
        gridColumnEnd: '3',
      },
      4: {
        gridColumnEnd: '4',
      },
      5: {
        gridColumnEnd: '5',
      },
      6: {
        gridColumnEnd: '6',
      },
      7: {
        gridColumnEnd: '7',
      },
      8: {
        gridColumnEnd: '8',
      },
      9: {
        gridColumnEnd: '9',
      },
      10: {
        gridColumnEnd: '10',
      },
      11: {
        gridColumnEnd: '11',
      },
      12: {
        gridColumnEnd: '12',
      },
      13: {
        gridColumnEnd: '13',
      },
    },
    horizontal: {
      start: {
        alignItems: 'start',
      },
      center: {
        alignItems: 'center',
      },
      end: {
        alignItems: 'end',
      },
    },
    vertical: {
      start: {
        justifyContent: 'start',
      },
      center: {
        justifyContent: 'center',
      },
      end: {
        justifyContent: 'end',
      },
    }
  },
});

const GridItem = (props: Props) => {
  return <StyledDiv  {...props} />;
};

export default GridItem;
