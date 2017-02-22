function get_all_tweet(){
$.ajax({
    url: "http://localhost:3000/twitter",
    method:"GET",
    success: function( result ) {
    var temp = ""
    for(var i=0;i<result.length;i++){
      temp +=
      `<div class="row" id="${result[i]._id}">
        <div class="col-sm-6 col-md-4">
          <div class="thumbnail">
            <div class="caption">
              <h3>${result[i].title}</h3>
              <p>${result[i].content}</p>
              <div class="modal-footer">
                <p><a class="btn btn-danger" role="button" onclick="delete_tweet('${result[i]._id}')">Delete</a></p>
                <span>Posted by : ${result[i].postBy}</span>
              </div>
            </div>
          </div>
        </div>
      </div>`
    }
      $('#list-tweet').append(temp)
    }
})
}
get_all_tweet()

function search_tweet(){
  var input = document.getElementById("search").value;
  if(input==null){
    get_all_tweet()
  }

  $.ajax({
      url: "http://localhost:3000/twitter/search",
      method:"post",
      data:{
        title:input
      },
      success: function(result) {
        $(`#list-tweet div`).remove()
        var temp = ""
        for(var i=0;i<result.length;i++){
          temp +=
          `<div class="row" id="${result[i]._id}">
            <div class="col-sm-6 col-md-4">
              <div class="thumbnail">
                <div class="caption">
                  <h3>${result[i].title}</h3>
                  <p>${result[i].content}</p>
                  <div class="modal-footer">
                    <p><a class="btn btn-danger" role="button" onclick="delete_tweet('${result[i]._id}')">Delete</a></p>
                    <span>Posted by : ${result[i].postBy}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>`
        }
          $('#list-tweet').append(temp)
      }
    })
}


function create_tweet(){
  $.ajax({
      url: "http://localhost:3000/twitter",
      method:"post",
      data:{
        title:$('#title').val(),
        content:$('#content').val(),
        postBy:$('#post').val()
      },
      success: function(result) {
        var temp = `
        <div class="row" id="${result._id}">
          <div class="col-sm-6 col-md-4">
            <div class="thumbnail">
              <div class="caption">
                <h3>${result.title}</h3>
                <p>${result.content}</p>
                <div class="modal-footer">
                  <p><a class="btn btn-danger" role="button" onclick="delete_tweet('${result._id}')">Delete</a></p>
                <span>Posted by : ${result.postBy}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        `
        $('#list-tweet').prepend(temp)
        $('#title').val("")
        $('#content').val("")
        $('#post').val("")
      }
    })

    $('#tweetModal').modal('hide');
}

function delete_tweet(id){
    $.ajax({
        url: "http://localhost:3000/twitter",
        method:"delete",
        data:{
          id:id
      },
        success: function(result) {
          $(`#${id}`).remove()
        }
    });
}
