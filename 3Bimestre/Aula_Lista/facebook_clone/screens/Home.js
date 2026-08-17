import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

import styles from '../styles/styles';

const posts = [
  {
    id: '1',
    nome: 'João Silva',
    tempo: '2 h',
    avatar: 'https://i.pravatar.cc/150?img=12',
    texto: 'Hoje foi um dia muito bom! 😎',
    imagem: 'https://picsum.photos/600/400?random=1',
    curtidas: 125,
    comentarios: 18,
  },
  {
    id: '2',
    nome: 'Maria Oliveira',
    tempo: '4 h',
    avatar: 'https://i.pravatar.cc/150?img=47',
    texto: 'Que lugar incrível! ❤️',
    imagem: 'https://picsum.photos/600/400?random=2',
    curtidas: 238,
    comentarios: 31,
  },
];

const stories = [
  {
    id: '1',
    nome: 'Seu story',
    imagem: 'https://i.pravatar.cc/150?img=3',
  },
  {
    id: '2',
    nome: 'João',
    imagem: 'https://i.pravatar.cc/150?img=12',
  },
  {
    id: '3',
    nome: 'Maria',
    imagem: 'https://i.pravatar.cc/150?img=47',
  },
  {
    id: '4',
    nome: 'Ana',
    imagem: 'https://i.pravatar.cc/150?img=32',
  },
  {
    id: '5',
    nome: 'Carlos',
    imagem: 'https://i.pravatar.cc/150?img=51',
  },
];

export default function Home() {
  return (
    <View style={styles.container}>

      {/* CABEÇALHO */}
      <View style={styles.header}>
        <Text style={styles.logo}>facebook</Text>

        <View style={styles.headerButtons}>
          <TouchableOpacity style={styles.headerButton}>
            <Text style={styles.headerIcon}>🔍</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.headerButton}>
            <Text style={styles.headerIcon}>💬</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>

        {/* CRIAR PUBLICAÇÃO */}
        <View style={styles.createPost}>
          <Image
            source={{
              uri: 'https://i.pravatar.cc/150?img=3',
            }}
            style={styles.profileImage}
          />

          <TouchableOpacity style={styles.postInput}>
            <Text style={styles.inputText}>
              No que você está pensando?
            </Text>
          </TouchableOpacity>
        </View>

        {/* BOTÕES DA PUBLICAÇÃO */}
        <View style={styles.postOptions}>

          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionIcon}>🎥</Text>
            <Text style={styles.optionText}>Vídeo ao vivo</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionIcon}>🖼️</Text>
            <Text style={styles.optionText}>Foto/vídeo</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionIcon}>😊</Text>
            <Text style={styles.optionText}>Sentimento</Text>
          </TouchableOpacity>

        </View>

        {/* STORIES */}
        <View style={styles.storiesContainer}>

          <Text style={styles.sectionTitle}>Stories</Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
          >

            {stories.map((story) => (
              <TouchableOpacity
                key={story.id}
                style={styles.story}
              >

                <Image
                  source={{ uri: story.imagem }}
                  style={styles.storyImage}
                />

                <Text style={styles.storyName}>
                  {story.nome}
                </Text>

              </TouchableOpacity>
            ))}

          </ScrollView>

        </View>

        {/* PUBLICAÇÕES */}
        {posts.map((post) => (
          <View style={styles.post} key={post.id}>

            {/* USUÁRIO */}
            <View style={styles.postHeader}>

              <Image
                source={{ uri: post.avatar }}
                style={styles.avatar}
              />

              <View style={styles.userInfo}>
                <Text style={styles.userName}>
                  {post.nome}
                </Text>

                <Text style={styles.postTime}>
                  {post.tempo} · 🌎
                </Text>
              </View>

              <Text style={styles.more}>•••</Text>

            </View>

            {/* TEXTO */}
            <Text style={styles.postText}>
              {post.texto}
            </Text>

            {/* IMAGEM */}
            <Image
              source={{ uri: post.imagem }}
              style={styles.postImage}
            />

            {/* CURTIDAS */}
            <View style={styles.reactions}>

              <Text style={styles.reactionText}>
                👍 ❤️ {post.curtidas}
              </Text>

              <Text style={styles.reactionText}>
                {post.comentarios} comentários
              </Text>

            </View>

            {/* BOTÕES */}
            <View style={styles.actions}>

              <TouchableOpacity style={styles.actionButton}>
                <Text style={styles.actionIcon}>👍</Text>
                <Text style={styles.actionText}>Curtir</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.actionButton}>
                <Text style={styles.actionIcon}>💬</Text>
                <Text style={styles.actionText}>Comentar</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.actionButton}>
                <Text style={styles.actionIcon}>↗️</Text>
                <Text style={styles.actionText}>Compartilhar</Text>
              </TouchableOpacity>

            </View>

          </View>
        ))}

      </ScrollView>

      {/* MENU INFERIOR */}
      <View style={styles.bottomMenu}>

        <TouchableOpacity>
          <Text style={styles.bottomIcon}>🏠</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.bottomIcon}>👥</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.bottomIcon}>🔔</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.bottomIcon}>☰</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}