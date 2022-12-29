<template>
    <section id="projets">
        <Header :title-main="'Mes Projets'" :title-stroke="''" :img="'/memoji.png'" :alt="'Memoji qui travaille'"/>
        <section class="content-project">
            <ProjectItem v-for="project in projects" :key="project.id" :id="project.id" :title="project.title" :tags="project.tags" :image="project.image" :description="project.description" :lastSentence="project.lastSentence" :collaboration="project.collaboration" :link="project.link"/>
        </section>
        <Footer />
    </section>
</template>

<script>
import ProjectItem from '~/components/projects/ProjectItem.vue';
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';

export default {
    name: 'ProjectPage',
    components: {
        Header,
        Footer,
        ProjectItem
    },
    data(){
        return{
            projects: [
                {
                    id: 1,
                    title: 'Orchestre Parfum',
                    tags: ['Prestashop','PHP','Smarty','HTML','SCSS','Javascript'],
                    image: '/mockup-ochestre-parfum.png',
                    description: 'Ce site e-commerce international est spécialisé dans la création de parfums en collaboration avec des musiciens pour allier notes parfumées et musicales. Sympa non ? Ce site a été développé via Prestashop. Le plus ? Il est totalement responsive ! Vous trouverez sur le site La Console. Mais qu’est-ce que c’est ? Et bien, c’est ce qui vous permettra de trouver le parfum parfait pour vous en fonction des différents champs choisis.',
                    lastSentence: 'À vous de tester !',
                    collaboration: {
                        name: 'Agence THRIVE',
                        link: 'https://agencethrive.fr/'
                    },
                    link: 'https://lorchestreparfum.com/'

                },
                {
                    id: 2,
                    title: 'Thalia Patrimoine',
                    tags: ['Wordpress','PHP','Javascript','HTML','SCSS','Swiper JS'],
                    image: '/mockup-thalia-patrimoine.png',
                    description: 'Thalia Patrimoine, c’est LE site de gestion de patrimoine, d’immobilier et d’assurance. Réalisé avec Wordpress, ce site vitrine est entièrement responsive. Tout a été mis en place pour lui permettre de gérer tout le flux externe des annonces ! Autre plus de ce nouveau site : la possibilité de calculer ses mensualités directement en ligne.',
                    lastSentence: 'Allez faire un tour dessus pour le découvrir !',
                    collaboration: {
                        name: 'Agence THRIVE',
                        link: 'https://agencethrive.fr/'
                    },
                    link: 'https://thalia-patrimoine.com/'

                },
                {
                    id: 3,
                    title: 'Mon Portfolio',
                    tags: ['Vue JS','Javascript','HTML','SCSS','GSAP', 'Swiper JS'],
                    image: '/mockup-portfolio.png',
                    description: 'Ici, c’est mon propre projet personnel ! Pour réaliser mon portfolio, j’ai travaillé avec plusieurs technologies différentes : nuxtJS, GSAP, Airtable. Il évolue constamment, alors gardez l’œil ouvert pour repérer tous les nouveaux changements !',
                    lastSentence: 'Petit plus pratique : le formulaire de contact est connecté directement avec Airtable, impossible pour moi de vous rater !',
                    link: '/'
                }
            ]
        }
    },
    head(){
        return{
            title: 'Projets - Théo Gillet - Développeur Front-End',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { hid: 'description', name: 'description', content: '' },
                { name: 'format-detection', content: 'telephone=no' }
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/memoji.png' }
            ]
        }
    }
}
</script>

<style lang="scss">
#projets{
    header{
        padding-top: 0;
        .bottom_header{
            &_img{
                top: 338px;
            }
        }
    }
    .content-project{
        width: calc(100% - 280px);
        max-width: 1600px;
        margin: auto;
        padding: 70px 0 100px;
    }
}

@media all and (max-width: 1024px) {
    #projets{
        .content-project{
            width: calc(100% - 100px);
        }
    }
}

@media all and (max-width: 767px) {
    #projets{
        .content-project{
            width: calc(100% - 50px);
        }
    }
}
</style>