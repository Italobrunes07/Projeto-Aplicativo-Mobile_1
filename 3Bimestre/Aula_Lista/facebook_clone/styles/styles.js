import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
  },

  header: {
    height: 65,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },

  logo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1877f2',
  },

  headerButtons: {
    flexDirection: 'row',
    gap: 10,
  },

  headerButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f0f2f5',
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerIcon: {
    fontSize: 19,
  },

  createPost: {
    backgroundColor: '#fff',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },

  profileImage: {
    width: 42,
    height: 42,
    borderRadius: 21,
  },

  postInput: {
    flex: 1,
    marginLeft: 10,
    height: 42,
    borderRadius: 22,
    backgroundColor: '#f0f2f5',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },

  inputText: {
    color: '#65676b',
    fontSize: 15,
  },

  postOptions: {
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
  },

  option: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  optionIcon: {
    fontSize: 18,
    marginRight: 5,
  },

  optionText: {
    fontSize: 12,
    color: '#444',
  },

  storiesContainer: {
    backgroundColor: '#fff',
    marginTop: 8,
    paddingVertical: 12,
    paddingLeft: 15,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  story: {
    width: 95,
    marginRight: 10,
  },

  storyImage: {
    width: 95,
    height: 140,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#1877f2',
  },

  storyName: {
    marginTop: 5,
    fontSize: 12,
    fontWeight: '500',
  },

  post: {
    backgroundColor: '#fff',
    marginTop: 8,
    paddingTop: 12,
  },

  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },

  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
  },

  userInfo: {
    marginLeft: 10,
    flex: 1,
  },

  userName: {
    fontSize: 15,
    fontWeight: 'bold',
  },

  postTime: {
    fontSize: 12,
    color: '#65676b',
    marginTop: 2,
  },

  more: {
    fontSize: 20,
    color: '#65676b',
  },

  postText: {
    fontSize: 15,
    padding: 15,
  },

  postImage: {
    width: '100%',
    height: 280,
    resizeMode: 'cover',
  },

  reactions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },

  reactionText: {
    color: '#65676b',
    fontSize: 13,
  },

  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 8,
  },

  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },

  actionIcon: {
    fontSize: 18,
    marginRight: 5,
  },

  actionText: {
    color: '#65676b',
    fontWeight: '500',
  },

  bottomMenu: {
    height: 60,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  bottomIcon: {
    fontSize: 23,
  },

});