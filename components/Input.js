import React, {Component} from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';

export default class Input extends Component {
  state = {
    name: '',
    img: '',
  };

  _addItem() {
    this.setState({name: ''});
    this.setState({img: ''});
    this.props.actionAdd(this.state.name, this.state.img);
  }

  render() {
    return (
      <View style={styles.InputContainer}>
        <TextInput
          style={styles.InputBox}
          placeholder="Name write here..."
          onChangeText={(name) => this.setState({name: name})}
          value={this.state.name}
        />
        <TextInput
          style={styles.InputBox}
          placeholder="Img Url write here..."
          onChangeText={(img) => this.setState({img: img})}
          value={this.state.img}
        />

        <Button title="ADD PROFILE" onPress={() => this._addItem()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  InputContainer: {
    marginBottom: 30,
    marginTop: 50,
  },
  InputBox: {
    padding: 15,
    backgroundColor: '#F1F1F1',
  },
});
