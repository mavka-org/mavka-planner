// ammount to add on each button press
const confettiCount = 20
const sequinCount = 10

// "physics" variables
const gravityConfetti = 0.3
const gravitySequins = 0.55
const dragConfetti = 0.075
const dragSequins = 0.02
const terminalVelocity = 3
const confettiLifetimeRange = [40, 150]
const sequinsLifetimeRange = [30, 50]

// colors, back side is darker for confetti flipping
const colors = [
  { front : '#4caf50', back: '#81c784' }, // Purple
  { front : '#1AB2A8', back: '#1AB2A8' }, // Purple
  { front : '#f44336', back: '#e57373' }, // Light Blue
  { front : '#ff9800', back: '#ffb74d' }  // Darker Blue
]

// helper function to pick a random number within a range
const randomRange = (min, max) => Math.random() * (max - min) + min

// helper function to get initial velocities for confetti
// this weighted spread helps the confetti look more realistic
const initConfettoVelocity = (xRange, yRange) => {
  const x = randomRange(xRange[0], xRange[1])
  const range = yRange[1] - yRange[0] + 1
  let y = yRange[1] - Math.abs(randomRange(0, range) + randomRange(0, range) - range)
  if (y >= yRange[1] - 1) {
    // Occasional confetto goes higher than the max
    y += (Math.random() < .25) ? randomRange(1, 3) : 0
  }
  return {x: x, y: -y}
}


// Confetto Class
class Confetto {

  constructor(element){
    this.randomModifier = randomRange(0, 99);
    this.color = colors[Math.floor(randomRange(0, colors.length))];
    this.dimensions = {
      x: randomRange(5, 9),
      y: randomRange(8, 15),
    };
    this.position = {
      x: randomRange(element.offsetLeft - element.offsetWidth/4, element.offsetLeft + element.offsetWidth + element.offsetWidth/4),
      y: randomRange(element.offsetTop + element.offsetHeight/2 + 8, element.offsetTop + (1.5 * element.offsetHeight) - 8),
    };
    this.rotation = randomRange(0, 2 * Math.PI);
    this.scale = {
      x: 1,
      y: 1,
    };
    this.velocity = initConfettoVelocity([-9, 9], [6, 11]);
    this.lifetime = randomRange(confettiLifetimeRange[0], confettiLifetimeRange[1]);
  }

  update() {
    // apply forces to velocity
    this.velocity.x -= this.velocity.x * dragConfetti
    this.velocity.y = Math.min(this.velocity.y + gravityConfetti, terminalVelocity)
    this.velocity.x += Math.random() > 0.5 ? Math.random() : -Math.random()

    // set position
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y

    // spin confetto by scaling y and set the color, .09 just slows cosine frequency
    this.scale.y = Math.cos((this.position.y + this.randomModifier) * 0.09)

    // update time left to live
    this.lifetime = this.lifetime - 1
  }
}


// Sequin Class
class Sequin {

  constructor(element) {
    this.color = colors[Math.floor(randomRange(0, colors.length))].back;
    this.radius = randomRange(1, 2);
    this.position = {
      x: randomRange(element.offsetLeft - element.offsetWidth/3, element.offsetLeft + element.offsetWidth + element.offsetWidth/3),
      y: randomRange(element.offsetTop + element.offsetHeight/2 + 8, element.offsetTop + (1.5 * element.offsetHeight) - 8),
    };
    this.velocity = {
      x: randomRange(-6, 6),
      y: randomRange(-8, -12)
    };
    this.lifetime = randomRange(sequinsLifetimeRange[0], sequinsLifetimeRange[1])
  };

  update() {
    // apply forces to velocity
    this.velocity.x -= this.velocity.x * dragSequins
    this.velocity.y = this.velocity.y + gravitySequins

    // set position
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y

    // update time left to live
    this.lifetime = this.lifetime - 1
  }
}


const initBurst = (element, canvas) => {
  // add Confetto/Sequin objects to arrays to draw them
  const confetti = []
  const sequins = []

  console.log('elementLeft', element.offsetLeft)
  console.log('elementTop', element.offsetTop)
  console.log('elementHeight', element.offsetHeight)
  console.log('elementWidth', element.offsetWidth)

  console.log('canvasLeft', canvas.offsetLeft)
  console.log('canvasTop', canvas.offsetTop)
  console.log('canvasHeight', canvas.offsetHeight)
  console.log('canvasWidth', canvas.offsetWidth)

  const ctx = canvas.getContext('2d')

  // add elements to arrays to be drawn
  for (let i = 0; i < confettiCount; i++) {
    confetti.push(new Confetto(element))
  }
  for (let i = 0; i < sequinCount; i++) {
    sequins.push(new Sequin(element))
  }

  console.log(new Confetto(element))

    // draws the elements on the canvas
  const render = () => {
    ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)

    confetti.forEach((confetto, index) => {
      let width = (confetto.dimensions.x * confetto.scale.x)
      let height = (confetto.dimensions.y * confetto.scale.y)

      // move canvas to position and rotate
      ctx.translate(confetto.position.x, confetto.position.y)
      ctx.rotate(confetto.rotation)

      // update confetto "physics" values
      confetto.update()

      // get front or back fill color
      ctx.fillStyle = confetto.scale.y > 0 ? confetto.color.front : confetto.color.back

      // draw confetto
      ctx.fillRect(-width / 2, -height / 2, width, height)

      // reset transform matrix
      ctx.setTransform(1, 0, 0, 1, 0, 0)
    })

    sequins.forEach((sequin, index) => {
      // move canvas to position
      ctx.translate(sequin.position.x, sequin.position.y)

      // update sequin "physics" values
      sequin.update()

      // set the color
      ctx.fillStyle = sequin.color

      // draw sequin
      ctx.beginPath()
      ctx.arc(0, 0, sequin.radius, 0, 2 * Math.PI)
      ctx.fill()

      // reset transform matrix
      ctx.setTransform(1, 0, 0, 1, 0, 0)
    })

    // render next screen if any sequins or confetti left to show
    if (sequins.length !== 0 || confetti.length !== 0) {
      window.requestAnimationFrame(render)
    }

    // remove confetti and sequins whose lifetime is up
    // must be done in seperate loops to avoid noticeable flickering
    confetti.forEach((confetto, index) => {
      if (confetto.lifetime < 0) {
        confetti.splice(index, 1)
      }
    })
    sequins.forEach((sequin, index) => {
      if (sequin.lifetime < 0) {
        sequins.splice(index, 1)
      }
    })
  }

  // kickoff render loop
  render()
}

// cycle through button states when clicked
const animateConfetti = (element, canvas) => {
  // init other global elements
  initBurst(element, canvas)
}

export default animateConfetti
