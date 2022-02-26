import React from 'react';
import { View, Platform } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
// May need to run npm install --save this dependency... try building first!
import { Ionicons } from '@expo/vector-icons';

const PlusHeaderButton = props  => {
    return <HeaderButton {...props} IconComponent={Ionicons} color= 'white'  />
}

export default PlusHeaderButton;




