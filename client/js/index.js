var app = new Vue({
  el: '#app',
  data: {
    tweets : [],
    createUser: {
      username: '@raditarya',
      email: 'arya.raditya26@gmail.com',
      password: '*********',
      imageUrl: 'https://avatars3.githubusercontent.com/u/22527338?v=3&u=68b2a3efb0704b1283f441864a1e6c430935c997&s=400'
    },
    createTweet:{
      tweet: '',
    }
  },
  methods: {
    getTweet: function() {
      $.ajax({
        url  : "http://localhost:3000/users",
        type : "GET",
        success: function(response) {
          console.log(response);
          app.tweets = response.data
        }
      })
    }
  }
})
app.getTweet()
