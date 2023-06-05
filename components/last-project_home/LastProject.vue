<template>
    <section class="last-project">
        <div class="left-side">
            <h2>Mes <br v-if="widthDevice > 1024"/>Derniers projets</h2>
            <nuxt-img
                src="/memoji.png"
                format="webp"
                alt="Memoji derrière un ordinateur"
            />
        </div>
        <div class="right-side">
            <ProjectItem :title="'Soviago'" :tags="['Wordpress','PHP','Javascript','HTML','CSS','Swiper JS']" :link="'/projets#5'" :image="'/mockup-soviago.png'" />
            <ProjectItem class="middle-item" :title="'Adeimmo'" :tags="['Wordpress','PHP','Javascript','HTML','SCSS','Swiper JS']" :link="'/projets#4'" :image="'/mockup-adeimmo.png'" />
            <ProjectItem :title="'Orchestre Parfum'" :tags="['Prestashop','PHP','Smarty','HTML','SCSS','Javascript']" :link="'/projets#3'" :image="'/mockup-ochestre-parfum.png'"/>
            <ProjectItem class="last-item" :title="'Voir les autres Projets'" :link="'/projets'" />
        </div>
    </section>
</template>

<script>
import ProjectItem from './ProjectItem.vue'
export default {
    name: "LastProject",
    components: { 
        ProjectItem 
    },
    data(){
        return{
            widthDevice: window.innerWidth
        }
    } 
}
</script>

<style lang="scss">
.last-project{
    width: calc(100% - 280px);
    font-family: 'Mundial', sans-serif;
    background: #FFF;
    margin: auto;
    padding: 150px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1600px;

    .left-side{
        h2{
            font-size: 40px;
            font-weight: 600;
            margin: 0;
            line-height: 50px;
        }
        img{
            width: 333px;
            height: 333px;
        }
    }
    .right-side{
        width: 60%;
        .middle-item{
            margin: 50px 0;
        }
        .last-item{
            margin-top: 50px;
        }
    }
}

@media all and (max-width: 1024px) {
    .last-project{
        width: calc(100% - 100px);
        padding: 100px 0;
        flex-direction: column;

        .left-side{
            width: 100%;
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            margin-bottom: 50px;
            img{
                width: 200px;
                height: 200px;
            }
        }
        .right-side{
            width: 100%;
        }
    }
}
@media all and (max-width: 767px) {
    .last-project{
        width: calc(100% - 50px);
        .left-side{
            h2{
                font-size: 30px;
            }
            img{
                width: 150px;
                height: 150px;
            }
        }
    }
}
</style>