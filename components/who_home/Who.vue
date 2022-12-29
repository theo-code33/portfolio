<template>
    <section class="who">
        <div class="left-side">
            <h2>Qui suis-je ?</h2>
            <p>
                Hello. Moi, c’est Théo ! Une petite présentation s’impose non ?
                Pour faire court, je suis développeur web front end, mais je tends à devenir full Stack JavaScript. Vous êtes au bon endroit si
                vous cherchez quelqu’un pour créer le site de vos rêves. Vous demandez, je réalise !
                <br/>
                <br/>
                Besoin d’un site vitrine ? C’est ok, je m’y mets. Vous voulez étendre votre activité et vous avez besoin d’un beau site ecommerce ? Let’s go ! En bref, je prends toutes vos demandes et mets tout en œuvre pour produire votre projet dans les
                meilleurs délais.
                <br/>
                <br/>
                Alors, on commence quand ?
            </p>
        </div>
        <div class="right-side">
            <CardService :img="'/logo-creation.svg'" :alt="'logo création et refonte'" :description="cardServiceText1" :title="'Création et refonte'"/>
            <CardService :img="'/logo-maintenance.svg'" :alt="'logo maintenance et suivi'" :description="cardServiceText2" :title="'Maintenance et suivi'"/>
        </div>
    </section>
</template>

<script>
import CardService from './CardService.vue';
export default {
    name: 'Who',
    components: {
    CardService,
    },
    data() {
    return {
        cardServiceText1: "Envie de créer un site web tout neuf ou de redonner un coup de boost à votre site actuel ? Vous êtes au bon endroit, bien joué ! Mon but est de travailler avec vous et de comprendre vos besoins et vos envies !",
        cardServiceText2: "Votre site est terminé et vous voulez être accompagné sur la suite ? Re-bonjour, c’est aussi dans mes compétences. Je travaille main dans la main avec vous pour vous proposer un suivi complet et total !"
    };
    }
}
</script>

<style lang="scss">
.who{
    padding: 120px 0 120px 0;
    width: calc(100% - 140px);
    margin: auto;
    max-width: 1600px;
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
            color: rgba($color: #000, $alpha: 0.6);
            font-weight: lighter;
            line-height: 30px;
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

@media all and (max-width: 1024px) {
    .who{
        width: calc(100% - 100px);
        padding: 80px 0;
        flex-direction: column;
        align-items: center;

        .left-side{
            width: 100%;
            margin: 0;
        }
        .right-side{
            width: 100%;
            margin: 50px 0 0;
            flex-direction: row;
            justify-content: space-between;
        }
    }
}

@media all and (max-width: 767px) {
    .who{
        width: calc(100% - 50px);

        .left-side{
            h2{
                font-size: 40px;
            }
            p{
                margin: 30px 0;
            }
        }
        .right-side{
            flex-direction: column;
            margin-top: 30px;

            .card-service{
                width: 100%;
            }
        }
    }
}
</style>