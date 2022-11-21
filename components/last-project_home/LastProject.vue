<template>
    <section class="last-project">
        <div class="left-side">
            <h2>Mes <br/>Derniers projets</h2>
            <img src="@/static/memoji.png" alt="Memoji derrière un ordinateur">
        </div>
        <div class="right-side">
            <ProjectItem :title="'Orchestre Parfum'" :tags="['Prestashop','PHP','Smarty','HTML','SCSS','Javascript']" :link="'/projets#1'" :image="'/mockup-ochestre-parfum.png'"/>
            <ProjectItem class="middle-item" :title="'Thalia Patrimoine'" :tags="['Wordpress','PHP','Javascript','HTML','CSS','Swiper JS']" :link="'/projets#2'" :image="'/mockup-thalia-patrimoine.png'" />
            <ProjectItem :title="'Mon Portfolio'" :tags="['Vue JS','Javascript','HTML','SCSS','GSAP', 'Swiper JS']" :link="'/projets#3'" :image="'/mockup-portfolio.png'" />
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
</style>