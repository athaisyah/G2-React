import React, {Component} from 'react';
import {StyleSheet, SafeAreaView, FlatList} from 'react-native';
import ListItem, {Separator} from './ListItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default class GestureHandler extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={quotes}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
            <ListItem
              {...item}
              onSwipeFromLeft={() => alert('swipped from left!')}
              onRightPress={() => alert('pressed right!')}
            />
          )}
          ItemSeparatorComponent={() => <Separator />}
        />
      </SafeAreaView>
    );
  }
}

const quotes = [
  {id: '0', text: 'Do good and good will come to you'},
  {id: '1', text: 'Keep doing, youre more than good!'},
];
