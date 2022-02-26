import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ContactsList = props => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={props.onSendEmail.bind(this, props.id)}>
            <View style={styles.listItem} >
                <Text style= {styles.fotxt}>{props.item}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: 'pink',
        borderColor: 'pink',
        borderWidth: 1,
        
    },
    fotxt :{ color : 'purple'}
})

export default ContactsList;