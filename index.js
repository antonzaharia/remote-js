const name = 'Anton'
const Xposition = 'right'
const Yposition = 'bottom'
const videoLink = 'https://www.youtube.com/watch?v=EywWngU5xDk'

const iframe = document.createElement('iframe')
iframe.setAttribute('src', videoLink)
iframe.setAttribute('width', '360')
iframe.setAttribute('height', '115')
iframe.setAttribute('frameborder', '0')

const box = document.createElement('div')
box.style.backgroundColor = 'red'
box.style.width = '400px'
box.style.height = '255px'
box.style.position = 'absolute'
box.style.left = Xposition === 'left' ? '40px' : 'unset'
box.style.right = Xposition === 'right' ? '40px' : 'unset'
box.style.top = Yposition === 'top' ? '40px' : 'unset'
box.style.bottom = Yposition === 'bottom' ? '40px' : 'unset'

box.appendChild(iframe)

document.querySelector('body').appendChild(box)
