<template>
    <section class="who">
        <div class="left-side">
            <h2>Qui suis-je ?</h2>
            <p>
            Je suis Théo Gillet. Développeur Web Freelance et passionné de développement web, je passe le plus clair de mon temps libre à coder pour m’améliorer et pouvoir vous proposer la meilleure solution à votre besoin.<br/>
            <br/>
            Je suis à votre disposition pour répondre à tout type de projets de création de sites internet. Que ce soit un site vitrine, un site e-commerce ou même un développement spécifique je ferai mon maximum et repousserai mes limites pour répondre au mieux à votre besoin.
            </p>
            <NuxtLink to="/">En découvrir plus</NuxtLink>
        </div>
        <div class="right-side">
            <CardService :img="'/image.png'" :alt="'cooool'" :description="'Je suis Théo Gillet. Développeur Web Freelance et passionné de développement web, je passe le plus clair de mon temps libre à coder pour m’améliorer et pouvoir vous proposer la meilleure solution à votre besoin.'" :title="'Création et refonte'"/>
            <CardService :img="'/image.png'" :alt="'cooool'" :description="'Je suis Théo Gillet. Développeur Web Freelance et passionné de développement web, je passe le plus clair de mon temps libre à coder pour m’améliorer et pouvoir vous proposer la meilleure solution à votre besoin.'" :title="'Maintenance et suivi'"/>
        </div>
    </section>
</template>

<script>
import CardService from './CardService.vue';
export default {
    name: 'Who',
    components: {
    CardService,
}
}
</script>

<style lang="scss">
.who{
    padding: 160px 140px 50px 140px;
    font-family: 'Mundial', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;

    .left-side{
        width: 40%;
        margin-right: 5%;
        h2{
            font-size: 60px;
            font-weight: 600;
            margin: 0;
        }
        p{
            font-size: 20px;
            margin: 50px 0;
            font-weight: lighter;
        }
        a{
            font-size: 22px;
            color: #000;
            text-decoration: none;
            position: relative;

            &::before{
                content: '';
                width: 100%;
                height: 2px;
                border-radius: 3px;
                background-color: #000;
                position: absolute;
                bottom: -4px;
                left: 0;
                transition: all 0.3s ease-in-out;
            }
            &:hover{
                &::before{
                    width: 15%;
                }
            }
        }
    }
    .right-side{
        width: 40%;
        display: flex;
        align-items: center;
        flex-direction: column;
        margin-left: 5%;

    }
    
}
</style>