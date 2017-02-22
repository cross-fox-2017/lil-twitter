var app = new Vue({
  el: '#app',
  data: {
    twitNew: '',
    twitSearch: '',
    newHastag: '',
    twits: []
  },
  methods: {
    postTwitNew: function(){
      axios.post('http://localhost:3000/api/twits', {
        content: app.twitNew,
        hashtag: app.newHastag.split(' ').map(function(tag){
          return '#'+tag
        })
      })
      .then(function(twit){
        app.twits.push(twit.data)
      })
    },
    listTwit: function(){
      axios.get('http://localhost:3000/api/twits')
      .then(function(response){
        app.twits = response.data
      })
    },
    searchTwit: function(){
      axios.post('http://localhost:3000/api/twits/search', {
        search: app.twitSearch
      })
      .then(function(response){
        app.twits = response.data
      })
    }
  }
})
app.listTwit()
