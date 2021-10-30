import React from 'react';
import {FlatList, View} from 'react-native';
import Data from './Data';
import Styles from './Styels';
import User from './User';

export default function Home() {
  return (
    <FlatList
      data={Data}
      keyExtractor={item => item.id}
      renderItem={User}
      ItemSeparatorComponent={() => <View style={Styles.separator} />}
    />
  );
}
