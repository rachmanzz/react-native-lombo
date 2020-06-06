import React, {Component} from 'react'
import { Text, Dimensions } from 'react-native'
const {width: screenWidth, Image } = Dimensions.get('window')

const scaleDimension = (current, offset) => {
    const width = current[0]
    const height = current[1]
    const currentOffset = typeof offset !== 'undefined' ? offset : 0
    const nextWidth = screenWidth - currentOffset
    const nextHeight = (height * nextWidth) / width
    return {width: nextWidth, height: nextHeight}
}
class native extends Component {
    static TextBold = ({style, children,...props}) => {
        const currentStyle = typeof style !== 'undefined' ? style : {}
        if (!currentStyle.fontWeight) currentStyle.fontWeight = 'bold'
        return <Text style={currentStyle} {...props}>{children}</Text>
    }

    static ScaleImage = ({dimension, offset, style, ...props}) => {
        const {height, width} = scaleDimension(dimension, offset)
        const currentStyle = typeof style !== 'undefined' ? style : {width: 0, height: 0}
        currentStyle.width = width
        currentStyle.height = height
        return <Image style={currentStyle} {...props}/>

    }
}

module.exports = native