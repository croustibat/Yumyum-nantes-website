$(document).ready(function() {
  console.log('window READY')

  // SMOKE EFFECT
  if (document.getElementById('canvas')) {
    ;(function() {
      var requestAnimationFrame =
        window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame
      window.requestAnimationFrame = requestAnimationFrame
    })()
    var canvas = document.getElementById('canvas'),
      ctx = canvas.getContext('2d')

    canvas.height = 160
    canvas.width = 350

    var parts = [],
      minSpawnTime = 40,
      lastTime = new Date().getTime(),
      maxLifeTime = Math.min(5000, (canvas.height / (1.5 * 60)) * 1000),
      emitterX = canvas.width / 2,
      emitterY = canvas.height - 10,
      smokeImage = new Image()

    function spawn() {
      if (new Date().getTime() > lastTime + minSpawnTime) {
        lastTime = new Date().getTime()
        parts.push(new smoke(emitterX, emitterY))
      }
    }

    function render() {
      var len = parts.length
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      while (len--) {
        if (parts[len].y < 0 || parts[len].lifeTime > maxLifeTime) {
          parts.splice(len, 1)
        } else {
          parts[len].update()

          ctx.save()
          var offsetX = -parts[len].size / 2,
            offsetY = -parts[len].size / 2

          ctx.translate(parts[len].x - offsetX, parts[len].y - offsetY)
          ctx.rotate((parts[len].angle / 180) * Math.PI)
          ctx.globalAlpha = parts[len].alpha
          ctx.drawImage(
            smokeImage,
            offsetX,
            offsetY,
            parts[len].size,
            parts[len].size
          )
          ctx.restore()
        }
      }
      spawn()
      requestAnimationFrame(render)
    }

    function smoke(x, y, index) {
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

    smoke.prototype.update = function() {
      this.lifeTime = new Date().getTime() - this.startLife
      this.angle += 0.2

      var lifePerc = (this.lifeTime / maxLifeTime) * 100

      this.size =
        this.startSize + (this.endSize - this.startSize) * lifePerc * 0.1

      this.alpha = 1 - lifePerc * 0.01
      this.alpha = Math.max(this.alpha, 0)

      this.x += this.velX
      this.y += this.velY
    }

    smokeImage.src = './img/smoke.png'
    window.onresize = resizeMe
    window.onload = resizeMe
    window.onload = render
    function resizeMe() {
      canvas.height = document.getElementById('smoke').offsetHeight
    }
  }

  if ($('.lateral-menu').length > 0) {
    $(function() {
      var url = window.location.href
      $('.lateral-menu li a').each(function() {
        if (url == this.href) {
          $(this).addClass('active')
        }
      })

      gsap.to('.lateral-menu', { duration: 1, x: 100 })
    })
  }

  if ($('.main-menu').length > 0) {
    console.log('test')
    $(function() {
      var url = window.location.href
      $('.main-menu .menu-button .menu-link').each(function() {
        if (url == this.href) {
          $(this).addClass('active')
        }
      })
    })
  }
})
