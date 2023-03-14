import {
  useContext,
  useEffect,
  useState,
  useRef,
  useMemo,
  useCallback,
} from 'react';
import {Pressable, Text, View, StyleSheet, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import {ServiceContext} from '../../Context/ServiceContext';
import {
  selectPersonService,
  selectServiceLoading,
} from '../../redux/reducers/drawer/drawer.selectors';
import {LandingProducts} from '../../services/NetworkManager';
import ServiceProvider from '../Drawer/Service';
import {Switch} from 'react-native-switch';
import BottomSheet from '@gorhom/bottom-sheet';

import Check from '../../assets/svg/small-check.svg';
import Icon1 from '../../assets/svg/21.svg';
import Icon2 from '../../assets/svg/22.svg';
import Icon3 from '../../assets/svg/23.svg';
import Icon4 from '../../assets/svg/24.svg';
import Icon5 from '../../assets/svg/25.svg';
import Button from '../../components/Buttons/Button';

const icons = [
  <Icon1 width={17} height={15} />,
  <Icon2 width={17} height={15} />,
  <Icon3 width={17} height={15} />,
  <Icon4 width={17} height={15} />,
  <Icon5 width={17} height={15} />,
];

const bottSheetData = [
  'თქვენი საკრედიტო ისტორია გადამოწმდა რომელიმე ორგანიზაციის მიერ',
  'საკრედიტო რეპორტს დაემატა ახალი სესხი',
  'დაიხურა სესხი',
  'დაიფარა სესხის ვადაგადაცილებული თანხა',
  'სესხი გახდა ვადაგადაცილებული',
  'შეიცვალა სესხის ნაშთი',
];

const PersonTab = ({navigation}) => {
  const [toggleSwitch, setToggleSwitch] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const {0: data} = useSelector(selectPersonService);
  const groups = data?.actionGroups;

  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['20%', '75%', '95%'], []);

  // callbacks
  const handleSheetChanges = useCallback(index => {
    if (index === -1 || index === 0) {
      setShowModal(false);
    }
  }, []);

  return (
    <>
      {showModal ? (
        <View style={styles.container}>
          <BottomSheet
            ref={bottomSheetRef}
            index={1}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}>
            <View style={styles.contentContainer}>
              <Text style={{fontSize: 13, textAlign: 'center', color: '#000'}}>
                ᲥᲛᲔᲓᲔᲑᲔᲑᲘ ᲠᲝᲛᲔᲚᲖᲔᲪ ᲛᲘᲘᲦᲔᲑ ᲨᲔᲢᲧᲝᲑᲘᲜᲔᲑᲔᲑᲡ
              </Text>
              <View
                style={{
                  width: '100%',
                  height: 1,
                  backgroundColor: 'rgba(174, 190, 217, 1)',
                  marginVertical: 12,
                }}></View>
              <ScrollView>
                <View style={{paddingHorizontal: 12}}>
                  {bottSheetData.map((item, index) => {
                    return (
                      <View
                        key={index}
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          columnGap: 6,
                          padding: 8,
                          borderWidth: 1,
                          borderRadius: 12,
                          borderColor: 'rgba(0, 0, 0, 0.05)',
                          marginBottom: 4,
                        }}>
                        <Check width={18} height={18} />
                        <Text style={{fontSize: 10, color: '#000'}}>
                          {item}
                        </Text>
                      </View>
                    );
                  })}
                  <Button
                    title="ᲐᲕᲢᲝᲠᲘᲖᲐᲪᲘᲐ"
                    addStyles={{marginTop: 6}}
                    onPress={() => navigation.replace('Login')}
                  />
                </View>
              </ScrollView>
            </View>
          </BottomSheet>
        </View>
      ) : (
        <View
          style={{
            margin: 20,
            padding: 18,
            borderWidth: 1,
            borderColor: 'rgba(232, 232, 232, 0.7)',
            borderRadius: 16,
          }}>
          <View
            style={{
              marginBottom: 12,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View>
              {toggleSwitch ? (
                <Text style={{fontSize: 24, color: '#000'}}>
                  ₾{data?.monthlyPrice}.00 /
                </Text>
              ) : (
                <Text style={{fontSize: 24, color: '#000'}}>
                  ₾{data?.yearlyPrice}.00 /
                </Text>
              )}
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View>
                <Text
                  style={{
                    fontSize: 12,
                    color: `rgba(0, 0, 0, ${toggleSwitch ? 1 : 0.4})`,
                    fontWeight: 700,
                  }}>
                  თვე
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: `rgba(0, 0, 0, ${!toggleSwitch ? 1 : 0.4})`,
                    fontWeight: 700,
                  }}>
                  წელი
                </Text>
              </View>
              <View style={{transform: [{rotate: '-90deg'}]}}>
                <Switch
                  value={toggleSwitch}
                  onValueChange={val => setToggleSwitch(val)}
                  activeText={'On'}
                  inActiveText={'Off'}
                  circleSize={20}
                  barHeight={21}
                  circleBorderWidth={1}
                  backgroundActive={'#52B925'}
                  backgroundInactive={'#52B925'}
                  circleActiveColor={'#fff'}
                  circleInActiveColor={'#fff'}
                  changeValueImmediately={true}
                  innerCircleStyle={{
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  renderActiveText={false}
                  renderInActiveText={false}
                  switchLeftPx={2}
                  switchRightPx={2}
                  switchWidthMultiplier={2}
                  switchBorderRadius={30}
                />
              </View>
            </View>
          </View>
          <View>
            <Text style={{fontSize: 18, color: 'rgba(10, 26, 38, 1)'}}>
              პრემიუმი
            </Text>
            <Text style={{fontSize: 11, color: '#000', marginTop: 4}}>
              მიიღე წვდომა საკრედიტო ქულასა და რეიტინგზე
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              height: 1,
              backgroundColor: 'rgba(174, 190, 217, 1)',
              marginVertical: 12,
            }}></View>
          <View style={{rowGap: 12}}>
            {groups?.map((item, index) => {
              if (item.id === 25) {
                return (
                  <Pressable
                    onPress={() => {
                      setShowModal(true);
                    }}>
                    <View
                      key={25}
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        columnGap: 6,
                      }}>
                      <View
                        style={{
                          padding: 6,
                          backgroundColor: 'rgba(236, 65, 72, 0.2)',
                          borderRadius: 18,
                        }}>
                        {icons[index]}
                      </View>
                      <Text style={{fontSize: 11, color: '#000'}}>
                        {item.name}
                      </Text>
                    </View>
                  </Pressable>
                );
              }
              return (
                <View
                  key={item.id}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    columnGap: 6,
                  }}>
                  <View
                    style={{
                      padding: 6,
                      backgroundColor: 'rgba(236, 65, 72, 0.2)',
                      borderRadius: 18,
                    }}>
                    {icons[index]}
                  </View>
                  <Text style={{fontSize: 11, color: '#000'}}>{item.name}</Text>
                </View>
              );
            })}
          </View>
        </View>
      )}
    </>
  );
};

export default PersonTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
