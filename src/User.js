import React from 'react';
import {Text, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Styles from './Styels';

export default function User({item}) {
  return (
    <View style={Styles.container}>
      <View>
        <Image source={item.image} style={Styles.profileImage} />
      </View>
      <View>
        {item.isGroup ? (
          <View>
            <View style={Styles.subContainer}>
              <Text style={Styles.userName}>
                {item.groupName}{' '}
                {item.isMuted ? <Icon name="volume-mute" size={16} /> : null}
              </Text>
              <Text style={Styles.lastMsgTime}>{item.lastMessageTime}</Text>
            </View>
            <View>
              {item.userJoined ? (
                <View>
                  <Text style={Styles.newUser}>
                    {item.newUserName} joined the group
                  </Text>
                </View>
              ) : (
                <View>
                    <View>
                        <Text style={Styles.userNameSmall}>{item.userName}</Text>
                    </View>
                  <View style={Styles.subContainer}>
                    <Text
                      style={Styles.message}
                      numberOfLines={2}
                      ellipsizeMode="tail">
                      {item.lastMessage}
                    </Text>
                    {item.unreadMessageCount > 0 ? (
                      <Text style={Styles.unreadCount}>
                        {item.unreadMessageCount}
                      </Text>
                    ) : null}
                  </View>
                </View>
              )}
            </View>
          </View>
        ) : (
          <View>
            <View style={Styles.subContainer}>
              <Text style={Styles.userName}>
                {item.userName}{' '}
                {item.isMuted ? <Icon name="volume-mute" size={16} /> : null}
              </Text>
              <Text style={Styles.lastMsgTime}>{item.lastMessageTime}</Text>
            </View>
            <View style={Styles.subContainer}>
              <Text
                style={Styles.message}
                numberOfLines={2}
                ellipsizeMode="tail">
                {item.lastMessage}
              </Text>
              {item.unreadMessageCount > 0 ? (
                <Text style={Styles.unreadCount}>
                  {item.unreadMessageCount}
                </Text>
              ) : null}
            </View>
          </View>
        )}
      </View>
    </View>
  );
}
