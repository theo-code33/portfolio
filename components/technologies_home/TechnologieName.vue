<template>
    <span v-if="border" class="title-techologie-border">{{ titleTechnologie }}</span>
    <span v-else class="title-techologie">{{ titleTechnologie }}</span>
</template>

<script>
export default {
    name: 'TechnologieName',
    props: {
        titleTechnologie: {
            type: String,
            required: true
        },
        border: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="scss">
.title-techologie{
    font-size: 80px;
    font-weight: 400;
    color: #000;
    font-family: 'Mundial', sans-serif;
    -webkit-text-stroke: 2px #000;
    margin: 0 50px;
}
.title-techologie-border{
    font-size: 80px;
    font-weight: 400;
    color: transparent;
    font-family: 'Mundial', sans-serif;
    -webkit-text-stroke: 2px #000;
}
</style>