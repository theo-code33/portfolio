<template>
    <div class="project-item-container">
        <div class="img-hover" :style="`background: url(${image});`"></div>
        <NuxtLink :to=link :data-image=image>
            <div class="left">
                <h2>{{ title }}</h2>
                <div class="container-tags">
                    <span v-for="tag in tags" :key="tag">#{{ tag }}</span>
                </div>
            </div>
            <div class="right">
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="64.291" viewBox="0 0 100 64.291">
                    <path id="arrow-right" d="M1,35.645a3.571,3.571,0,0,1,3.571-3.571H88.8L66.324,9.6a3.576,3.576,0,1,1,5.057-5.057l28.57,28.57a3.571,3.571,0,0,1,0,5.057l-28.57,28.57a3.576,3.576,0,1,1-5.057-5.057L88.8,39.216H4.571A3.571,3.571,0,0,1,1,35.645Z" transform="translate(-1 -3.499)" fill-rule="evenodd"/>
                </svg>
            </div>
        </NuxtLink>
    </div>
</template>

<script>
export default {
    name: "ProjectItem",
    props: {
        title: String,
        tags: Array,
        image: String,
        link: String,
    },
    mounted(){
        this.$nextTick(() => {
            const img = this.$el.querySelector(`.img-hover`)
            const offset = this.$el.getBoundingClientRect()
            this.$el.addEventListener('mouseenter', (e) => {
                onmousemove = (event) => {
                    const x = event.pageX + 20
                    const y = event.pageY + 20
                    img.style.top = `${y}px`
                    img.style.left = `${x}px`
                    img.style.opacity = 1
                    img.style.transform = `scale(1)`

                }
            })
            this.$el.addEventListener('mouseleave', () => {
                img.style.opacity = 0
                img.style.top = `0px`
                img.style.left = `0px`
                img.style.transform = `scale(0)`
                onmousemove = null
            })
        })
    }
}
</script>

<style lang="scss">
    .project-item-container{
        width: 100%;
        height: 125px;
        border-bottom: 1px solid #C7D0D9;
        cursor: pointer;

        .img-hover{
            width: 300px;
            height: 200px;
            background-position: center !important;
            background-size: cover !important;
            border-radius: 10px;
            position: absolute;
            z-index: 1;
            opacity: 0;
            transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
            transform: scale(0);
        }

        a{
            display: flex;
            align-items: center;
            justify-content: space-between;
            text-decoration: none;
            color: rgba($color: #000000, $alpha: 0.5);
            transition: all 0.3s ease-in-out;
            cursor: pointer;
            span{
                font-size: 18px;
                font-weight: 400;
                margin: 0 5px;
                cursor: pointer;
            }

            h2{
                font-size: 60px;
                font-weight: 600;
                -webkit-text-stroke: 2px #000;
                color: #FFF;
                transition: all 0.3s ease-in-out;
                cursor: pointer;
            }

            svg{
                position: relative;
                left: -50px;
                transition: all 0.3s ease-in-out;
            }

            &:hover{
                color: #000000;
                h2{
                    color: #000;
                }
                svg{
                    left: 0;
                }
            }
        }
    }
    @media all and (max-width: 1024px) {
        header{
            padding: 0;
            h1{
                font-size: 100px !important;
            }
            .bottom_header_img{
                right: -180px;
            }
            .top_header{
                width: calc(100% - 100px);
                &_logo{
                    font-size: 20px;
                }
                &_nav{
                    li{
                        a{
                            font-size: 20px !important;
                        }
                    }
                }
            }
            .bottom_header{
                width: calc(100% - 100px);
            }
        }
    }
    @media all and (max-width: 767px) {
        .project-item-container{
            height: 110px;
            h2{
                font-size: 40px !important;
                margin-bottom: 10px;
            }
            .img-hover{
                display: none;
            }
            .right{
                display: none;
            }
            .container-tags{                
                display: flex;
                align-items: center;
                justify-content: flex-start;
                flex-wrap: wrap;
            }
            .left{
                width: 100%;
            }
        }
    }
</style>