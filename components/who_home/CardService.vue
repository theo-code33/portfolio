<template>
    <div class="card-service">
        <div class="top-card">
            <img :src="img" :alt="alt">
            <h2>{{ title }}</h2>
        </div>
        <div class="bottom-card">
            <p>{{ description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardService',
    props: {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        img: {
            type: String,
            required: true
        },
        alt: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss">
    .card-service{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        background-color: #F4F7FA;
        border-radius: 10px;
        padding: 35px 30px;
        margin: 10px 0;

        .top-card{
            display: flex;
            align-items: center;
            margin-bottom: 30px;

            h2{
                margin-left: 50px;
                font-size: 22px;
                font-weight: 600;
            }

            img{
                width: 70px;
                height: 70px;
                object-fit: contain;
            }
        }
        .bottom-card{
            p{
                font-size: 18px;
                font-weight: lighter;
            }
        }
    }
</style>