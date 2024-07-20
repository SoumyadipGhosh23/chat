import { View, Text } from 'react-native';
import React from 'react';
import { PropsWithChildren } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

type IconsProps = PropsWithChildren<{
  name: string;
  color: string;
  size: number;
  fontWeight?: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
}>;

const Icons: React.FC<IconsProps> = ({ name, color, size, fontWeight = 'normal' }) => {
  switch (name) {
    case 'search':
      return <Icon name="search" color={color} size={size} style={{ fontWeight }} />;
    case 'setting':
      return <AntDesignIcon name="setting" color={color} size={size} style={{ fontWeight }} />;
    case 'plus':
      return <AntDesignIcon name= "pluscircleo" color={color} size={size}/>
    default:
      return null;
  }
};

export default Icons;