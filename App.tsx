import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Image, Text, View} from 'react-native';
import {styles} from './src/styles/common';

interface Movie {
  avatar: string;
  titulo: string;
}

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    async function request() {
      const req = await fetch('https://api.b7web.com.br/cinema/');
      const json = await req.json();

      setLoading(false);

      if (json) {
        setMovies(json);
      }
    }

    request();
  });

  return (
    <View style={styles.container}>
      {!loading ? (
        <FlatList
          style={styles.list}
          data={movies}
          renderItem={({item}) => (
            <View style={styles.movieItem}>
              <Image
                source={{uri: item.avatar}}
                style={styles.movieImage}
                resizeMode="contain"
              />
              <Text style={styles.movieTitle}>{item.titulo}</Text>
            </View>
          )}
          keyExtractor={item => item.titulo}
        />
      ) : (
        <View style={styles.loadingArea}>
          <ActivityIndicator size="small" />
          <Text style={styles.loadingText}>Carregando...</Text>
        </View>
      )}
    </View>
  );
}

export default App;
