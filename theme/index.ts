import { createStitches } from "@stitches/react";

const { styled, } = createStitches({
  theme: {
    colors: {
      green: 'green',
      green100: '#4cbb17',

      gray: 'gray',
    },

    space: {
      '5': '5px',
      '10': '10px',
      '15': '15px',
      '20': '20px',
    },

    sizes: {
      '30': '30px',
    }
  },
  utils: {
    marginHorizontal: (value: string) => ({
      marginLeft: value,
      marginRight: value,
    }),

    paddingVertical: (value: string) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    paddingHorizontal: (value: string) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
  }
});

export { styled }