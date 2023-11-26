import Animejs, { stagger } from 'animejs'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
gsap.registerPlugin(ScrollToPlugin)
gsap.registerPlugin(ScrollTrigger)
if (process.client) {
    const _cusEase1 = 'cusEase1'
    const _cusEase2 = 'cusEase2'
    const easePower1In = 'power1.in'
    const easePower1InOut = 'power1.inOut'
    const _preventOverlaps = 'group1'
    const _anticipatePin = 1
    const merge = (target, source) => {
        // Iterate through `source` properties and if an `Object` set property to merge of `target` and `source` properties
        for (const key of Object.keys(source)) {
            if (source[key] instanceof Object) Object.assign(source[key], merge(target[key], source[key]))
        }

        // Join `target` and modified `source`
        Object.assign(target || {}, source)
        return target
    }
    var random = function (min, max) {
        return Math.random() * (max - min) + min
    }
    window.bannerAnime = function (_isMobile, self) {
        var main = document.querySelector('#main')
        var bannerBox = main.querySelector('.banner')
        var title1El = bannerBox.querySelectorAll('.title__1-anime')
        var title2El = bannerBox.querySelectorAll('.title__2-anime')
        var title3El = bannerBox.querySelectorAll('.title__3-anime')
        var title4El = bannerBox.querySelectorAll('.title__4-anime')
        var title5El = bannerBox.querySelectorAll('.title__5-anime')
        var title6El = bannerBox.querySelectorAll('.title__6-anime')
        var scrollArrowEl = bannerBox.querySelectorAll('.scrollArrowAnime')

        const tl = gsap.timeline({})
        tl.from(title1El, {
            ease: 'power4.out',
              keyframes: [
                  {
                      opacity: 0,
                      //scale: 0,
                      x: 200,
                  },
                  {
                      opacity: 1,
                      //scale: 1,
                      x: 0,
                      y: 0,
                  },
              ],
              duration: 0.8,
              delay:0.2
        })
        tl.from(
            [title2El],
            {
              ease: 'ease',
                keyframes: [
                  {
                    opacity: 0,
                    scale: 0,
                    y: 50,
                  },
                  {
                      opacity: 1,
                      scale: 1,
                      x: 0,
                      y: 0,
                  },
                ],
                duration: 0.6,
            },
            '-=0.7'
        )
        tl.from(
          title3El,
          {
            ease: 'ease',
            keyframes: [
              {
                opacity: 0,
                scale: 0,
                y: 50,
              },
              {
                  opacity: 1,
                  scale: 1,
                  x: 0,
                  y: 0,
              },
            ],
            duration: 0.8,
          },
          '-=0.7'
        )
        tl.from(
          [title4El],
          {
            ease: 'ease',
            keyframes: [
              {
                opacity: 0,
                scale: 0,
                y: 50,
              },
              {
                  opacity: 1,
                  scale: 1,
                  x: 0,
                  y: 0,
              },
            ],
            duration: 0.8,
          },
          '-=0.7'
        )
        tl.from(
          [title5El],
          {
            ease: 'ease',
            keyframes: [
              {
                opacity: 0,
                scale: 0,
                y: 50,
              },
              {
                  opacity: 1,
                  scale: 1,
                  x: 0,
                  y: 0,
              },
            ],
            duration: 0.8,
          },
          '-=0.7'
        )
        tl.from(title6El, {
          ease: 'power4.out',
            keyframes: [
                {
                    opacity: 0,
                    scale: 0,
                    x: -150,
                },
                {
                    opacity: 1,
                    scale: 1,
                    x: 0,
                    y: 0,
                },
            ],
            duration: 1.2,
        },'-=1.1')
        return tl
    }
    window.loopAnime = function (_isMobile, self) {
      var main = document.querySelector('#main')
      var bannerBox = main.querySelector('.banner')
      var title1El = bannerBox.querySelectorAll('.title__1-anime')
      var title2El = bannerBox.querySelectorAll('.title__2-anime')
      var title3El = bannerBox.querySelectorAll('.title__3-anime')
      var title4El = bannerBox.querySelectorAll('.title__4-anime')
      var title5El = bannerBox.querySelectorAll('.title__5-anime')
      var title6El = bannerBox.querySelectorAll('.title__6-anime')
      var scrollArrowEl = bannerBox.querySelectorAll('.introImg1__4-anime-obj')

      gsap.to('.introImg1__4-anime-obj', {
        keyframes: [
          { duration: 1, x: 0, },
          { duration: 1, x: -50 },
          { duration: 1, x },
        ],
        ease: 'ease-in-out',
        repeat: -1,
      });
    }
}
