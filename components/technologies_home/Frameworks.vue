<template>
    <div class="frameworks">
        <TechnologieName :titleTechnologie="'VueJS'" />
        <TechnologieName :titleTechnologie="'NodeJS'" :border="true" />
        <TechnologieName :titleTechnologie="'SASS'"  />
        <TechnologieName :titleTechnologie="'GSAP'" :border="true" />
        <TechnologieName :titleTechnologie="'SwiperJS'" />
        <TechnologieName :titleTechnologie="'VueJS'" :border="true" />
        <TechnologieName :titleTechnologie="'NodeJS'"/>
        <TechnologieName :titleTechnologie="'SASS'" :border="true" />
        <TechnologieName :titleTechnologie="'GSAP'"/>
        <TechnologieName :titleTechnologie="'SwiperJS'" :border="true" />
        <TechnologieName :titleTechnologie="'VueJS'"/>
        <TechnologieName :titleTechnologie="'NodeJS'" :border="true" />
        <TechnologieName :titleTechnologie="'SASS'"/>
        <TechnologieName :titleTechnologie="'GSAP'" :border="true" />
        <TechnologieName :titleTechnologie="'SwiperJS'"/>
        
    </div>
</template>

<script>
import TechnologieName from './TechnologieName.vue';
export default {
    name: "Frameworks",
    comments: {},
    components: { TechnologieName }
}
</script>

<style lang="scss">
.frameworks{
    display: flex;
    align-items: center;
}
</style>