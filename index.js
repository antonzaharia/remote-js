const name = 'Anton'
const Yposition = 'left'
const Xposition = 'bottom'
const videoLink = 'https://www.youtube.com/watch?v=EywWngU5xDk'

const iframe = document.createElement('div')
iframe.textContent = 'Test'

document.querySelector('body').appendChild(iframe)

{
  /* <iframe width="560" height="315" src="https://www.youtube.com/embed/EywWngU5xDk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */
}
