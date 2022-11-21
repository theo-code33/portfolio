<template>
    <div class="langages">
        <TechnologieName :titleTechnologie="'HTML5'" />
        <TechnologieName :titleTechnologie="'CSS3'" :border="true" />
        <TechnologieName :titleTechnologie="'Javascript'"/>
        <TechnologieName :titleTechnologie="'PHP'" :border="true" />
        <TechnologieName :titleTechnologie="'Smarty'"/>
        <TechnologieName :titleTechnologie="'HTML5'" :border="true" />
        <TechnologieName :titleTechnologie="'CSS3'" />
        <TechnologieName :titleTechnologie="'Javascript'" :border="true" />
        <TechnologieName :titleTechnologie="'PHP'"/>
        <TechnologieName :titleTechnologie="'Smarty'" :border="true" />
        <TechnologieName :titleTechnologie="'HTML5'" />
        <TechnologieName :titleTechnologie="'CSS3'" :border="true" />
        <TechnologieName :titleTechnologie="'Javascript'"/>
        <TechnologieName :titleTechnologie="'PHP'" :border="true" />
        <TechnologieName :titleTechnologie="'Smarty'"/>
    </div>
</template>

<script>
import TechnologieName from './TechnologieName.vue';
export default {
    name: "Langages",
    components: { 
        TechnologieName 
    },
}
</script>

<style lang="scss">
.langages{
    display: flex;
    align-items: center;
    justify-content: flex-start;
}
</style>