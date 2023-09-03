import React from 'react'
import { StyledContentBlock } from './styles.js'

export const ContentSection = (props) => {
  return (
    <StyledContentBlock
      aria-details="StyledContentBlock"
      aColor={props.linkColor}
      aFontColor={props.aFontColor}
      aFontFamily={props.aFontFamily}
      aFontSize={props.aFontSize}
      aHoverColor={props.aHoverColor}
      aLineHeight={props.aLineHeight}
      articleColor={props.articleColor}
      articleFontFamily={props.articleFontFamily}
      articleFontSize={props.articleFontSize}
      articleLineHeight={props.articleLineHeight}
      backkgroundColor={props.backgroundColor}
      fontColor={props.fontColor}
      h1Color={props.h1Color}
      h1FontFamily={props.h1FontFamily}
      h1FontSize={props.h1FontSize}
      h1FontWeight={props.h1FontWeight}
      h1LetterSpacing={props.h1LetterSpacing}
      h1LineHeight={props.h1LineHeight}
      h1Margin={props.h1Margin}
      h1Padding={props.h1Padding}
      h1TextAlign={props.h1TextAlign}
      h1TextTransform={props.h1TextTransform}
      h2Color={props.h2Color}
      h2FontFamily={props.h2FontFamily}
      h2FontSize={props.h2FontSize}
      h2FontWeight={props.h2FontWeight}
      h2LetterSpacing={props.h2LetterSpacing}
      h2LineHeight={props.h2LineHeight}
      h2Margin={props.h2Margin}
      h2Padding={props.h2Padding}
      h2TextAlign={props.h2TextAlign}
      h2TextTransform={props.h2TextTransform}
      h3Color={props.h3Color}
      h3FontFamily={props.h3FontFamily}
      h3FontSize={props.h3FontSize}
      h3FontWeight={props.h3FontWeight}
      h3LetterSpacing={props.h3LetterSpacing}
      h3LineHeight={props.h3LineHeight}
      h3Margin={props.h3Margin}
      h3Padding={props.h3Padding}
      h3TextAlign={props.h3TextAlign}
      h3TextTransform={props.h3TextTransform}
      h4Color={props.h4Color}
      h4FontFamily={props.h4FontFamily}
      h4FontSize={props.h4FontSize}
      h4FontWeight={props.h4FontWeight}
      h4LetterSpacing={props.h4LetterSpacing}
      h4LineHeight={props.h4LineHeight}
      h4Margin={props.h4Margin}
      h4Padding={props.h4Padding}
      h4TextAlign={props.h4TextAlign}
      h4TextTransform={props.h4TextTransform}
      h5Color={props.h5Color}
      h5FontFamily={props.h5FontFamily}
      h5FontSize={props.h5FontSize}
      h5FontWeight={props.h5FontWeight}
      h5LetterSpacing={props.h5LetterSpacing}
      h5LineHeight={props.h5LineHeight}
      h5Margin={props.h5Margin}
      h5Padding={props.h5Padding}
      h5TextAlign={props.h5TextAlign}
      h5TextTransform={props.h5TextTransform}
      h6Color={props.h6Color}
      h6FontFamily={props.h6FontFamily}
      h6FontSize={props.h6FontSize}
      h6FontWeight={props.h6FontWeight}
      h6LetterSpacing={props.h6LetterSpacing}
      h6LineHeight={props.h6LineHeight}
      h6Margin={props.h6Margin}
      h6Padding={props.h6Padding}
      h6TextAlign={props.h6TextAlign}
      h6TextTransform={props.h6TextTransform}
      margin={props.margin}
      padding={props.padding}
      pColor={props.pColor}
      pFontFamily={props.pFontFamily}
      pFontSize={props.pFontSize}
      pFontWeight={props.pFontWeight}
      pLetterSpacing={props.pLetterSpacing}
      pLineHeight={props.pLineHeight}
      pMargin={props.pMargin}
      pPadding={props.pPadding}
      pTextAlign={props.pTextAlign}
      pTextTransform={props.pTextTransform}
      textAlign={props.textAlign}
    >{props.children}</StyledContentBlock>
  )
}
