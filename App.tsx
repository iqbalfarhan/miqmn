import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'
import { COLORS } from './src/consts/color'
import Login from './src/screens/auth/Login'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { useCallback } from 'react'

SplashScreen.preventAutoHideAsync()

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'Poppins-Black': require('./assets/fonts/Poppins/Poppins-Black.ttf'),
    'Poppins-ExtraBold': require('./assets/fonts/Poppins/Poppins-ExtraBold.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins/Poppins-Bold.ttf'),
    'Poppins-SemiBold': require('./assets/fonts/Poppins/Poppins-SemiBold.ttf'),
    'Poppins-Medium': require('./assets/fonts/Poppins/Poppins-Medium.ttf'),
    'Poppins-Regular': require('./assets/fonts/Poppins/Poppins-Regular.ttf'),
    'Poppins-Light': require('./assets/fonts/Poppins/Poppins-Light.ttf'),
    'Poppins-ExtraLight': require('./assets/fonts/Poppins/Poppins-ExtraLight.ttf'),
    'Poppins-Thin': require('./assets/fonts/Poppins/Poppins-Thin.ttf'),
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded, fontError])

  if (!fontsLoaded && !fontError) {
    return null
  }

  return (
    <View
      onLayout={onLayoutRootView}
      style={{
        backgroundColor: COLORS.neutral,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      }}
    >
      <StatusBar style='light' />
      <Login />
    </View>
  )
}
