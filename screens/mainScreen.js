import React, { useState } from 'react';
import {useNavigation , useRoute} from '@react-navigation/native';
import { Alert,View, Text, Button , FlatList} from 'react-native';
import ContactListItem from '../screens/ContactsList';
import * as MailComposer from 'expo-mail-composer';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import PlusHeaderButton  from '../screens/PlusHeaderButton';
import Icon from 'react-native-vector-icons/Ionicons';
//import ContactInputScreen from '../screens/contactInput';

import { styles } from '../styles/styles';


const MainScreen = ({navigation , route}) => {
    const [contactList, setContactList] = useState([]);
      [resultStatus, setResultStatus] = useState("");
    React.useEffect(() => {
        if (route.params?.fullString && route.params?.firstName && route.params?.lastName ) {
            
            setContactList(contactList => [...contactList, {key: Math.random().toString(), value:{ fName: route.params?.firstName,
                lName: route.params?.lastName,
                email : route.params?.email,
                fullInput: route.params?.fullString,
              } } ]);
          // Post updated, do something with `route.params.post`
          // For example, send the post to the server
        }
      }, [route.params?.fullString , route.params?.firstName, route.params?.lastName] 
       );

      [reciepient, setReciepient] = useState([]);
       [message, setMessage] = useState("");

       React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <View  >
                    <HeaderButtons HeaderButtonComponent={PlusHeaderButton}>
                        <Item
                            title="Add"
                            iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
                            iconSize={50}
                            onPress={() => navigation.navigate('ContactInputScreen')}
                        />
                    </HeaderButtons>
                </View >
            ),
        });
    }, []);




        ReleaseAlert = () => {
        Alert.alert(
          'Email Alert!',
          `The Email is ${resultStatus}`,
          [
            {
                text: 'Close'
            }
          ],
          {cancelable: false},
        );
      }




         SendEmail = async (itemId) => {  
          //message = ` Dear  ${contactList[0].fName}  ${contactList[0].lName}`;
          //setReciepient(`${contactList[0].email}`);
        for(let index = 0 ; index < contactList.length; index++){
            if(itemId === contactList[index].key){
                message = ` Dear  ${contactList[index].value.fName}  ${contactList[index].value.lName}` ;  
                reciepient =[...reciepient, `${contactList[index].value.email}`]; 
           }  //if
        }//for
            //setMessage(message);
        const isAvailable = await MailComposer.isAvailableAsync();
    
        if(isAvailable) {
          var options = {
            // recipients (array) -- An array of e-mail addressess of the recipients.
            recipients: reciepient,
            // ccRecipients (array) -- An array of e-mail addressess of the CC recipients.
            // bccRecipients (array) -- An array of e-mail addressess of the BCC recipients.
            // subject (string) -- Subject of the mail.
            subject: 'MailComposer',
            // body (string) -- Body of the mail.
            body: message
            // isHtml (boolean) -- Whether the body contains HTML tags so it could be formatted properly. Not working perfectly on Android.
            // attachments (array) -- An array of app's internal file uris to attach.
            }//options


       console.log('sending email!!!');
       try{
        MailComposer.composeAsync(options).then((result) => { setResultStatus(result.status); })
        .then((result) => {  console.log(resultStatus);
                              ReleaseAlert(); })

                              .catch((error) =>{console.log(error);})
                            }
                            catch(err)
                            {console.log(err);}
           
         
       
       }//if
        else {
          console.log("Email is not available on this device");
        }//else

        
    }//function
    return (
     <View style={styles.form}>
        <View style={styles.mainHeaderContainer}>
        
         {/* <Text style={styles.plusIconContainer}>  
        <Icon name="ios-add" size={50} color= "pink"  onPress={()=>(navigation.navigate('ContactInputScreen') )}   />
        
        </Text> */}
            <Text style={styles.mainHeader}>Midterm</Text>
            <Text style={styles.subHeader}>h_hammad</Text>
            {/* <Text style={styles.subHeader}>name: {route.params?.lastName}</Text>  */}
            </View>
        
            {/* <ContactInputScreen visible={isAddMode}  onAddItem={addContactItemHandler} /> */}
         
        <View style={styles.flatListContainer}>
            <FlatList
             data={contactList}
             renderItem={
             itemData => (
            <ContactListItem 
              id={itemData.item.key}
              onSendEmail= {SendEmail}
              item={itemData.item.value.fullInput}
            />
            )
           }
             />
        </View>
       {/* <View>
       <Button style={styles.button} title="Add Contact"  color="purple"  onPress={()=>(navigation.navigate('ContactInputScreen') )} />
       </View> */}
            
    </View>
    );
}

export default MainScreen;