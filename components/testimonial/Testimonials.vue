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
        testimonials: [
          {
            name: 'Adel Sanaa',
            job: 'Creative Developer',
            img: '/adel-sanaa.png',
            text: 'Au travers de nos collaborations au sein de l’Agence THRIVE, sa pédagogie, son enthousiasme et son sérieux ont clairement su me marquer. Aucun doute, Théo m’a été un partenaire de travail sérieux et compréhensif.',
            link: 'https://www.linkedin.com/in/adelsanaa'
          },
          {
            name: 'Pierre Marsanne',
            job: "Co-fondateur de l'agence THRIVE",
            img: '/pierre-marsanne.png',
            text: "Je travail avec Théo depuis presque deux ans sur différents projets web (Wordpress et Prestashop en particulier). Théo est un développeur sérieux, organisé et tellement passionné par l'informatique. Le rendu est toujours conforme à nos attentes et les délais sont généralement bien respectés. Théo s'est anticiper nos demandes et est toujours disponible pour échanger lorsque nous rencontrons une problématique dans un projet. C'est un réel plaisir de travailler ensemble. Je recommande vivement Théo pour son excellent investissement.",
            link: "https://www.linkedin.com/in/pierre-marsanne-consultant-web/"
          },
          {
            name: 'Ugo Philippe',
            job: "Co-fondateur de l'agence THRIVE",
            img: '/ugo-philippe.jpeg',
            text: "Je suis en collaboration avec Théo depuis 1 an et je suis très surpris par sa maturité et son investissement au quotidien. Un excellent profil que je recommande.",
          },
          {
            name: 'Frédéric Labourel',
            job: "Développeur Web responsable WORDPRESS",
            img: '/frederic-LABOUREL.jpg',
            text: "J'ai collaboré avec Theo sur des projets wordpress pour lesquels il fut particulièrement efficace notamment en fonctionnalités back et connexions à des API. Il est passionné par ce qu'il entreprend et va au bout des difficultés. Mais il sait également être à l'écoute et demander de l'aide au besoin car il garde toujours le soucis de l'objectif et de l'efficacité. Bref un collaborateur de grande valeur.",
          },
          {
            name: 'Stanislav Bedyak',
            job: "Graphiste - Designer",
            img: '/stanislav-bedyak.webp',
            text: "Excellent professionnel ! 👍🏼 J’ai eu l’occasion de travailler à ses côtés et je peux vous dire que Théo fait de son mieux pour satisfaire ses clients, à n’en pas compter ses heures !",
            link: "https://bedyak.fr/"
          }
        ]
      }
    },

    mounted(){
      Swiper.use([Navigation])
      const swiper = new Swiper('.swiper', {
      direction: 'horizontal',
      loop: false,
      slidesPerView: 1,
      spaceBetween: 30,
      modules: [Navigation],
      autoHeight: true,
      breakpoints: {
        768: {
          slidesPerView: 1.5,
          spaceBetween: 30,
        },
        1025: {
          slidesPerView: 2.5,
          spaceBetween: 30,
        },
      }
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
      .swiper-wrapper{
          align-items: stretch !important;

          .swiper-slide{

            .slider-content{
              height: 100%;
            }
          }
        }
    }
  }

  @media all and (max-width: 1024px){
    .testimonials-container{
      .title-testimonial-container{
        width: calc(100% - 100px);
      }
      .swiper{
        width: calc(100% - 80px);
      }
    }
  }
  @media all and (max-width: 767px){
    .testimonials-container{
      .title-testimonial-container{
        width: calc(100% - 50px);
        h2{
          font-size: 30px;
        }
      }
      .swiper{
        width: calc(100% - 40px);
      }
    }
  }
</style>