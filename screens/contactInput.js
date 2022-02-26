import {React , useState } from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import { Alert,View, Text, Button, TextInput  } from 'react-native';
import MainScreen from '../screens/mainScreen';

import { styles } from '../styles/styles';

const ContactInputScreen = ({navigation , route}) =>{
    //const [fullString, setFullInput] = useState("");
    const [enteredfirstName, setFirstName] = useState( "");
    const [enteredLastName, setLastName] = useState("" );
    const firstnameInputHandler = (value) => {
        setFirstName(value);
    }
    const lastnameInputHandler = (value) => {
        setLastName(value);
    }

    const [enteredContactInfo, setContactInfo] = useState("" );
    
    const contactInfoInputHandler = (value) => {
        setContactInfo(value);
        
       
    }
    //
    //const [contactList, setContactList] = useState([]);
    
    
   const fullInput = `${enteredfirstName}  ${enteredLastName} - ${enteredContactInfo}`;         
    const addItemHandler = () => {
       
        
       navigation.navigate({
        name: 'MainScreen',
        params: { firstName: enteredfirstName,
                   lastName: enteredLastName,
                   email: enteredContactInfo,
                   fullString: fullInput
                },
                   merge: true,
              });
       
                                                                       
       setFirstName('');
        setLastName('');
        setContactInfo('');
    }

    
    return (
    <View style={styles.form}>
        {/* <View style={styles.mainHeaderContainer}>
            <Text style={styles.mainHeader}>Add Contact</Text>
           
            </View> */}
            <View style={styles.inputContainer}>
                <Text style={styles.inputBody}> First Name</Text>
                <TextInput placeholder="First Name" style={styles.input} onChangeText={firstnameInputHandler} value={enteredfirstName} />
                <Text style={styles.inputBody}> Last Name</Text>
                <TextInput placeholder="Last Name" style={styles.input} onChangeText={lastnameInputHandler} value={enteredLastName} />
                <Text style={styles.inputBody}> Email Address</Text>
                <TextInput placeholder="Email Address" style={styles.input} onChangeText={contactInfoInputHandler} value={enteredContactInfo} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button} ><Button title="Save"  color="purple" onPress={ () => addItemHandler()} /></View>
                </View>
                {/* <MainScreen addItemHandler={contactList}/> */}
            </View>
        </View>
    )
}

export default ContactInputScreen;