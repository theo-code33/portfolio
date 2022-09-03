<template>
    <div class="card-technologie">
        <div class="card-technologie-img">
            <img :src="imgUrl" :alt="imgAlt">
        </div>
        <div class="card-technologie-text">
            <span>{{ name }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardTechnologie',
    props: {
        name: {
            type: String,
            required: true
        },
        imgUrl: {
            type: String,
            required: true
        },
        imgAlt: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss">
.card-technologie{
    margin: 30px 16px 30px 0;

    &-img{
        width: 260px;
        height: 260px;
        background-color: #F4F7FA;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 15px;

        img{
            width: 150px;
        }
    }
    &-text{
        font-size: 20px;
        font-weight: 400;
        color: #000;
        margin-top: 15px;
    }
}
</style>