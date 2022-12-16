<template>
    <div class="testimonial-item">
        <div class="testimonial-item-top">
            <div class="testimonial__img">
                <img :src="testimonial.img" :alt="testimonial.name">
            </div>
            <div class="testimonial__content">
                <p class="testimonial__content__name">{{ testimonial.name }}</p>
                <span class="testimonial__content__job">{{ testimonial.job }}</span>
            </div>
        </div>
        <div class="testimonial-item-bottom">
            <p class="testimonial__content__text">{{ testimonial.text }}</p>
        </div>
    </div>
</template>
<script>
export default {
    name: "TestimonialItem",
    props: {
        testimonial: {
            type: Object,
            required: true
        }  
    }
}
</script>
<style lang="scss">
.testimonial-item{
    // width: 100%;
    height: fit-content;
    background-color: #fff;
    border-radius: 10px;
    padding: 30px 50px;
    font-family: 'Mundial', sans-serif;
    cursor: grab;

    &-top{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-bottom: 30px;
        img{
            width: 75px;
            height: 75px;
            border-radius: 75px;
            background-color: red;
            display: block;
            margin-right: 20px;
        }
        p{
            font-size: 20px;
            font-weight: 600;
            margin: 0 0 5px 0;
        }
        span{
            font-size: 14px;
            font-weight: 400;
            color: rgba($color: #000000, $alpha: 0.4);
        }
    }
    &-bottom{
        p{
            font-size: 16px;
            font-weight: 400;
            color: rgba($color: #000000, $alpha: 0.6);
            line-height: 22px;
        }
    }
}
@media all and (max-width: 767px) {
    .testimonial-item{
        padding: 30px 30px;
    }
}
</style>

