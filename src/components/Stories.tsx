import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import React from 'react';
import Icons from '../assets/Icons';

const Stories: React.FC = () => {
    const cards = [
        {
            image: "https://images.pexels.com/photos/3533228/pexels-photo-3533228.png?auto=compress&cs=tinysrgb&w=600",
            name: "Emma Jones"
        },
        {
            image: "https://images.pexels.com/photos/5611966/pexels-photo-5611966.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "Noah Miller"
        },
        {
            image: "https://images.pexels.com/photos/5199158/pexels-photo-5199158.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "Olivia Garcia"
        },
        {
            image: "https://images.pexels.com/photos/4505269/pexels-photo-4505269.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "William Brown"
        },
        {
            image: "https://images.pexels.com/photos/5473962/pexels-photo-5473962.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "Sophia Hernandez"
        },
        {
            image: "https://images.pexels.com/photos/26997896/pexels-photo-26997896/free-photo-of-woman-in-t-shirt-and-skirt-walking-by-field-in-countryside.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            name: "Mia Lopez"
        },
        {
            image: "https://images.pexels.com/photos/17696222/pexels-photo-17696222/free-photo-of-man-with-backpack-walking-down-stairs-by-wall.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            name: "Lucas Robinson"
        }
    ];
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Stories</Text>
            <ScrollView style={styles.storiesPart} horizontal={true} showsVerticalScrollIndicator={false}>
                <View style={styles.particularStory}>
                    <Icons name='plus' color='#F89D7C' size={50} />
                    <Text style={{ marginTop: 8, fontWeight: 'bold', color : 'black' }}>Add Story</Text>
                </View>

                {cards.map((ele, index) => (
                    <View key={index} style={styles.peopleStory}>
                        <View style={styles.imageBorder}>
                            <Image style={styles.storyImage} source={{ uri: ele.image }} />
                        </View>
                        <Text style={styles.textTruncate} numberOfLines={1} ellipsizeMode='tail'>
                            {ele.name}
                        </Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 15,
        paddingHorizontal : 15,
    },
    title: {
        fontSize: 25,
        color : 'black',
        fontWeight: 'bold'
    },
    storiesPart: {
        marginTop: 10,
        padding: 10
    },
    particularStory: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    peopleStory: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 8,
    },
    imageBorder: {
        height: 60,
        width: 60,
        borderRadius: 60 / 2,
        borderWidth: 2,
        borderColor: '#F89D7C',
        borderStyle: 'dotted',
        justifyContent: 'center',
        alignItems: 'center'
    },
    storyImage: {
        height: 52,
        width: 52,
        borderRadius: 52 / 2
    },
    textTruncate: {
        marginVertical: 5,
        fontWeight: 'bold',
        color : 'black',
        width: 70,
    },
});

export default Stories;
