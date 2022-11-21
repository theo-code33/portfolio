<template>
    <div class="outils">
        <TechnologieName :titleTechnologie="'Wordpress'" />
        <TechnologieName :titleTechnologie="'Prestashop'" :border="true" />
        <TechnologieName :titleTechnologie="'Git'"  />
        <TechnologieName :titleTechnologie="'AdobeXD'" :border="true" />
        <TechnologieName :titleTechnologie="'Wordpress'" />
        <TechnologieName :titleTechnologie="'Prestashop'" :border="true" />
        <TechnologieName :titleTechnologie="'Git'"  />
        <TechnologieName :titleTechnologie="'AdobeXD'" :border="true" />
        <TechnologieName :titleTechnologie="'Wordpress'" />
        <TechnologieName :titleTechnologie="'Prestashop'" :border="true" />
        <TechnologieName :titleTechnologie="'Git'"  />
        <TechnologieName :titleTechnologie="'AdobeXD'" :border="true" />
        <TechnologieName :titleTechnologie="'Wordpress'" />
        <TechnologieName :titleTechnologie="'Prestashop'" :border="true" />
        <TechnologieName :titleTechnologie="'Git'"  />
        <TechnologieName :titleTechnologie="'AdobeXD'" :border="true" />
        <TechnologieName :titleTechnologie="'Wordpress'" />
        <TechnologieName :titleTechnologie="'Prestashop'" :border="true" />
        <!-- <TechnologieName :titleTechnologie="'Git'"  />
        <TechnologieName :titleTechnologie="'AdobeXD'" :border="true" />
        <TechnologieName :titleTechnologie="'Wordpress'" />
        <TechnologieName :titleTechnologie="'Prestashop'" :border="true" />
        <TechnologieName :titleTechnologie="'Git'"  />
        <TechnologieName :titleTechnologie="'AdobeXD'" :border="true" /> -->
    </div>
</template>

<script>
import TechnologieName from './TechnologieName.vue';
export default {
    name: "Outils",
    components: { 
        TechnologieName 
    }
}
</script>

<style lang="scss">
.outils{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 20px 0;
}
</style>