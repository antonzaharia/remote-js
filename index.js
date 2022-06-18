const name = 'Anton'
const Xposition = 'right'
const Yposition = 'bottom'
const videoLink = 'https://www.youtube.com/watch?v=EywWngU5xDk'

const iframe = document.createElement('iframe')
iframe.setAttribute('src', videoLink)
iframe.setAttribute('width', '360')
iframe.setAttribute('height', '115')
iframe.setAttribute('frameborder', '0')
iframe.setAttribute('title', 'YouTube video player')
iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture')
iframe.setAttribute('allowfullscreen', 'allowfullscreen')

const box = document.createElement('div')
box.style.backgroundColor = 'red'
box.style.width = '400px'
box.style.height = '255px'
box.style.position = 'absolute'
box.style.left = Xposition === 'left' ? '40px' : 'unset'
box.style.right = Xposition === 'right' ? '40px' : 'unset'
box.style.top = Yposition === 'top' ? '40px' : 'unset'
box.style.bottom = Yposition === 'bottom' ? '40px' : 'unset'
box.style.display = 'flex'
box.style.justifyContent = 'center'
box.style.padding = '20px'

box.appendChild(iframe)

document.querySelector('body').appendChild(box)