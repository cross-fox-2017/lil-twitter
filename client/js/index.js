var app = new Vue({
  el: '#app',
  data: {
    message: 'Welcome to TweetPedia',
    createUser: {
      username: '',
      email: '',
      password: '',
      imageUrl: '',
      tweetID: []
    },
    createTweet:{
      tweet: '',
    }
  },
  methods: {
    createUser: function () {
      axios.post('http://localhost:3000/user/add', {
        dataUser: app.createUser,
      })
        .then(function (result) {
          app.createUser.username = ''
          app.createUser.email = ''
          app.createUser.password = ''
          app.createUser.imageUrl = ''
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    createTweet: function() {
      axios.post('http://localhost:3000/tweet/add', {
        dataUser: app.createTweet,
      })
        .then(function (result) {
          app.createTweet.tweet = ''
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
})
