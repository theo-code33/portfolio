<template>
    <div class="frameworks">
        <h3>Framework & librairie</h3>
        <div class="frameworks-container">
            <CardTechnologie :imgUrl="'/langfr-220px-Vue.js_Logo_2.svg.png'" :imgAlt="'Logo Vue JS'" :name="'Vue JS'"/>
            <CardTechnologie :imgUrl="'/1200px-Node.js_logo.svg.png'" :imgAlt="'Logo Node JS'" :name="'Node JS'"/>
            <CardTechnologie :imgUrl="'/1200px-Sass_Logo_Color.svg.png'" :imgAlt="'Logo SASS'" :name="'SASS'"/>
            <CardTechnologie :imgUrl="'tweenmax.png.cf27916e926fbb328ff214f66b4c8429.png'" :imgAlt="'Logo GSAP'" :name="'GSAP'"/>
            <CardTechnologie :imgUrl="'68747470733a2f2f6769746875622e7375726d6f6e2e6d652f696d616765732f636f6d6d6f6e2f7377697065722d6c6f676f2e737667.svg'" :imgAlt="'Logo Swiper JS'" :name="'Swiper JS'"/>
        </div>
    </div>
</template>

<script>
import CardTechnologie from './CardTechnologie.vue'

export default {
    name: 'Frameworks',
    components: {
        CardTechnologie,
    }
}
</script>

<style lang="scss">
.frameworks{
    margin-top: 80px;
    h3{
        font-size: 27px;
        font-weight: 600;
    }
    &-container{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: flex-start;
    }
}
</style>