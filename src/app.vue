<template lang="jade">
div
  header
    .logo-band
      .contained  
        .logo
        .call-button(v-el:top-call-button)
          form
            button.waves-effect.waves-light(formaction="tel:0894791235")
              i.icon.icon-phone
              span 
              | Call
  main
    .hero
      .contained
        {{{hero}}}
    .contact-band
      .contained
        .call-text Get a quote
        div(v-el:call-button-anchor)
        .call-button(v-el:call-button)
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
</template>

<script>
import Waves from 'node-waves'

export default {
  data () {
    return {
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
    window.onscroll = this.stickyCall
    this.stickyCall()
  },

  methods: {
    stickyCall: function () {
      var st = window.pageYOffset
      var ot = this.$els.callButtonAnchor.getBoundingClientRect().top + st
      var callButton = this.$els.callButton
      var topButton = this.$els.topCallButton

      if(st > ot - 10) {
        callButton.style.display = "none"
        topButton.style.display = "inline-block"
      } else if(st <= ot) {
        callButton.style.display = "inline-block"
        topButton.style.display = "none"
      }
    }
  }
}
</script>

<style lang="stylus">
@import './stylus/master'

band-left = 7/12
band-right = 5/12

$band
  background-color tamarillo
  width 100%
  .contained
    > :first-child
      lost-column band-left
    > :last-child
      lost-column band-right

.logo-band
  @extend $band
  padding 10px 0 
  position fixed
  top 0
  z-index 100
  .logo
    background-image url("./logo.svg")
    background-position: 0 50%
    background-repeat no-repeat
    background-size 114px 36px
    height 36px

.hero
  padding-top 100px
  padding-bottom 44px
  background tallpoppy
  text-align center
  .headline
    width 100%
    font-size 2.6rem
    line-height 3rem
    font-family 'Hind'
  .narrative
    width 100%
    margin-top 7px
    font-size 1.2rem

.contact-band
  @extend $band
  padding 17px 0 
  .call-text
    lost-column band-left
    display: flex;
    font-size: 1.2rem;
    align-items center
  .call-button
    z-index 101


button
  width 100%
  height 36px
  border: none;
  border-radius: 2px;
  outline: 0;
  text-transform: uppercase;
  -webkit-tap-highlight-color: transparent;

  text-decoration:none;
  background-color: tallpoppy;
  letter-spacing: .5px;
  transition: .2s ease-out;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  &:hover
    background-color: lighten(tallpoppy, 5%)
    box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);

section
  color #000
  margin 50px 0
  .work-area
    lost-row 1/3 50px
    text-align center
    .work-area-icon
      margin 0 auto
    .work-area-name
      color tamarillo
      font-size 1.4rem
      margin 9px 0
    .work-area-content
      font-size 1.1rem
      ul
        list-style-type none


</style>
