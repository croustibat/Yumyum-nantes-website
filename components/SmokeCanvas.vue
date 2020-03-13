<template>
  <canvas id="canvas" ref="canvas" height="160" width="350"></canvas>
</template>

<script>
function Smoke(x, y, index) {
  this.x = x
  this.y = y

  this.size = 0.5
  this.startSize = 32
  this.endSize = 35

  this.angle = Math.random() * 359

  this.startLife = new Date().getTime()
  this.lifeTime = 0

  this.velY = -1 - Math.random() * 0.5
  this.velX = Math.floor(Math.random() * -6 + 3) / 10
}
Smoke.prototype.update = function(maxLifeTime) {
  this.lifeTime = new Date().getTime() - this.startLife
  this.angle += 0.2

  const lifePerc = (this.lifeTime / maxLifeTime) * 100

  this.size = this.startSize + (this.endSize - this.startSize) * lifePerc * 0.1

  this.alpha = 1 - lifePerc * 0.01
  this.alpha = Math.max(this.alpha, 0)

  this.x += this.velX
  this.y += this.velY
}
export default {
  created() {
    this.minSpawnTime = 40
    this.lastTime = new Date().getTime()
    this.smokeImage = new Image()
    this.smokeImage.src = '/smoke.png'
    this.parts = []
  },
  mounted() {
    this.canvas = this.$refs.canvas
    this.ctx = this.canvas.getContext('2d')
    this.maxLifeTime = Math.min(5000, (this.canvas.height / (1.5 * 60)) * 1000)
    this.emitterX = this.canvas.width / 2
    this.emitterY = this.canvas.height - 10

    this.render()
  },
  methods: {
    resizeMe() {
      this.canvas.height = this.$refs.smoke.offsetHeight
    },
    render() {
      let len = this.parts.length
      // console.log('render -> this.parts', this.parts)
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

      while (len--) {
        if (
          this.parts[len].y < 0 ||
          this.parts[len].lifeTime > this.maxLifeTime
        ) {
          this.parts.splice(len, 1)
        } else {
          this.parts[len].update(this.maxLifeTime)

          this.ctx.save()
          const offsetX = -this.parts[len].size / 2
          const offsetY = -this.parts[len].size / 2

          this.ctx.translate(
            this.parts[len].x - offsetX,
            this.parts[len].y - offsetY
          )

          this.ctx.rotate((this.parts[len].angle / 180) * Math.PI)
          this.ctx.globalAlpha = this.parts[len].alpha

          this.ctx.drawImage(this.smokeImage, offsetX, offsetY)

          this.ctx.restore()
        }
      }

      if (new Date().getTime() > this.lastTime + this.minSpawnTime) {
        this.lastTime = new Date().getTime()
        this.parts.push(new Smoke(this.emitterX, this.emitterY))
      }

      requestAnimationFrame(this.render)
    }
  }
}
</script>
