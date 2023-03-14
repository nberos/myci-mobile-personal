import {View, Text, Pressable} from 'react-native';

const DropDownQuestion = ({
  showDropdown,
  dropdownData,
  exactId,
  id,
  showItem,
  itemText,
  getItemTextHandler,
  nestedId,
}) => {
  return (
    <>
      <View style={{rowGap: 12}}>
        {showDropdown && id === exactId
          ? dropdownData?.map(item => (
              <View key={item.id}>
                <View
                  style={{
                    width: '85%',
                    alignSelf: 'flex-end',
                    marginRight: 12,
                  }}>
                  <Pressable
                    onPress={() => {
                      getItemTextHandler(item.id);
                    }}>
                    <View
                      style={{
                        backgroundColor: 'rgba(229, 229, 229, 1)',
                        padding: 12,
                        borderRadius: 18,
                      }}>
                      <Text>{item.question}</Text>
                    </View>
                  </Pressable>
                </View>
                <View style={{rowGap: 10}}>
                  {showItem && item.id === nestedId ? (
                    <View
                      style={{
                        width: '85%',
                        alignSelf: 'flex-end',
                        marginRight: 12,
                        marginTop: -12,
                        backgroundColor: 'rgba(229, 229, 229, 0.4)',
                        padding: 12,
                        paddingTop: 16,
                        borderBottomRightRadius: 12,
                        borderBottomLeftRadius: 12,
                      }}>
                      <Text>{itemText}</Text>
                    </View>
                  ) : null}
                </View>
              </View>
            ))
          : null}
      </View>
    </>
  );
};

export default DropDownQuestion;
