import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import Input from './Input';
import Item from './Item';

const unique_ID = () => {
  return Math.random().toString(36).substr(2, 4);
};

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state({
      // enable: true
    });
    this._actionAdd = this._actionAdd.bind(this);
    this._actionDelete = this._actionDelete.bind(this);
  }

  state = {
    datas: [
      {
        ID: 1,
        name: 'Aisah',
        img: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
      },
      {
        ID: 2,
        name: 'Fatimah',
        img: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
      },
      {
        ID: 3,
        name: 'Fauziah',
        img: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
      },
    ],
  };

  _actionAdd(name, img) {
    let ID = unique_ID();
    let datas = this.state.datas;
    this.setState({
      datas: [...datas, {ID, name, img}],
    });
  }

  _actionDelete(ID) {
    let datas = this.state.datas;
    let newDatas = datas.filter((data) => data.ID !== ID);
    this.setState({
      datas: newDatas,
    });
  }

  render() {
    return (
      <View>
        <View style={styles.container}>
          <View style={styles.buttonContainer}>
            <Button title="LIST" />
          </View>
          <View style={styles.buttonContainer}>
            <Button title="EDIT" />
          </View>
          <View style={styles.buttonContainer}>
            <Button title="REGISTER" />
          </View>
        </View>

        <Input actionAdd={this._actionAdd} />
        <Item datas={this.state.datas} actionDelete={this._actionDelete} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    marginLeft: 2,
    marginRight: 2,
  },
});
