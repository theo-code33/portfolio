<template>
    <div class="languages">
        <h3>Languages</h3>
        <div class="languages-container">
            <CardTechnologie :imgUrl="'/1200px-HTML5_logo_and_wordmark.svg.png'" :imgAlt="'Logo HTML 5'" :name="'HTML 5'"/>
            <CardTechnologie class="css-card" :imgUrl="'/CSS3_logo_and_wordmark.svg.png'" :imgAlt="'Logo CSS 3'" :name="'CSS 3'"/>
            <CardTechnologie class="radius-card" :imgUrl="'/1200px-Unofficial_JavaScript_logo_2.png'" :imgAlt="'Logo CSS 3'" :name="'CSS 3'"/>
            <CardTechnologie :imgUrl="'/PHP-logo.svg.png'" :imgAlt="'Logo PHP'" :name="'PHP'"/>
            <CardTechnologie class="radius-card" :imgUrl="'/smarty_preview.png'" :imgAlt="'Logo Smarty'" :name="'Smarty'"/>
        </div>
    </div>
</template>

<script>
import CardTechnologie from './CardTechnologie.vue'

export default {
    name: 'Languages',
    components: {
        CardTechnologie,   
    }
}
</script>

<style lang="scss">
.languages{
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
    .radius-card{
        img{
            border-radius: 20px;
        }
    }
    .css-card{
        img{
            width: 106px;
        }
    }
}
</style>