<template>
  <section id="main_container">
    <Header :img="'/image.png'" :alt="'Emoji qui fait coucou'"></Header>
    <Who/>
    <Technologies/>
    <LastProject/>
    <Testimonials/>
    <Footer/>
  </section>
</template>

<script>
import Header from '../components/Header.vue'
import Who from '../components/who_home/Who.vue'
import Technologies from '../components/technologies_home/Technologies.vue'
import LastProject from '../components/last-project_home/LastProject.vue'
import Footer from '~/components/Footer.vue'
import Testimonials from '~/components/testimonial/Testimonials.vue'

export default {
  name: 'IndexPage',
  components: {
    Header,
    Who,
    Technologies,
    LastProject,
    Footer,
    Testimonials
  }
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
h1, h2, p, span{
  cursor: default;
}
body{
  margin: 0;
  padding: 0;
}
</style>
