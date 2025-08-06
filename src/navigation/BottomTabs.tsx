import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Shipments from '../screens/Shipments';
import ShipmentIcon from '../../assets/shipment.svg';
import BarCodeIcon from '../../assets/barcode.svg';
import WalletIcon from '../../assets/wallet.svg';
import ProfileIcon from '../../assets/profile.svg';
import { SvgProps } from 'react-native-svg';
import { colors } from '../constants/colors';
import { StatusBar } from 'react-native';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({ focused, color, size }) => {
            let Icon: React.FC<SvgProps>;
            switch (route.name) {
              case 'Shipments':
                Icon = ShipmentIcon;
                break;
              case 'Scan':
                Icon = BarCodeIcon;
                break;
              case 'Wallet':
                Icon = WalletIcon;
                break;
              default:
                Icon = ProfileIcon;
            }
            return (
              <Icon
                width={24}
                height={24}
                color={focused ? colors.primary : 'gray'}
              />
            );
          },
        })}
      >
        <Tab.Screen name="Shipments" component={Shipments} />
        <Tab.Screen name="Scan" component={Shipments} />
        <Tab.Screen name="Wallet" component={Shipments} />
        <Tab.Screen name="Profile" component={Shipments} />
      </Tab.Navigator>
    </>
  );
};

export default BottomTabs;
