var avatar = require('./avatar.jpg')
import createAvatar from './createAvatar'
import style from './index.scss'

createAvatar()

var root = document.getElementById('root')
var img = new Image()
img.src = avatar.default
img.classList.add(style.avatar)
root.append(img)

console.log(avatar)
