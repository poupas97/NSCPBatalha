import { createStitches } from "@stitches/react";

const { styled, } = createStitches({
  theme: {
    colors: {
      green: 'green',
      gray: 'gray',
    },

    space: {
      '5': '5px',
      '10': '10px',
      '15': '15px',
      '20': '20px',
    },
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
  }
});

export { styled }