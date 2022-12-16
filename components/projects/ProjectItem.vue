<template>
    <div class="project-item">
        <div class="project-item-wrapper">
            <div class="left-side">
                <h2>{{ title }}</h2>
                <div class="tags" :style="[collaboration ? {'margin-bottom': '25px'} : {'margin-bottom': '50px'}]">
                    <span v-for="tag in tags" :key="tag">#{{ tag }}</span>
                </div>
                <span class="collaboration" v-if="collaboration">Réalisé en collaboration avec <a :href="collaboration.link">{{ collaboration.name }}</a></span>
                <p>{{ description }}</p>
                <a class="link-website" :href="link" target="_blank">Visiter le site</a>
            </div>
            <div class="right-side">
                <a :href="link" target="_blank">
                    <img :src="image" :alt='"Mockup "+title'>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProjectItem",
    props: {
        title: {
            type: String,
            required: true
        },
        tags: {
            type: Array,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        collaboration: {
            type: Object,
            required: false
        },
        link: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss">
.project-item{
    padding: 50px 0;
    border-bottom: 1px solid #C7D0D9;

    .project-item-wrapper{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .left-side{
            width: 50%;
            font-family: 'Mundial', sans-serif;
            h2{
                font-size: 40px;
                font-weight: 600;
            }
            p{
                font-size: 18px;
                font-weight: 100;
                line-height: 24px;
            }
            .tags{
                span{
                    font-size: 18px;
                    font-weight: 300;
                    padding: 0 2px;

                    &:first-child{
                        padding-left: 0;
                    }
                }
            }
            .collaboration{
                display: block;
                margin-bottom: 25px;
                text-decoration: underline;
                
                a{
                    color: #000;
                    text-decoration: none;
                    position: relative;
                    transition: all .3s ease;
                    &::before{
                        content: '';
                        position: absolute;
                        left: 0;
                        top: 50%;
                        width: 0;
                        height: 200%;
                        background: #000;
                        z-index: -1;
                        transition: all .3s ease;
                        transform: translateY(-50%);
                    }

                    &:hover{
                        color: #FFF;
                        &::before{
                            width: 100%;
                        }
                        
                    }
                }
            }
            .link-website{
                display: inline-block;
                margin-top: 25px;
                color: #000;
                text-decoration: none;
                position: relative;

                &::before{
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 100%;
                    width: 25%;
                    height: 1px;
                    background: #000;
                    transition: all .3s ease;
                }

                &:hover{
                    &::before{
                        width: 100%;
                    }
                }
            }
        }

        .right-side{
            width: 45%;
            img{
                width: 100%;
                max-height: 400px;
                border-radius: 10px;
                object-fit: cover;
            }
        }
    }
}

@media all and (max-width: 1024px) {
    .project-item{
        // width: calc(100% - 100px) !important;
        margin: auto;
        .project-item-wrapper{
            flex-direction: column;
    
            .left-side{
                width: 100% !important;
                margin-bottom: 30px;
            }
    
            .right-side{
                width: 100% !important;
            }
        }
    }
}
@media all and (max-width: 767px) {
    .project-item{
        width: 100% !important;
        .left-side{
            h2{
                font-size: 30px;
            }
            .tags{
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                justify-content: flex-start;
            }
        }
    }
}
</style>