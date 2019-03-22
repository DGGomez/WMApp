//nothing yet
class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Login',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Button
        title="Login"
        onPress={() => navigate('Home')}
      />
    );
  }
}
