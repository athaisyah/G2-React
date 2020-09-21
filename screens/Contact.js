import React, {Component} from 'react';
import {View, Text, Image, FlatList, StyleSheet} from 'react-native';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoading: false,
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    let apiURL = 'https://jsonplaceholder.typicode.com/users';
    this.setState({isLoading: true});
    fetch(apiURL)
      .then((res) => res.json())
      .then((res) => {
        this.setState({items: res});
      })
      .finally(() => this.setState({isLoading: false}));
  };

  renderRow = ({item}) => {
    return (
      <View style={styles.feedItem}>
        {/* <Image source={} style={styles.avatar} /> */}
        <View style={{flex: 1}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.timestamp}>{item.phone}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        {/* <View style={styles.header}> */}
        {/* <Text style={styles.headerTitle}>Feed</Text> */}
        {/* </View> */}

        <FlatList
          style={styles.feed}
          data={this.state.items}
          renderItem={this.renderRow}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efecf4',
  },
  header: {
    paddingTop: 64,
    paddingBottom: 16,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ebecf4',
    shadowColor: '#454d65',
    shadowOffset: {height: 5},
    shadowRadius: 15,
    shadowOpacity: 0.2,
    zIndex: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  feed: {
    marginHorizontal: 16,
  },
  feedItem: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 8,
    flexDirection: 'row',
    marginVertical: 8,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 16,
  },
  name: {
    fontSize: 15,
    fontWeight: '500',
    color: '#454d65',
  },
  timestamp: {
    fontSize: 12,
    color: '#c4c6ce',
    marginTop: 4,
  },
});

export default Home;
