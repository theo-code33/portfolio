<template>
    <section class="technologies">
        <div class="text-technologies">
            <h2>Les technologies que je maîtrise</h2>
            <p>Vous l’aurez compris, je suis passionné par le développement web d’où mon activité en Freelance. Je vous présente un panel des différentes technos que je maîtrise, vous trouverez sûrement chaussure à votre pied !</p>
            <ul>
                <li>CMS pour vos Landing Page</li>
                <li>Prestashop pour vos sites E-Commerce</li>
                <li>Framework tels que React ou VueJS pour vos Web Applications</li>
            </ul>
            <p class="last-p">Contactez-moi et on en parle ensemble !</p>
        </div>
        
        <Frameworks class="frameworks-component"/>
        <Outils class="outils-component"/>
        <Langages class="langages-component"/>
    </section>
</template>

<script>
import Frameworks from './Frameworks.vue';
import Outils from './Outils.vue';
import Langages from './Langages.vue';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default {
    name: 'Technologies',
    components: {
        Frameworks,
        Outils,
        Langages
    },
    mounted(){
        const frameworks = document.querySelector('.frameworks-component');
        const outils = document.querySelector('.outils-component');
        const langages = document.querySelector('.langages-component');
        const wrapper = document.querySelector('.technologies');

        const xEndFrameworks = frameworks.scrollWidth - wrapper.offsetWidth
        const xEndOutils = outils.scrollWidth + wrapper.offsetWidth
        const xEndLangages = langages.scrollWidth - wrapper.offsetWidth

        gsap.to(".langages-component" , {
            x: -xEndLangages,
            duration: 1,
            scrollTrigger: {
                trigger: wrapper,
                scrub: 1,
            },
        })
        gsap.to(".outils-component" , {
            x: xEndOutils,
            duration: 1,
            scrollTrigger: {
                trigger: wrapper,
                scrub: 1,
            },
        })
        gsap.to(".frameworks-component" , {
            x: -xEndFrameworks,
            duration: 1,
            scrollTrigger: {
                trigger: wrapper,
                scrub: 1,
            },
        })
    }
}
</script>

<style lang="scss">
.technologies{
    padding: 100px 0;
    font-family: 'Mundial', sans-serif;
    background: #F4F7FA;
    z-index: 3;
    overflow: hidden;

    .text-technologies{
        width: calc(100% - 140px);
        max-width: 1600px;
        margin: auto;
        h2{
            font-size: 40px;
            font-weight: 600;
            margin: 0 0 50px;
        }
        p{
            font-size: 20px;
            margin: 0;
            color: rgba($color: #000, $alpha: 0.6);
            font-weight: lighter;
            width: 45%;
            line-height: 30px;
        }
        ul{
            margin: 15px 0;
            li{
                font-family: 'Mundial', sans-serif;
                font-size: 20px;
                font-weight: lighter;
                color: rgba($color: #000, $alpha: 0.6);
                line-height: 30px;
            }
        }
        .last-p{
            margin: 15px 0 50px;
        }

    }
}

@media all and (max-width: 1024px) {
    .technologies{
        .text-technologies{
            width: calc(100% - 100px);
            p{
                width: 100%;
            }
        }
    }
}
@media all and (max-width: 767px) {
    .technologies{
        .text-technologies{
            width: calc(100% - 50px);

            h2{
                font-size: 30px;
            }
            .last-p{
                margin: 15px 0 30px;
            }
        }
    }
}
</style>