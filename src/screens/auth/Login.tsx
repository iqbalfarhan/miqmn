import { View } from 'react-native'
import React from 'react'
import Tombol from '../../components/Tombol'
import Masukan from '../../components/Masukan'
import Tulisan from '../../components/Tulisan'
import Logo from '../../components/Logo'

const Login = () => {
  return (
    <View style={{ gap: 60, width: '100%', padding: 20 }}>
      <Logo />
      <View style={{ gap: 10, width: '100%' }}>
        <Tulisan text='Selamat datang' />
        <Masukan />
        <Masukan />
        <Tombol />
      </View>
      <Tulisan text='Belum punya akun? daftar sekarang' />
    </View>
  )
}

export default Login
