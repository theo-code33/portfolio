<template>
    <section id="projets">
        <Header :title-main="'Mes Projets'" :title-stroke="''" :img="'/memoji.png'" :alt="'Memoji qui travaille'"/>
        <section class="content-project">
            <ProjectItem v-for="project in projects" :key="project.id" :id="project.id" :title="project.title" :tags="project.tags" :image="project.image" :description="project.description" :collaboration="project.collaboration" :link="project.link"/>
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
                    description: 'Site vitrine pour l\'Orchestre Parfum, un orchestre de musique classique. Le site est réalisé avec Prestashop, et est responsive.',
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
                    description: 'Site vitrine pour Thalia Patrimoine, une agence immobilière. Le site est réalisé avec Wordpress, et est responsive.',
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
                    description: 'Mon portfolio, réalisé avec Vue JS, et est responsive.',
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
        max-width: 1600px;
        margin: auto;
        padding: 70px 0 100px;
    }
}
</style>