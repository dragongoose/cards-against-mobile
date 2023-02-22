const mainScreen = document.getElementById('main-menu')
let screensToFollow = ['main-menu', 'about']

window.addEventListener('hashchange', (data) => {
  const newHash = data.newURL.split('#')[1]
  const newScreen = document.getElementById(newHash)

  if(!newScreen) {
    for (const screenName of screensToFollow) {
      toggleVisibility(screenName)
    }

    mainScreen.style.display = 'block'

    return;
  }
  
  mainScreen.style.display = 'none'
  newScreen.style.display = 'block'
})

function toggleVisibility(screenName) {
  const screen = document.getElementById(screenName)
  if(!screen) return;
  
  if (screen.style.display === 'block') {
    screen.style.display = 'none'
  } else {
    screen.style.display = 'block'
  }
}

