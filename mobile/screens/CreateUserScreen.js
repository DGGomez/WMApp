//nothing yet
class CreateUserScreen extends React.Component {
  static navigationOptions = {
    title: 'Create',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Button
        title="Submit"
        onPress={() => navigate('Home')}
      />
    );
  }
}
