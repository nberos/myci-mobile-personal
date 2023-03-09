import {StyleSheet, View, Text, ScrollView} from 'react-native';
import BottomSheet, {BottomSheetBackdrop} from '@gorhom/bottom-sheet';
import {useMemo, useCallback, useRef} from 'react';
import {RenderHTML} from 'react-native-render-html';

const BottomSheetModal = ({show, setShow, content}) => {
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['20%', '75%', '90%'], []);

  // callbacks
  const handleSheetChanges = useCallback(index => {
    if (index === -1 || index === 0) {
      setShow(false);
    }
  }, []);

  // renders
  const renderBackdrop = useCallback(props => {
    return (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={1}
        appearsOnIndex={2}
      />
    );
  }, []);

  return (
    <View style={styles.container}>
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        backdropComponent={renderBackdrop}
        onChange={handleSheetChanges}>
        <View style={styles.contentContainer}>
          <RenderHTML
            source={{
              html: content,
            }}
            ignoredStyles={['fontWeight', 'fontFamily']}
            tagsStyles={{
              p: {marginBottom: -10, color: '#000'},
              u: {textDecorationStyle: undefined},
              ul: {
                color: '#000',
              },
            }}
            contentWidth={100}
          />
        </View>
      </BottomSheet>
    </View>
  );
};

export default BottomSheetModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
