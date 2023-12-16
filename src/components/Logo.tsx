import { StyleSheet, Text } from 'react-native'
import React from 'react'
import { COLORS } from '../consts/color'
import { FONTS } from '../consts/font'

const Logo = () => {
  return <Text style={styles.logo}>.IQMN</Text>
}

export default Logo

const styles = StyleSheet.create({
  logo: {
    textAlign: 'center',
    fontSize: 50,
    fontFamily: FONTS.black,
    color: COLORS.primary,
  },
})
