//import liraries
import { React, Component} from 'react';
import { View, Text, TextInput,Alert, StyleSheet,Dimensions,TouchableOpacity,ScrollView, Image,ToastAndroid,Keyboard} from 'react-native';
import { GlobalStyles } from '../global/globalStyles';
import { connect } from 'react-redux';



const deviceHeight = Dimensions.get('window').height;

// create a Login component
class LoginScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }


  onLogin=()=> {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    if(this.state.username == "" ){
      ToastAndroid.show('Please Enter Username ', ToastAndroid.SHORT);
    }
   else  if( this.state.password == "" ){
      ToastAndroid.show('Please Enter Password ', ToastAndroid.SHORT);
    }
   else  if(reg.test(this.state.username) === false)
    {
      ToastAndroid.show('Please Enter Valid Email Format ', ToastAndroid.SHORT);
    }
    else if(this.state.username == this.props.email && this.state.password == this.props.password){
      this.props.navigation.navigate("DashBoard");
    }else{
      Keyboard.dismiss();
      ToastAndroid.show('Please Enter The Correct Credentials', ToastAndroid.SHORT);
    }
  }

  render() {
    return (
      <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">
        <View style={[styles.containerSub, { height: deviceHeight }]}>
          <View style={styles.loginContainer}>
            <Image source={require('../images/logo.png')} style={styles.logo}/>
          </View>
          <View style={styles.formContainer}>
          <View style={{ flex: 2 }}>
          <View style={styles.email}>
          <Image source={require('../images/message.png')} style={styles.msgIcon} />
          <TextInput
              style={[GlobalStyles.font_14, styles.input, GlobalStyles.margin_Left10]}
              placeholder="Username"
              placeholderTextColor="#2a2a2a"
              keyboardType="email-address"
              autoCapitalize='none'
              returnKeyType="next"
              ref="email"
              onSubmitEditing={() => this.refs.password.focus()}
              onChangeText={(user) => { this.setState({ username:user });}}                                  
              value={this.state.username}
            />
        </View>
        <View style={styles.email}>
          <Image source={require('../images/locked.png')} style={styles.lockIcon} />
          <TextInput
              style={[GlobalStyles.font_14, styles.input, GlobalStyles.margin_Left10]}
              placeholder="Password"
              placeholderTextColor="#2a2a2a"
              autoCapitalize='none'
              secureTextEntry={true}
              returnKeyType="next"
              ref="password"
              onChangeText={(password) => { this.setState({ password: password});}}                                  
              value={this.state.password}
            />
        </View>
        <View>
        <TouchableOpacity style={styles.buttonContainer} onPress={() => {this.onLogin()}} > 
             <Text  style={styles.loginBtn}>Login</Text>
        </TouchableOpacity> 
        </View>
        </View>
        </View>
      </View>
      </ScrollView>
    );
  }
}

// define your styles for login page
const styles = StyleSheet.create({
  container: {
    flex: 1,
},
containerSub: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
},
  loginContainer: {
    alignItems: 'center',
    flexGrow: 1,
    flexDirection: 'column'
  },
  logo: {
    marginTop: 150,
    width:100,
    height:100
  },
  formContainer: {
    flex: 6,
    alignSelf: 'stretch',
    marginTop:-15
  },
  email: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#d7cece',
    height: 46,
    borderBottomWidth: 1,
    margin: 20,
    marginBottom: 10,
    paddingBottom: 0,
    marginLeft: 40,
    marginRight: 40
},
input: {
  flex: 1,
  marginRight: 20,
  backgroundColor: '#fff',
  color: '#2a2a2a',
},
msgIcon:{
margin:5,
marginTop:3,
height:15,
width:20
},
lockIcon:{
margin:5,
marginTop:3,
height:20,
width:20
},
buttonContainer:{
margin:20,
backgroundColor:'#ff9800',
marginLeft: 40,
marginRight: 40,
height:47,
justifyContent:'center',
borderColor:'#b2b2b2',
borderRadius: 2,
shadowOffset: {height:4,width:0},
shadowColor: 'rgba(0, 0, 0, .2)',
shadowRadius: 1,
shadowOpacity: 1,
},
loginBtn:{
  color: '#fff',
  textAlign: 'center',
  fontSize: 15,
  fontWeight: 'normal',
}
});

//Redux Connect

const mapStateToProps =(state) =>{
  return{
  email :state.response.username,
  password:state.response.password
  }
  }

export default connect(
  mapStateToProps,
)(LoginScreen);
