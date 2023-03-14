import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {
  selectCompanyService,
  selectServiceLoading,
} from '../../redux/reducers/drawer/drawer.selectors';
import ServiceProvider from '../Drawer/Service';
import {Switch} from 'react-native-switch';
import {useState} from 'react';

import Icon1 from '../../assets/svg/21.svg';
import Icon2 from '../../assets/svg/22.svg';
import Icon3 from '../../assets/svg/23.svg';
import Icon4 from '../../assets/svg/24.svg';
import Icon5 from '../../assets/svg/25.svg';

const icons = [
  <Icon1 width={17} height={15} />,
  <Icon2 width={17} height={15} />,
  <Icon3 width={17} height={15} />,
  <Icon4 width={17} height={15} />,
  <Icon5 width={17} height={15} />,
];

const ComapanyTab = () => {
  const [toggleSwitch, setToggleSwitch] = useState(false);

  const {0: data} = useSelector(selectCompanyService);
  const groups = data?.actionGroups;

  return (
    <View
      style={{
        margin: 20,
        padding: 18,
        borderWidth: 1,
        borderColor: 'rgba(232, 232, 232, 0.7)',
        borderRadius: 16,
      }}>
      <View>
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
  );
};

export default ComapanyTab;
