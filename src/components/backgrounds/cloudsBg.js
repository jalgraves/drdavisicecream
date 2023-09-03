//
//    Name:        cloudsBG.js
//    Version:     v.1.0.0
//    Updated:     2019-01-04
//

console.log('Running Clouds')

function getRandomInt(min, max) {
  // random integer generator
  return Math.floor(Math.random() * (max - min)) + min
}

const canvas = document.querySelector(".bg_canvas")

function Clouds(canvas) {
  if (canvas) {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    window.addEventListener("resize", function() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      drawClouds(gatherClouds())
    })
    // draw background clouds
    drawClouds(gatherClouds())

  }
}

function Circle(color, xCoordinate, yCoordinate, size) {
  this.color = color
  this.x = xCoordinate
  this.y = yCoordinate
  this.size = size
  var ctx = canvas.getContext("2d")

  this.draw = function() {
    ctx.beginPath()
    ctx.moveTo(this.x, this.y)
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI)
    ctx.fillStyle = this.color
    ctx.fill()
  }
}

function cloudCoords() {
  // return the base location for a cloud from which the circles composing the
  // cloud will be offset and drawn from
  let xCoord = Math.random() * window.innerWidth
  let yCoord = Math.random() * window.innerHeight
  let coordinates = {
    x: Math.round(xCoord),
    y: Math.round(yCoord)
  }
  return coordinates
}

function circleOpacity() {
  // return the opacity for a circle used to compose a cloud
  const getOpacity = Math.random()
  if (getOpacity < 0.5) {
    const opacity = 0.76
    return opacity
  } else {
    return getOpacity
  }
}

function buildCloud() {
  // clouds are built from condensly drawan random sized cirles
  // return an array containing the generated circles that will compose a cloud
  const circleArray = []
  const location = cloudCoords()
  for (var i = 0; i < 40; i++) {
    let size = getRandomInt(20, 25);
    // get the offset location of cirles that will compose the cloud
    let xCoord = getRandomInt(location.x, location.x + 120)
    let yCoord = getRandomInt(location.y, location.y + 60)
    let opacity = circleOpacity()
    let color = "rgba(255, 255, 255, " + opacity + ")"
    circleArray.push(new Circle(color, xCoord, yCoord, size))
  }
  return circleArray
}

function gatherClouds() {
  const cloudArray = []
  for (var i = 0; i < 20; i++) {
    let cloud = buildCloud()
    cloudArray.push(cloud)
  }
  return cloudArray
}

function drawClouds(cloudArray) {
  // draw clouds on canvas
  for (var i = 0; i < cloudArray.length; i++) {
    let circles = cloudArray[i]
    for (var c = 0; c < circles.length; c++) {
      circles[c].draw()
    }
  }
}

export { canvas, Clouds }
