import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';

class Pagination extends Component {
  constructor(props) {
    super();
    this.state = {
      isloading: true,
      data: [],
      page: 1,
    };
  }

  componentDidMount() {
    this.fetchFromJSON();
  }

  fetchFromJSON = () => {
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=15&_page=' + this.state.page)
      .then((res) => res.json())
      .then((resJson) => {
        this.setState({
          data: this.state.data.concat(resJson),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  flatlistShow = ({item}) => {
    return (
      <View style={styles.item}>
        <View style={styles.containerRow}>
          <Image source={{uri: item.url}} style={styles.itemImage} />
          <View style={styles.containerText}>
            <Text style={styles.itemText}>{item.id}) {item.title}</Text>
          </View>
        </View>
      </View>
    );
  };

  buttonNextPage(page) {
    return (
      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => {
            this.setState({page: page + 1}, this.fetchFromJSON);
          }}
          style={styles.nextPageButton}>
          <Text style={styles.btnText}>Next Page</Text>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <View>
        <FlatList
          style={styles.container}
          data={this.state.data}
          renderItem={this.flatlistShow}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          ListFooterComponent={this.buttonNextPage(this.state.page)}
        />
      </View>
    );
  }
}

export default Pagination;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: 'white',
  },
  containerRow: {
    flex: 1,
    flexDirection: 'row',
    height: 70,
  },
  containerText: {
    flex: 1,
    flexDirection: 'column',
    height: 70,
  },
  item: {
    marginBottom: 10,
  },
  itemText: {
    marginTop: 5,
    fontSize: 16,
    padding: 5,
  },
  itemImage: {
    width: 50,
    height: 50,
    margin: 5,
    marginTop: 7,
  },
  separator: {
    height: 0.5,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  footer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  nextPageButton: {
    padding: 10,
    backgroundColor: '#800000',
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
});
