<template>
    <section id="projets">
        <Header :title-main="'Mes Projets'" :title-stroke="''" :img="'/memoji.png'" :alt="'Memoji qui travaille'"/>
        <section class="content-project">
            <ProjectItem v-for="project in projects" :key="project.id" :id="project.id" :title="project.title" :tags="project.tags" :image="project.image" :description="project.description" :lastSentence="project.lastSentence" :collaboration="project.collaboration" :link="project.link" :isApp="project.isApp"/>
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
                    id: 6,
                    title: 'Babyfoot App',
                    tags: ['React','Javascript','SCSS', "MUI", "Firebase"],
                    image: "/mockup-babyfoot-app.png",
                    description: 'Babyfoot app, c\'est l\'application des joueurs de babyfoot. Elle permet de comptabiliser les scores de vos parties et de visualiser vos statistiques. Son plus ? Elle est disponible sur mobile et sur tablette !',
                    lastSentence: 'Donne ton maximum et fais exploser tes statistiques !',
                    link: 'https://babyfoot-app-prod.web.app/',
                    isApp: true
                },
                {
                    id: 5,
                    title: 'Soviago',
                    tags: ['Wordpress','PHP','Javascript','HTML','SCSS','Swiper JS'],
                    image: '/mockup-soviago.png',
                    description: 'Soviago, c’est LE fournisseur majeur de viandes du Sud Ouest. Réalisé avec Wordpress, ce site vitrine est entièrement modifiable à la guise du client. Il permet de mettre en avant les différents produits proposés par l\'entreprise. Son petit plus ? La carte intéractive permettant de visualiser les différents points de vente de l\'entreprise.',
                    lastSentence: 'Alors ? Ça vous a mis l\'eau à la bouche ?',
                    collaboration: {
                        name: 'Agence THRIVE',
                        link: 'https://agencethrive.fr/'
                    },
                    link: 'https://soviago.com/'
                },
                {
                    id: 4,
                    title: 'Adeimmo',
                    tags: ['Wordpress','PHP','Javascript','HTML','SCSS','Swiper JS'],
                    image: '/mockup-adeimmo.png',
                    description: 'Adeimmo, c’est le site du constructeur immobilier situé à Bordeaux. Réalisé avec Wordpress, ce site vitrine reflète parfaitement le style épuré de l\'entreprise. Son petit plus ? C\est la carte intéractive permettant de visualiser les différents commerces, services et lieux scolaires à proximité des programmes immobiliers',
                    lastSentence: 'C\'est le moment de vous lancer dans l\'achat d\'un bien immobilier !',
                    collaboration: {
                        name: 'Agence THRIVE',
                        link: 'https://agencethrive.fr/'
                    },
                    link: 'https://adeimmo.fr/'
                },
                {
                    id: 3,
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
                    id: 1,
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
                { hid: 'description', name: 'description', content: 'Vous cherchez un développeur web freelance pour votre projet web ? Alors vous êtes au bonne endroit ! Voici mes différents projets réalisé qui pourront vous inspirer.' },
                { name: 'format-detection', content: 'telephone=no' },
                { hid: 'robots', name: 'robots', content: 'index, follow' }
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