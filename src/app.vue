<template lang="jade">
div
  header
    .logo-band
      .contained  
        object.logo(type="image/svg+xml", data="{{logo}}")
  main
    .hero
      .contained {{{hero}}}
    .contact-band
      .contained
        .call-text Contact us
        .call-button
          form
            button.waves-effect.waves-light(formaction="tel:0894791235")
              i.icon.icon-phone
              span 
              | Call
    section
      .contained
        .work-area(v-for="c in categories")
          span.work-area-icon.icon-stack.icon-5x
            i.icon.icon-stack-2x.icon-circle
            i.icon.icon-stack-1x.icon-inverse(:class="'icon-' + c.name.toLowerCase()")
          h3.work-area-name {{c.name}}
          p.work-area-content {{{c.content}}}
  footer
    ul.contained
      li AU38401
      li ABN 60&nbsp;606&nbsp;101&nbsp;964
      li EC11874
      //p Phone - (08) 9479 1235
    .copyright
      .contained
        small © Copyright, Twitch Services · All rights reserved.
</template>

<script>
import Waves from 'node-waves'

export default {
  data () {
    return {
      logo: require('./logo.svg'),
      hero: require('./markdown/hero.md'),
      categories: [
        {name: 'Residential', content: require('./markdown/residential.md')},
        {name: 'Commercial', content: require('./markdown/commercial.md')},
        {name: 'Industrial', content: require('./markdown/industrial.md')}
      ]
    }
  },

  ready: function() {
    Waves.init()
  }
}
</script>

<style lang="stylus">
@import './stylus/master'

band-left = 13/24
band-right = 11/24

$band
  background-color: $primary-color
  width: 100%

.logo-band
  @extend $band
  padding: 15px 0
  .logo
    height: 54px
    width: 100%

.hero
  text-align: center
  padding 44px 0
  .headline
    width: 100%
    font-size 2.6rem
    line-height 3rem
  .narrative
    width: 100%
    margin-top: 7px
    font-size 1.1rem

.contact-band
  @extend $band
  padding: 17px 0 
  .contained
    > :first-child
      lost-column: band-left
    > :last-child
      lost-column: band-right
  .call-text
    lost-column: band-left
    display: flex;
    font-size: 1.2rem;
    align-items: center

button
  sm-button()
  width: 100%

section
  margin: 50px 0
  .work-area
    lost-row: 1/3 50px
    text-align: center
    .work-area-icon
      margin: 0 auto
    .work-area-name
      color: tallpoppy
      font-size: 1.4rem
      margin: 9px 0
    .work-area-content
      font-size: 1.1rem

footer
  sm-footer($copyright-tag: ".copyright", $color: $primary-text-color, $use-container: false)
  .contained
    text-align: center
    padding-bottom: 20px
  ul
    width: 100%
    li
      lost-column: 1/3

</style>
