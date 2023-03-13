import {View} from 'react-native';

const SVGWrapper = ({children, width, height, color}) => {
  return (
    <View
      style={{
        width: width || 32,
        height: height || 32,
        backgroundColor: color,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 18,
      }}>
      {children}
    </View>
  );
};

export default SVGWrapper;
