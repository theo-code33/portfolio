<template>
    <section>
        <Header :titleMain="'Contact'" :titleStroke="''" :img="'/image_2.png'" :alt="'Memoji qui appel'" />
        <section class="container-contact">
            <div class="left-side">
                <div class="img-profil">
                    <nuxt-img
                        src="/Theo-NB-3737px.jpg"
                        alt="Photo de profil"
                        format="webp"
                        loading="lazy"
                    />
                </div>
                <div class="contact-link">
                    <p class="description-section">Mes contacts</p>
                    <h3 class="name">Théo Gillet</h3>
                    <a href="mailto:gillettheo1@gmail.com">gillettheo1@gmail.com</a>
                    <a href="tel:0614590394">06 14 59 03 94</a>
                </div>
                <div class="contact-link social-section">
                    <p class="description-section">Mes réseaux</p>
                    <a href="https://www.linkedin.com/in/theo-gillet/" target="_blank">Linkedin</a>
                    <a href="https://www.malt.fr/profile/theogillet" target="_blank">Malt</a>
                    <a href="https://github.com/theo-code33" target="_blank">GitHub</a>
                    
                </div>
            </div>
            <div class="right-side">
                <h2>Parlons ensemble de votre projet !</h2>
                <ContactForm />
            </div>
        </section>
        <Footer :contact=false />
    </section>
</template>

<script>
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';
import ContactForm from '~/components/contact/ContactForm.vue';
export default {
    name: 'ContactPage',
    components: {
        Header,
        Footer,
        ContactForm
    },
    head(){
        return{
            title: 'Contact - Théo Gillet - Développeur Front-End',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { hid: 'description', name: 'description', content: "À la recherche d'un développeur wed freelance pour réalisé votre site web ? C'est parfait, vous êtes au bonne endroit ! Contactez moi via mon formulaire de contact et on en discutera." },
                { name: 'format-detection', content: 'telephone=no' },
                { hid: 'robots', name: 'robots', content: 'index, follow' }
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/image_2.png' }
            ]
        }
    }
}
</script>

<style lang="scss">
.container-contact{
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1600px;
    padding: 120px 0;
    font-family: "Mundial", sans-serif;

    .left-side{
        width: 30%;

        .img-profil{
            width: 100%;
            height: 100%;
            max-width: 300px;
            max-height: 300px;
            margin-bottom: 30px;
            img{
                width: 100%;
                height: 100%;
                border-radius: 500px;
                object-fit: cover;
                object-position:center top ;
            }
        }
        .description-section{
            font-size: 18px;
            font-weight: 300;
            margin-bottom: 20px;
        }
        .name{
            font-size: 30px;
            font-weight: bold;
            margin-bottom: 20px;
        }
        .contact-link{
            margin-bottom: 30px;
            a{
                font-size: 18px;
                margin-bottom: 20px;
                display: block;
                color: #000;
                text-decoration: none;
                position: relative;
                width: max-content;
                &::before{
                    content: "";
                    width: 100%;
                    height: 1px;
                    background: #000;
                    position: absolute;
                    top: 100%;
                    left: 0;
                    transform: scaleX(0);
                    transform-origin: left;
                    transition: transform 0.3s ease;
                }
                &:hover::before{
                    transform: scaleX(1);
                }
            }
        }
        .social-section{
            margin-bottom: 0;
        }
    }
    .right-side{
        width: 60%;
        h2{
            font-size: 50px;
            margin-bottom: 50px;
        }
    }
}
@media all and (max-width: 1024px) {
  .container-contact{
    width: calc(100% - 100px);
    flex-direction: column;

    .left-side{
      width: 100% !important;
      margin-bottom: 50px;

      display: flex;
      align-items: center;
      justify-content: space-between;

      .img-profil{
        img{
          width: 250px !important;
          height: 250px !important;
        }
      }
      .contact-link{
        margin-bottom: 0 !important;
      }
    }

    .right-side{
      width: 100% !important;
    }
  }
}
@media all and (max-width: 767px) {
    .container-contact{
        width: calc(100% - 50px);
        .left-side{
            flex-direction: column;
            align-items: flex-start;

            .img-profil{
                text-align: center;
                margin-bottom: 30px;
            }
            .social-section{
                margin-top: 30px;
            }
        }
        .right-side{
            h2{
                font-size: 30px;
                margin-bottom: 30px;
            }
        }
    }
}
</style>