<template>
    <section class="testimonials-container">
        <div class="title-testimonial-container">
          <h2>Ils ont travaillés avec moi</h2>
        </div>
        <div class="swiper">
          <div class="swiper-wrapper">
            <div v-for="testimonial in testimonials" :key="testimonial.name" class="swiper-slide" :class="`slide--${testimonial.name}`">
              <div class="slider-content">
                <TestimonialItem :testimonial="testimonial"/>
              </div>
            </div>
          </div>
      </div>
      <!-- <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div> -->
    </section>
</template>


<script>
import { Swiper, Navigation } from 'swiper'
import 'swiper/swiper-bundle.min.css'

export default {
    name: "Testimonials",
    data(){
      return{
        testimonials: [{
          name: 'Jean',
          job: 'Développeur',


          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel aliquam aliquam, nisl nisl aliquam nisl, eu aliquam nisl nisl euismod.'
        },
        {
          name: 'Jean',

          alt: 'Emoji qui fait coucou',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel aliquam aliquam, nisl nisl aliquam nisl, eu aliquam nisl nisl euismod.'
        },
        {
          name: 'Jean',
          job: 'Développeur',

          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel aliquam aliquam, nisl nisl aliquam nisl, eu aliquam nisl nisl euismod.'
        },
        {
          name: 'Jean',
          job: 'Développeur',
          
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel aliquam aliquam, nisl nisl aliquam nisl, eu aliquam nisl nisl euismod.'
        },
        {
          name: 'Jean',
          job: 'Développeur',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel aliquam aliquam, nisl nisl aliquam nisl, eu aliquam nisl nisl euismod.'
        },
        {
          name: 'Jean',
          job: 'Développeur',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel aliquam aliquam, nisl nisl aliquam nisl, eu aliquam nisl nisl euismod.'
        }]
      }
    },

    mounted(){
      Swiper.use([Navigation])
      const swiper = new Swiper('.swiper', {
      direction: 'horizontal',
      loop: false,
      slidesPerView: 2.5,
      spaceBetween: 30,
      modules: [Navigation],
      // navigation: {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev'
      // }
    })
    }
}
</script>

<style lang="scss">
  .testimonials-container{
    background: #F4F7FA;
    padding: 100px 0;
    overflow: hidden;
    position: relative;
    
    .title-testimonial-container{
      width: calc(100% - 280px);
      max-width: 1600px;
      margin: 0 auto 50px;
      h2{
        font-size: 40px;
        font-family: 'Mundial', sans-serif;
        font-weight: 600;
      }
    }

    .swiper{
      width: calc(100% - 280px);
      overflow: visible;
    }
  }
</style>