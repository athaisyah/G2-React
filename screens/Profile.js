const {View, Button} = require('react-native');
import Woman from '../assets/woman.png';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{marginTop: 64, alignItems: 'center'}}>
          <View style={styles.avatarContainer}>
            <Image style={styles.avatar} source={{uri: {Woman}}} />
          </View>
          <Text style={styles.name}>Aisah Taufik</Text>
        </View>
        <View style={styles.statsContainer}>
          <View style={styles.state}>
            <Text style={styles.statAmount}>21</Text>
            <Text style={styles.statTitle}>Posts</Text>
          </View>

          <View style={styles.state}>
            <Text style={styles.statAmount}>541</Text>
            <Text style={styles.statTitle}>Followers</Text>
          </View>

          <View style={styles.state}>
            <Text style={styles.statAmount}>645</Text>
            <Text style={styles.statTitle}>Following</Text>
          </View>
        </View>
        <Button title="Log out" />
      </View>
    );
  }
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatarContainer: {
    shadowColor: '#151734',
    shadowRadius: 15,
    shadowOpacity: 0.4,
  },
  avatar: {
    width: 136,
    height: 136,
    borderRadius: 68,
  },
  name: {
    marginTop: 24,
    fontSize: 16,
    fontWeight: '600',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 12,
  },
  stat: {
    alignItems: 'center',
    flex: 1,
  },
  statAmount: {
    color: '#4f566d',
    fontSize: 18,
    fontWeight: '300',
  },
  statTitle: {
    color: '#c3c5cd',
    fontSize: 12,
    fontWeight: '500',
    marginTop: 4,
  },
});
