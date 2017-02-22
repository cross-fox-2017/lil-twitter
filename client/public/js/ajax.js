
var app = new Vue({

  // We want to target the div with an id of 'events'
  el: '#houses',
  data: {
    twitt:{
      tweet:'',
      avatar:'',
      username:'',
      tags:'',
      searchs:''
    },
    updated:{
      _id:'',
      tweet:'',
      avatar:'',
      username:'',
      tags:''
    },
    tweets:[]
  },

  // Anything within the ready function will run when the application loads
  mounted: function() {
    this.fetchTweets()
  },

  // Methods we want to use in our application are registered here
  methods: {
    fetchTweets: function() {
      $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/api/tweet',
        success: function(data) {
          console.log(data);
          app.tweets = data

        },
        error: function(error) {
          console.log(error);
        }
      });
    },

  // Adds an event to the existing events array
  addTweet: function() {
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/api/tweet',
      data:{tweet:app.twitt.tweet,
            avatar:"https://i.ytimg.com/vi/g6GGoTxvGzk/maxresdefault.jpg"},
      success: function(data) {
        app.fetchTweets()
        app.house = {
          tweet:'',
          avatar:'',
          username:'',
          tags:''};
      },
      error: function(error) {
        console.log(error);
      }
    });
  },

  deleteTweet: function(id){
    $.ajax({
      type: 'DELETE',
      url: `http://localhost:3000/api/tweet/${id}`,
      success: function(data) {
        app.fetchTweets()
      },
      error: function(error) {
        console.log(error);
      }
    });
  },
  searchTweet: function(){
    $.ajax({
      type: 'GET',
      url: `http://localhost:3000/api/tweet/search?q=${app.twitt.searchs}`,
      success: function(data) {
        console.log(data);
        app.tweets = data
      },
      error: function(error) {
        console.log(error);
      }
    });
  },
  searchTag: function(val){
    $.ajax({
      type: 'GET',
      url: `http://localhost:3000/api/tweet/searchTag?q=${val}`,
      success: function(data) {
        console.log(data);
        app.tweets = data
      },
      error: function(error) {
        console.log(error);
      }
    });
  }
  }
});
