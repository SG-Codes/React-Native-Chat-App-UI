import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    separator: {
        height: 1,
        backgroundColor: 'lightgray',
        width: '75%',
        alignSelf: 'flex-end'
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        paddingVertical: 10,
    },
    profileImage: {
        height: 70, 
        width: 70,
        borderRadius: 100,   
        marginVertical: 10,
        marginHorizontal: 20
    },
    userName: {
        fontSize: 22,
        color: '#000'
    },
    userNameSmall: {
        fontSize: 16,
        color: "#000",
        marginVertical: 5,
    },
    subContainer: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        width: 300
    },
    lastMsgTime:{ 
        fontSize: 16
    },
    message: {
        width: 250   
    },
    unreadCount: {
        color: '#fff',
        backgroundColor: 'gray',
        paddingHorizontal: 7, 
        paddingVertical: 2,
        borderRadius: 100
    },
    newUser:{ 
        color: "blue",
        fontSize: 19,
        marginTop: 10
    }
})

export default Styles;