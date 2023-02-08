import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  headerContainer: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 23,
    fontWeight: '600',
  },
  headerIcon: {
    marginHorizontal: 10,
    opacity: 0.6,
  },
});
