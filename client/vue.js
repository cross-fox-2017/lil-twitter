var app = new Vue({
  el: '#app',
  data: {
    twitNew: '',
    twits: []
  },
  methods: {
    postTwitNew: function(){
      axios.post('http://localhost:3000/api/twits', {
        content: app.twitNew
      })
      .then(function(twit){
        twits.push(twit.data)
      })
    },
    litsTwit: function(){
      axios.get('http://localhost:3000/api/twits')
      .then(function(response){
        app.twits = response.data
      })
    }
  }
})
app.litsTwit()
