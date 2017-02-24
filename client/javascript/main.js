$(document).ready(function () {
  if (!localStorage.getItem('token')) {
    window.location.href = ' http://127.0.0.1:8080/index.html'
  }
})

$('#btncreatestory').click(function (e) {
  e.preventDefault()

  swal({
    title: 'hello !',
    text: 'Write something interesting',
    type: 'input',
    showCancelButton: true,
    closeOnConfirm: true,
    animation: 'slide-from-top',
    inputPlaceholder: 'Write something'
  },
    function (inputValue) {
      if (inputValue === false) return false

      if (inputValue === '') {
        swal.showInputError('You need to write something!')
        return false
      }
      let token = localStorage.getItem('token')
      $.ajax({
        url: 'http://localhost:3000/user/story',
        type: 'POST',
        data: {
          token: token,
          story: inputValue
        },
        dataType: 'json',
        success: function (data) {
          let timeline = `<div class="row">
            <div class="col s12">
              <div class="card red lighten-2">
                <div class="card-content white-text">
                  <span class="card-title">${data.user}</span>
                  <div class="card-panel">
                    <span class="blue-text text-darken-2">
                        ${data.success.story}
                    </span>
                   </div>
                </div>
              </div>
            </div>
          </div>`
          $('#timeline').append(timeline)
        },
        error: function (err) {
          console.log(err)
        }
      })
    })
})

$('#mystorybutton').click(function (e) {
  e.preventDefault()

  let token = localStorage.getItem('token')
  $.ajax({
    url: `http://localhost:3000/user/story/${token}`,
    type: 'GET',
    success: function (data) {
      let mystory = ''
      data.mypost.forEach(function (item) {
        mystory += `<div id="story_${item._id}" class="row">
          <div class="col s12">
            <div class="card red lighten-2">
              <div class="card-content white-text">
                <span class="card-title">${data.user}</span>
                <div class="card-panel">
                  <span class="blue-text text-darken-2">
                      ${item.story}
                  </span>
                 </div>
                 <div class="card-action">
                 <a onclick="forgethis('${item._id}')" class="btn waves-effect waves-light">Forget
                  <i class="material-icons right">send</i>
                    </a>
             </div>
              </div>
            </div>
          </div>
        </div>`
      })
      $('#mystory').html(mystory)
    },
    error: function (err) {
      console.log(err)
    }
  })
})

$('#mypastbutton').click(function (e) {
  e.preventDefault()

  let token = localStorage.getItem('token')
  $.ajax({
    url: `http://localhost:3000/user/past/${token}`,
    type: 'GET',
    success: function (data) {
      let mypast = ''
      data.mypost.forEach(function (item) {
        mypast += `<div id="story_${item._id}" class="row">
          <div class="col s12">
            <div class="card blue-grey darken-1">
              <div class="card-content white-text">
                <span class="card-title">${data.user}</span>
                <div class="card-panel">
                  <span class="blue-text text-darken-2">
                      ${item.story}
                  </span>
                 </div>
              </div>
            </div>
          </div>
        </div>`
      })
      $('#mypast').html(mypast)
    },
    error: function (err) {
      console.log(err)
    }
  })
})

$('#test1').ready(function () {
  $.ajax({
    url: 'http://localhost:3000/user/all',
    type: 'GET',
    success: function (data) {
      let mytimeline = ''
      data.timeline.forEach(function (item) {
        mytimeline += `<div id="story_${item._id}" class="row">
          <div class="col s12">
            <div class="card red lighten-2">
              <div class="card-content white-text">
                <span class="card-title">${item.user_id.username}</span>
                <div class="card-panel">
                  <span class="blue-text text-darken-2">
                      ${item.story}
                  </span>
                 </div>
              </div>
            </div>
          </div>
        </div>`
      })
      $('#timeline').html(mytimeline)
    },
    error: function (err) {
      console.log(err)
    }
  })
})

function forgethis (value) {
  swal({
    title: 'Are you sure?',
    text: 'You will forget this story !',
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#DD6B55',
    confirmButtonText: 'Yes, delete it!',
    closeOnConfirm: true
  },
    function () {
      $.ajax({
        url: 'http://localhost:3000/user/story',
        type: 'DELETE',
        data: {
          objid: value
        },
        dataType: 'json',
        success: function (data) {
          if (data.forget)
            $(`#story_${value}`).remove()
          else
            console.log(data.err)
        },
        error: function (err) {
          console.log(err)
        }
      })
    })
}
$('#searchform').submit(function (e) {
  e.preventDefault()

  $.ajax({
    url: 'http://localhost:3000/user/search',
    type: 'POST',
    data: {
      hastag: $('#search').val()
    },
    dataType: 'json',
    success: function (data) {
      console.log(data.hastag)
      let hastag = ''
      data.hastag.storyid.forEach(function (item) {
        hastag += `<div id="story_${item._id}" class="row">
          <div class="col s12">
            <div class="card red lighten-2">
              <div class="card-content white-text">
                <span class="card-title">${item.user_id.username}</span>
                <div class="card-panel">
                  <span class="blue-text text-darken-2">
                      ${item.story}
                  </span>
                 </div>
              </div>
            </div>
          </div>
        </div>`
      })
    },
    error: function () {}
  })
})

$('#logout').click(function () {
  localStorage.removeItem('token')
  window.location.href = 'http://127.0.0.1:8080/index.html'
})
