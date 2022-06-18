const name = 'Anton'
const Yposition = 'left'
const Xposition = 'bottom'
const videoLink = 'https://www.youtube.com/watch?v=EywWngU5xDk'

const iframe = document.createElement('div')
iframe.setAttribute('src', videoLink)
iframe.setAttribute('width', '560')
iframe.setAttribute('height', '315')
iframe.setAttribute('frameborder', '0')

const box = document.createElement('div')
box.style.backgroundColor = 'dark-gray'
box.style.width = '500px'
box.style.height = '500px'
box.style.position = 'absolute'
box.style.left = Xposition === 'left' ? '40px' : 'unset'
box.style.right = Xposition === 'right' ? '40px' : 'unset'
box.style.top = Xposition === 'top' ? '40px' : 'unset'
box.style.bottom = Xposition === 'bottom' ? '40px' : 'unset'

box.appendChild(iframe)

document.querySelector('body').appendChild(box)
