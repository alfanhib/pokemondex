import React, {FC, ReactElement} from "react";
import {connect} from 'react-redux'
import {Text, StyleSheet} from 'react-native'
import styles from './styles';
import helper, {languages} from '../../../utils/languages/index'

interface TextProps {
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  p?: boolean;
  bold?: boolean;
  caption?: boolean;
  lg?: boolean;
  md?: boolean;
  sm?: boolean;
  input?: boolean;
  params?: object;
  center?: boolean;
  underline?: boolean;
  lineHeight?: boolean;
  translate?: boolean;
  children?: string;
  style?: any;
  lang?: string;
}


const TextProps = {
  h1: false,
  h2: false,
  h3: false,
  p: false,
  bold: false,
  caption: false,
  lg: false,
  md: true,
  sm: false,
  object: {},
  input: false,
  center: false,
  underline: false,
  lineHeight: false,
  translate: true,
  children: '',
  style: {},
  lang: 'id'
}

const TextPoke: FC<TextProps> = ({
  h1,
  h2,
  h3,
  p,
  bold,
  caption,
  lg,
  md,
  sm,
  input,
  params,
  center,
  underline,
  lineHeight,
  translate,
  children,
  style,
  lang
}): ReactElement => {
  const basicStyle = StyleSheet.flatten([
    // styles.default,
    p && styles.p,
    h1 && styles.h1,
    h2 && styles.h2,
    h3 && styles.h3,
    lg && styles.lg,
    md && styles.md,
    sm && styles.sm,
    input && lg && styles.inputLg,
    input && md && styles.inputMd,
    input && sm && styles.inputSm,
    caption && lg && styles.captionLg,
    caption && md && styles.captionMd,
    caption && sm && styles.captionSm,
    bold && styles.bold,
    center && styles.center,
    underline && styles.underline,
    lineHeight && styles.lineHeight
  ]);

  const outputText = !translate
    ? children
    : helper.transformText(children, lang, params);

  return (
    <Text
      style={{ ...basicStyle, ...style }}>
      {outputText}
    </Text>
  )
}

TextPoke.defaultProps = TextProps;

const reduxState = (state: any) => ({
  lang: state.setting
})

export default connect(reduxState, null)(TextPoke)