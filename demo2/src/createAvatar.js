var avatar = require('./avatar.jpg')

function createAvatar() {
  var root = document.getElementById('root')
  var img = new Image()
  img.src = avatar.default
  img.classList.add('avatar')
  root.append(img)
}

export default createAvatar
