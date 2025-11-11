import { StatusBar, View } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const CustomStatusBar = (
    {
        backgroundColor,
        barStyle,
        hidden
    } : any
) => {

    const insets = useSafeAreaInsets();

  return (
    <View style={{height: insets.top, backgroundColor}}>
      <StatusBar 
        animated={true}
        backgroundColor={backgroundColor}
        barStyle={barStyle}
        hidden={hidden}
      />
    </View>
  )
}

export default CustomStatusBar
