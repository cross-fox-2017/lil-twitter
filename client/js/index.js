var app = new Vue({
  el: '#app',
  data: {
    message: 'Welcome to TweetPedia',
    allTweet: [],
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
    getAllTweet: function() {
      axios.get('http://localhost:3000/tweet/getAll').then(function(result) {
        app.allTweet = result.data
      }).catch(function(err) {
          console.log(err);
      })
    },
    getTagTweet: function() {
      axios.get('http://localhost:3000/tweet/find').then(function(result) {
        app.allTweet = result
      }).catch(function(err) {
          console.log(err);
      })
    },
    runcreateUser: function () {
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
    runcreateTweet: function() {
      axios.post('http://localhost:3000/tweet/add', {
        dataTweet: app.createTweet.tweet
      })
        .then(function (result) {
          app.allTweet.push(result)
          app.createTweet.tweet = ''
        })
        .catch(function (error) {
          console.log(error)
        })
    }

  }
})

app.getAllTweet()
