var myCanvas = document.getElementById("board")
var context = myCanvas.getContext("2d")

function Game() {
  that = this
  this.balls = []
  this.squares = []

  for (let i = 0; i < 60; i++) {
    this.balls.push(randomBalls())
  }

  drawGame(that)
}

function drawGame(game) {
  for (let i = 0; i < game.balls.length; i++) {
    drawBalls(game.balls[i])
  }
}

function drawBalls(ball) {
  context.fillStyle = `rgb(${ball.color.red}, ${ball.color.green}, ${ball.color.blue})`;
  context.beginPath()
  context.arc(ball.center.x, ball.center.y, ball.radius, 0, 2 * Math.PI)
  context.stroke()
  context.fill();
}

function Ball(x, y, radius) {
  this.color = new Color()
  this.center = new Point(x, y)
  this.radius = radius
}

function Color() {
  this.red = randomNumber(255)
  this.green = 0
  this.blue = 0
}

function randomNumber(to) {
  return Math.floor(Math.random() * to)
}

function randomBalls() {
  let x = randomNumber(400)
  let y = randomNumber(400)
  let radius = randomNumber(60)
  return new Ball(x, y, radius)
}

function Point(x, y) {
  this.x = x
  this.y = y
}

let game = new Game();
