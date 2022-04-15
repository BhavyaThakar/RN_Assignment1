import React, {Component} from 'react';
import { View, Text, ActivityIndicator, TextInput, Button, StyleSheet, Alert} from 'react-native';
import { ceil } from 'react-native-reanimated';
import SelectMultiple from 'react-native-select-multiple'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel}  from 'react-native-simple-radio-button';



const gender = [
    {
        label : 'Male',
        value : 'Male',
    },
    {
        label : 'Female',
        value : 'Female',
    },
   
]

const checkItems = [
    'item 1', 'item 2', 
    
]

class Details extends React.Component{
    state = {selectedItems : []}
    onSelectionsChange = (selectedItems) => {
        this.setState({ selectedItems })
    }




    constructor(){
        super();
        this.state = {
            name : '',
            nameEror : '',
            email : '',
            emailError : '',
            password: '',
            pasError: '',
            showLoader : false,
        }
    }
    
    submit() {
        this.setState({showLoader:true})
        setTimeout( () => {
            this.setState({showLoader:false})
            let rjx = /^[a-zA-z]+$/;
            let isValid = rjx.test(this.state.name);
            if(!isValid){
                this.setState({nameEror: "Name field must contain alphabets only"});
            }
            if(this.state.email == ""){
                this.setState({emailError : "Email field can not be empty"});
            }
            if (this.state.password == "") {
                this.setState({pasError : "Password required"});
            }
            else{
                this.setState({nameEror : ""});
                this.setState({emailError : ""});
                this.setState({pasError : ""});

                Alert.alert(
                    "Submitted",
                    "Data submitted successfully",
                    [{text : "OK",
                    onPress: () => console.log("Submitted")
                }]
                )

            }

        } 
            
        , 5000);
        

       
    }


    emailValidator() {
        if(this.state.email == ""){
            this.setState({emailError : " Email can not be empty"});
        }else{
            this.setState({emailError : ""});
        }
    }

    render() {



        return(
            <View style= {{margin: 20}}>

                <TextInput 
                placeholder='Enter Name'
                onChangeText={(text) => {this.setState({name:text})}}
                style={{borderWidth: 1, 
                    borderColor:'skyblue',
                    margin: 10
                }}/>
                <Text>{this.state.nameEror}</Text>
                <TextInput 
                placeholder='Enter Email'
                onBlur={() => this.emailValidator()}
                onChangeText={(text) => {this.setState({email:text})}}
                style={{borderWidth: 1, 
                    borderColor:'skyblue',
                    margin: 10
                }}/>
                <Text>{this.state.emailError}</Text>
                <TextInput 
                placeholder='Enter Password'
                keyboardType='numeric'
                maxLength={6}
                secureTextEntry = {true}
                onChangeText={(text) => {this.setState({password:text})}}
                style={{borderWidth: 1, 
                    borderColor:'skyblue',
                    margin: 10
                }}/>
                <Text>{this.state.pasError}</Text>
                {
                    this.state.showLoader ?
                 <ActivityIndicator style={styles.container}  size = "large" color="skyblue"/> :
                 null
                }


                <RadioForm style = {{margin: 10, borderWidth : 1, padding : 10, borderColor : 'skyblue'}}
                radio_props={gender}
                onPress = {(value) => {}}
                />           

                <SelectMultiple style = {{margin: 10, borderWidth : 1, borderColor : 'skyblue'}}
                items = {checkItems}
                selectedItems={this.state.selectedItems}
                onSelectionsChange = {this.onSelectionsChange}
                />

                <Button 
                title='Submit'
                onPress={() => {this.submit()}}
                />


                
            </View>
        )
    }

}

var styles = StyleSheet.create(
    {
        container : {
            flex:1,
            justifyContent: 'center',

        }
    }
)

export default Details;