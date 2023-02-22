const mainScreen = document.getElementById('main-menu')
let screensToFollow = ['main-menu', 'about', 'play']

window.addEventListener('hashchange', (data) => {
  const newHash = data.newURL.split('#')[1]
  const newScreen = document.getElementById(newHash)

  if(!newScreen) {
    for (const screenName of screensToFollow) {
      setVisibility(screenName, false)
    }

    mainScreen.style.display = 'block'

    return;
  }
  
  mainScreen.style.display = 'none'
  newScreen.style.display = 'block'
})

function setVisibility(screenName, visibilityBool) {
  const screen = document.getElementById(screenName)
  if(!screen) return;
  
  if (visibilityBool) {
    screen.style.display = 'block'
  } else {
    screen.style.display = 'none'
  }
}

