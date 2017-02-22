var app = new Vue({
  el: '#app',
  data: {
    twitNew: '',
    searchTwit: '',
    twits: []
  },
  methods: {
    postTwitNew: function(e){
      e.preventDefault()
      axios.post('http://localhost:3000/api/twits', {
        content: app.twitNew
      })
      .then(function(twit){
        twits.push(twit.data)
      })
    },
    listTwit: function(){
      axios.get('http://localhost:3000/api/twits')
      .then(function(response){
        app.twits = response.data
      })
    },
    searchTwit: function(e){
      e.preventDefault()
      axios.post('http://localhost:3000/api/twits/search', {
        search: app.searchTwit
      })
      .then(function(response){
        app.twits = response.data
      })
    }
  }
})
app.listTwit()
