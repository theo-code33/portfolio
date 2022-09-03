<template>
    <div class="cms">
        <h3>CMS</h3>
        <div class="cms-container">
            <CardTechnologie :imgUrl="'/WordPress-logotype-wmark.png'" :imgAlt="'Logo Wordpress'" :name="'Wordpress'"/>
            <CardTechnologie :imgUrl="'/Prestashop-logo.png'" :imgAlt="'Logo Prestashop'" :name="'Prestashop'"/>
        </div>
    </div>
</template>

<script>
import CardTechnologie from './CardTechnologie.vue'

export default {
    name: 'Cms',
    components: {
        CardTechnologie,
    }
}
</script>

<style lang="scss">
.cms{
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