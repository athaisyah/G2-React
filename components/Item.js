import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, Image} from 'react-native';

const DataItem = (props) => (
  <View style={styles.conatinerItem}>
    <View>
      <Image style={styles.imageItem} source={{uri: `${props.img}`}} />
    </View>
    <Text style={{flex: 2}}>{props.name}</Text>
    <Button title="Delete" onPress={() => props.actionDelete(props.ID)} />
  </View>
);

export default class Item extends Component {
  state = {};
  render() {
    let datas = this.props.datas;
    return (
      <View style={styles.Container}>
        {datas.map((data) => (
          <DataItem
            key={data.ID}
            name={data.name}
            img={data.img}
            actionDelete={this.props.actionDelete}
            ID={data.ID}
            done={data.done}
          />
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  conatinerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#F1F1F1',
    padding: 15,
  },
  imageItem: {
    width: 35,
    height: 35,
    flex: 1,
    marginRight: 5,
    borderRadius: 100 / 2,
  },
});
