/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },
  list: {
    flex: 1,
  },
  movieItem: {
    margin: 10,
    alignItems: 'center',
  },
  movieTitle: {
    marginTop: 5,
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
  },
  movieImage: {
    width: 300,
    height: 400,
  },
  loadingArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginLeft: 10,
    color: '#fff',
  },
});
