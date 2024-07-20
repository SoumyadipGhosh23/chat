import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import React from 'react';

const Chat = () => {
    const cards = [
        {
            image: "../assets/images/laddu.png",
            name: "Laddu 🐘💖",
            message: "Love you dudu 🥺💖",
            time: "9:50 PM",
            unseenMessages: 3
        },
        {
            image: "https://images.pexels.com/photos/5611966/pexels-photo-5611966.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "Noah Miller",
            message: "Are you coming to the party?",
            time: "Yesterday",
            unseenMessages: 1
        },
        {
            image: "https://images.pexels.com/photos/5199158/pexels-photo-5199158.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "Olivia Garcia",
            message: "Let's catch up soon! Why were you yestery buddy!",
            time: "Friday",
            unseenMessages: 0
        },
        {
            image: "https://images.pexels.com/photos/4505269/pexels-photo-4505269.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "William Brown",
            message: "I'll send the documents.",
            time: "8:15 AM",
            unseenMessages: 2
        },
        {
            image: "https://images.pexels.com/photos/5473962/pexels-photo-5473962.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "Sophia Hernandez",
            message: "Thank you!",
            time: "Monday",
            unseenMessages: 5
        },
        {
            image: "https://images.pexels.com/photos/26997896/pexels-photo-26997896/free-photo-of-woman-in-t-shirt-and-skirt-walking-by-field-in-countryside.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            name: "Mia Lopez",
            message: "See you soon.",
            time: "10:30 AM",
            unseenMessages: 4
        },
        {
            image: "https://images.pexels.com/photos/17696222/pexels-photo-17696222/free-photo-of-man-with-backpack-walking-down-stairs-by-wall.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            name: "Lucas Robinson",
            message: "Got it, thanks!",
            time: "Thursday",
            unseenMessages: 0
        }
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Chat</Text>
            <View style={styles.section}>
                <View style={[styles.subSection, { backgroundColor: "#ffffff", }]}><Text style={{ fontSize: 15 }}>Private</Text></View>
                <View style={styles.subSection}><Text style={{ fontSize: 15 }}>Group</Text></View>
            </View>

            <ScrollView>
                {cards.map((ele, index) => (
                    <View key={index} style={styles.chatList}>
                        {index == 0 ? <Image
                            style={styles.profilePicture}
                            source={require('../assets/images/laddu.png')}
                        /> : <Image
                            style={styles.profilePicture}
                            source={{ uri: ele.image }}
                        />}

                        <View style={styles.textContainer}>
                            <Text style={styles.name}>{ele.name}</Text>
                            <Text style={styles.message} numberOfLines={1} ellipsizeMode='tail'>{ele.message}</Text>
                        </View>
                        <View style={styles.timeContainer}>
                            <Text style={styles.time}>{ele.time}</Text>
                            {ele.unseenMessages > 0 && (
                                <View style={styles.unseenMessagesContainer}>
                                    <Text style={styles.unseenMessages}>{ele.unseenMessages}</Text>
                                </View>
                            )}
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    section: {
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: "#F2F4F8",
        borderRadius: 50,
        padding: 10,
    },
    subSection: {
        marginHorizontal: 5,
        paddingHorizontal: 60,
        paddingVertical: 10,
        borderRadius: 50,
    },
    chatList: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    profilePicture: {
        height: 50,
        width: 50,
        borderRadius: 25,
    },
    textContainer: {
        flex: 1,
        marginLeft: 10,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    message: {
        fontSize: 14,
        color: '#555',
        width: 200
    },
    timeContainer: {
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    time: {
        fontSize: 12,
        color: '#888',
    },
    unseenMessagesContainer: {
        backgroundColor: 'red',
        borderRadius: 20,
        paddingHorizontal: 7,
        paddingVertical: 3,
        marginTop: 5,
    },
    unseenMessages: {
        color: 'white',
        fontSize: 12,
    },
});

export default Chat;
