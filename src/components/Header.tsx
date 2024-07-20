import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Icons from '../assets/Icons';

const Header : React.FC = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Let's Connect</Text>
      </View>
      <View style={styles.icons}>
        <View style={{ marginRight: 15 }}>
          <Icons name="search" color='#2d323b' size={30} />
        </View>
        <View>
          <Icons name="setting" color='#2d323b' size={30} fontWeight='bold' />
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor : "#D9E5F2",
    borderBottomLeftRadius : 15,
    borderBottomRightRadius : 15,
    elevation : 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    marginBottom : 10
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#2d323b",
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 10
  }
});