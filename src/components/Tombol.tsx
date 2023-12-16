import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS } from '../consts/color'
import { FONTS } from '../consts/font'

const Tombol = () => {
  return (
    <TouchableOpacity style={style.btnWrapper}>
      <Text style={style.btnLabel}>Login</Text>
    </TouchableOpacity>
  )
}

export default Tombol

const style = StyleSheet.create({
  btnWrapper: {
    backgroundColor: COLORS.primary,
    padding: 6,
    borderRadius: 4,
  },

  btnLabel: {
    fontFamily: FONTS.semibold,
    textAlign: 'center',
  },
})
