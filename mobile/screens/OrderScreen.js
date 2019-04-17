//nothing yet
import React from 'react';
import {DataApi} from '../actions/dataActions';
import { Box, Text } from 'react-native-design-utility';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

class OrderScreen extends React.Component {
  static navigationOptions = {
    title: 'Order',
  };
constructor(props) {
    super(props);

    this.state = {
        name: "",
        location: "",
        description: "Soil",
        price: "10.29",
        quantity: "1"
    };
}
handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { name, location, description } = this.state;
    console.log('submit: ', name, location, description);

    createData(name, location, description, () => this.props.history.push("/dashboard"));
  }
validateForm() {
    return this.state.name.length > 0 && this.state.location.length > 0 && this.state.description.length > 0;
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Box f={1} center>
      <FormLabel controlId="name">Name</FormLabel>
      <FormInput onChangeText={this.handleChange}/>
      <FormValidationMessage>Error message</FormValidationMessage>
      
      <FormLabel controlId="location">Location</FormLabel>
      <FormInput onChangeText={this.handleChange}/>
      <FormValidationMessage>Error message</FormValidationMessage>
      
      <FormLabel controlId="quantity">Quantity</FormLabel>
      <FormInput onChangeText={this.handleChange}/>
      <FormValidationMessage>Error message</FormValidationMessage>
      
      <Button
        title="Order"
        onPress={() => navigate('Home')}
      />
    </Box>
    );
  }
}
