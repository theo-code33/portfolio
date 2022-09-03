<template>
  <section id="main_container">
    <Header :img="'/image.png'" :alt="'Emoji qui fait coucou'"></Header>
    <Who/>
    <Technologies/>
    <Footer/>
  </section>
</template>

<script>
import Header from '../components/Header.vue'
import Who from '../components/Who.vue'
import Technologies from '../components/Technologies.vue'
import Footer from '~/components/Footer.vue'

export default {
  name: 'IndexPage',
  components: {
    Header,
    Who,
    Technologies,
    Footer
}
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  margin: 0;
  padding: 0;
}
</style>
