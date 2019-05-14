//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,FlatList,BackHandler } from 'react-native';
import { connect } from 'react-redux';

// create a Dashboard component with flatlist: Data taken from redux store
class DashBoard extends Component {

  render() {
    return (
      <View style={styles.container}>
       <FlatList style={{flex:1}}
        data={this.props.employeeList}
      renderItem={({item}) => 
      <View style={styles.flatListEmp}>
      <Text style={styles.flatListText}>Name :{item.name}</Text>
      <Text>Gender: {item.gender}</Text>
      <Text>Email:{item.email}</Text>
      <Text>Age: {item.age}</Text>
      <Text>PhoneNo:{item.phoneNo}</Text>
      </View>
    }
      />
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  flatListEmp:{
    flex:1,
    borderWidth:1,
    borderColor:'#969393',
    margin: 10,
    padding: 10,
    elevation:1,
  
  },
  flatListText:{
    fontWeight:'bold',
    fontSize: 15,
  }
});

//Redux Connect

const mapStateToProps =(state) =>{
  return{
  employeeList :state.response.user,
  }
  }

export default connect(
  mapStateToProps,
)(DashBoard);
