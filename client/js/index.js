var app = new Vue({
      el: '#root',
      data: {
        tweets : [],
        username: '',
        twitt: '',
        image: '',
        search: ''
      },
      methods: {
        loadTwitt: function() {
          $.ajax({
            url: "http://localhost:3000/api/twitt",
            type: "GET",
            success:function (data) {
              app.tweets = data;
            },
          })
        },
        addTwitt: function () {
          $.ajax({
            url: "http://localhost:3000/api/twitt",
            type: "POST",
            data: {
              username: app.username,
              twitt: app.twitt,
              image: app.image
            },
            success:function (data) {
              app.tweets.push(data)
              app.resetButton()
            },
          })
        },
      deleteTwitt: function(id) {
        $.ajax({
          url: `http://localhost:3000/api/twitt/${id}`,
          type: 'DELETE',
          success: function(data) {
            app.loadTwitt()
          }
        })
      },
      resetButton: function() {
        app.username = ''
        app.twitt = ''
        app.image = ''
      },
      searchTweet: function(){
        $.ajax({
          url: "http://localhost:3000/api/twitt/search?q="+app.search,
          type: "GET",
          success:function (data) {
            app.tweets = data;
          },
        })
      }
      }
    })
    app.loadTwitt();
