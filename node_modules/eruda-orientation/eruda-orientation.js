// https://code.tutsplus.com/tutorials/an-introduction-to-the-device-orientation-api--cms-21067
;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory)
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory()
  } else {
    root.erudaOrientation = factory()
  }
})(this, function() {
  return function(eruda) {
    var Tool = eruda.Tool
    var util = eruda.util

    var Orientation = Tool.extend({
      name: 'orientation',
      init: function($el) {
        this.callSuper(Tool, 'init', arguments)
        this._style = util.evalCss(
          [
            '.eruda-dev-tools .eruda-tools .eruda-orientation {padding: 10px; overflow-y: auto; -webkit-overflow-scrolling: touch;}',
            '.eruda-not-supported {background: var(--console-error-background); color: var(--console-error-foreground); border: 1px solid var(--console-error-border);padding: 10px; text-align: center;}',
            '.eruda-cube {width: 150px; height: 150px; color: var(--foreground); position: relative; margin: 50px auto; -webkit-transform-style: preserve-3d; transform-style: preserve-3d;}',
            '.eruda-face {width: 150px; height: 150px; position: absolute; font-size: 80px; text-align: center; line-height: 150px; background-color: var(--accent); box-shadow: inset 0 0 20px var(--foreground); opacity: 0.6; }',
            '.eruda-one {-webkit-transform: translateZ(75px); transform: translateZ(75px);}',
            '.eruda-two {-webkit-transform: rotateY(90deg) translateZ(75px); transform: rotateY(90deg) translateZ(75px);}',
            '.eruda-three {-webkit-transform: rotateY(180deg) translateZ(75px); transform: rotateY(180deg) translateZ(75px);}',
            '.eruda-four {-webkit-transform: rotateY(-90deg) translateZ(75px); transform: rotateY(-90deg) translateZ(75px);}',
            '.eruda-five {-webkit-transform: rotateX(90deg) translateZ(75px); transform: rotateX(90deg) translateZ(75px);}',
            '.eruda-six {-webkit-transform: rotateX(-90deg) translateZ(75px) rotate(0deg); transform: rotateX(-90deg) translateZ(75px) rotate(0deg);}',
            '.eruda-orientation-data {margin: 10px;}',
            '.eruda-content {padding: 10px;}',
            'table {width: 100%;}',
            'table td {border: 1px solid var(--border); padding: 10px;}',
            '.eruda-key {width: 150px;}',
            'sup {vertical-align: super; font-size: smaller;}'
          ].join('.eruda-dev-tools .eruda-tools .eruda-orientation ')
        )
        var isSupported =
          window.DeviceOrientationEvent && window.DeviceMotionEvent

        if (!isSupported) {
          $el.html(
            '<div class="eruda-not-supported">Not supported for this browser!</div>'
          )
        } else {
          $el.html(
            [
              '<div class="eruda-cube" class="cube">',
              '  <div class="eruda-face eruda-one">1</div>',
              '  <div class="eruda-face eruda-two">2</div>',
              '  <div class="eruda-face eruda-three">3</div>',
              '  <div class="eruda-face eruda-four">4</div>',
              '  <div class="eruda-face eruda-five">5</div>',
              '  <div class="eruda-face eruda-six">6</div>',
              '</div>',
              '<div class="eruda-orientation-data">',
              '  <div class="eruda-content">',
              '    <table>',
              '      <tbody>',
              '        <tr>',
              '          <td class="eruda-key">coordinates</td>',
              '          <td class="eruda-coordinates">unknown</td>',
              '        </tr>',
              '        <tr>',
              '          <td class="eruda-key">acceleration</td>',
              '          <td class="eruda-acceleration">unknown</td>',
              '        </tr>',
              '        <tr>',
              '          <td class="eruda-key">acceleration including gravity</td>',
              '          <td class="eruda-acceleration-including-gravity">unknown</td>',
              '        </tr>',
              '        <tr>',
              '          <td class="eruda-key">rotation rate</td>',
              '          <td class="eruda-rotation-rate">unknown</td>',
              '        </tr>',
              '        <tr>',
              '          <td class="eruda-key">interval</td>',
              '          <td class="eruda-interval">unknown</td>',
              '        </tr>',
              '      </tbody>',
              '    </table>',
              '  </div>',
              '</div>'
            ].join('')
          )
          this._$cube = $el.find('.eruda-cube')
          this._$coordinates = $el.find('.eruda-coordinates')
          this._$acceleration = $el.find('.eruda-acceleration')
          this._$accGravity = $el.find('.eruda-acceleration-including-gravity')
          this._$rotationRate = $el.find('.eruda-rotation-rate')
          this._$interval = $el.find('.eruda-interval')
          this._bindEvent()
        }
      },
      _bindEvent: function() {
        var $cube = this._$cube
        var $coordinates = this._$coordinates
        var $acceleration = this._$acceleration
        var $accGravity = this._$accGravity
        var $rotationRate = this._$rotationRate
        var $interval = this._$interval

        var self = this
        this._onDeviceorientation = function(e) {
          if (!self._isShow) return

          $cube.css(
            'transform',
            'rotateX(' +
              e.beta +
              'deg) ' +
              'rotateY(' +
              e.gamma +
              'deg) ' +
              'rotateZ(' +
              e.alpha +
              'deg)'
          )

          $coordinates.text(
            '(' +
              Math.round(e.beta) +
              ', ' +
              Math.round(e.gamma) +
              ', ' +
              Math.round(e.alpha) +
              ')'
          )
        }
        this._onDevicemotion = function(e) {
          if (!self._isShow) return

          var acceleration = e.acceleration
          $acceleration.html(
            '(' +
              Math.round(acceleration.x) +
              ', ' +
              Math.round(acceleration.y) +
              ', ' +
              Math.round(acceleration.z) +
              ') m/s<sup>2</sup>'
          )

          var accGravity = e.accelerationIncludingGravity
          $accGravity.html(
            '(' +
              Math.round(accGravity.x) +
              ', ' +
              Math.round(accGravity.y) +
              ', ' +
              Math.round(accGravity.z) +
              ') m/s<sup>2</sup>'
          )

          var rotationRate = e.rotationRate
          $rotationRate.text(
            '(' +
              Math.round(rotationRate.beta) +
              ', ' +
              Math.round(rotationRate.gamma) +
              ', ' +
              Math.round(rotationRate.alpha) +
              ')'
          )

          $interval.text(e.interval + 'ms')
        }
        window.addEventListener('deviceorientation', this._onDeviceorientation)
        window.addEventListener('devicemotion', this._onDevicemotion)
      },
      show: function() {
        this.callSuper(Tool, 'show', arguments)
        this._isShow = true
      },
      hide: function() {
        this.callSuper(Tool, 'hide', arguments)
        this._isShow = false
      },
      destroy: function() {
        this.callSuper(Tool, 'destroy', arguments)
        util.evalCss.remove(this._style)
        window.removeEventListener(
          'deviceorientation',
          this._onDeviceorientation
        )
        window.removeEventListener('devicemotion', this._onDevicemotion)
      }
    })

    return new Orientation()
  }
})
