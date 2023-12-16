import { StyleSheet, Text } from 'react-native'
import React, { FC } from 'react'
import { COLORS } from '../consts/color'
import { FONTS } from '../consts/font'

interface TulisanProps {
  text: string
  color?: keyof typeof COLORS
  font?: keyof typeof FONTS
}

const Tulisan: FC<TulisanProps> = (props) => {
  const { text, color, font } = props

  const styles = StyleSheet.create({
    tulisan: {
      color: color ? COLORS[color] : COLORS.light,
      fontFamily: font ? FONTS[font] : FONTS.medium,
    },
  })

  return <Text style={styles.tulisan}>{text}</Text>
}

export default Tulisan
