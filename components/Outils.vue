<template>
    <div class="outils">
        <h3>Outils</h3>
        <div class="outils-container">
            <CardTechnologie :imgUrl="'/Git_icon.svg.png'" :imgAlt="'Logo Git'" :name="'Git'"/>
            <CardTechnologie :imgUrl="'/adobe-xd-logo.png'" :imgAlt="'Logo Adobe XD'" :name="'Adobe XD'"/>
        </div>
    </div>
</template>

<script>
import CardTechnologie from './CardTechnologie.vue'

export default {
    name: 'Outils',
    components: {
        CardTechnologie,
    }
}
</script>

<style lang="scss">
.outils{
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