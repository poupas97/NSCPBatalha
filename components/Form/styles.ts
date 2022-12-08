import Box from "~/primitive/Box";
import Row from "~/primitive/Row";
import Text from "~/primitive/Text";
import { styled } from "~/theme";



// export const FormGroup = styled(Row)`
//   justify-content: space-between;
// `;

// export const FormGroupItem = styled(View)<{ flex?: number }>(
//   ({ flex }) => css`
//     flex: ${flex || 1};
//   `
// );

// export const Title = styled(BoldText)(
//   ({ theme: { colors } }) => css`
//     color: ${colors.midgrey};
//   `
// );

// export const FormTitle = styled(Title)<{ hasError?: boolean }>(
//   ({ theme: { colors, fontSizes }, hasError }) => css`
//     color: ${hasError ? colors.red : colors.midgrey};
//     font-size: ${fontSizes.font10}px;
//     text-transform: uppercase;
//   `
// );

// export const FormError = styled(Text)(
//   ({ theme: { fontSizes, colors } }) => css`
//     padding-top: 4px;
//     font-size: ${fontSizes.font12}px;
//     color: ${colors.red};
//   `
// );

// export const Note = styled(Text)(
//   ({ theme: { colors, fontSizes } }) => css`
//     color: ${colors.midgrey};
//     font-size: ${fontSizes.font13}px;
//     margin-vertical: 8px;
//   `
// );

// export const FormInput = styled(Input)<{ hasError?: boolean }>(
//   ({ hasError, theme: { colors } }) => css`
//     margin-top: 4px;
//     ${hasError ? `color: ${colors.red}; border-color: ${colors.red}` : ''};
//   `
// );

export const FormGroup = Row
export const FormGroupItem = Box
export const Title = Text
export const FormError = Text
export const FormTitle = Text
export const FormInput = styled('input')