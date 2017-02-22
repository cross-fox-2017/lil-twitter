var app = new Vue({
    el: '#app',
    data: {
        message: 'Welcome to TweetPedia',
        allTweet: [],
        search: '',
        createUser: {
            username: '',
            email: '',
            password: '',
            imageUrl: '',
            tweetID: []
        },
        createTweet: {
            tweet: '',
        }
    },
    methods: {
        getAllTweet: function() {
            axios.get('http://localhost:3000/tweet/getAll').then(function(result) {
                app.allTweet = result.data.reverse()
            }).catch(function(err) {
                console.log(err);
            })
        },
        getTagTweet: function() {
          arrTagTweet = app.allTweet
          app.allTweet = [];
          for (var i = 0; i < arrTagTweet.length; i++) {
            if(arrTagTweet[i].tag==app.search){
              app.allTweet.push(arrTagTweet[i])
            }
          }
            // axios.get('http://localhost:3000/tweet/find').then(function(result) {
            //     app.allTweet = result
            // }).catch(function(err) {
            //     console.log(err);
            // })
        },
        runcreateUser: function() {
            axios.post('http://localhost:3000/user/add', {
                    dataUser: app.createUser,
                })
                .then(function(result) {
                    app.createUser.username = ''
                    app.createUser.email = ''
                    app.createUser.password = ''
                    app.createUser.imageUrl = ''
                })
                .catch(function(error) {
                    console.log(error)
                })
        },
        runcreateTweet: function() {
            axios.post('http://localhost:3000/tweet/add', {
                    dataTweet: app.createTweet.tweet
                })
                .then(function(result) {
                    app.allTweet.unshift(result.data)
                    app.createTweet.tweet = ''
                })
                .catch(function(error) {
                    console.log(error)
                })
        },
        deleteTweet: function(idtweet) {
            axios({
                method: 'delete',
                url: 'http://localhost:3000/tweet/delete',
                data: {
                    id: idtweet
                }
            }).then(function(result) {
                for (var i = 0; i < app.allTweet.length; i++) {
                    if (app.allTweet[i]._id == result.data) {
                        app.allTweet.splice(i, 1)
                    }
                }
            }).catch(function(error) {
                console.log(error)
            })
        },
    }
})

app.getAllTweet()
