<template>
    <header>
        <div class="top_header">
            <div class="top_header_logo">
                <NuxtLink to="/">@Théo Gillet</NuxtLink>
            </div>
            <nav class="top_header_nav">
                <ul>
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/projets">Projets</NuxtLink></li>
                    <li><NuxtLink to="/contact">Contact</NuxtLink></li>
                </ul>
            </nav>
        </div>
        <div class="bottom_header">
            <div class="bottom_header_title">
                <h1>{{ titleMain }} <span class="stroke-title">{{ titleStroke }}</span></h1>
            </div>
        </div>
            <div class="bottom_header_img">
                <img :src="img" :alt="alt">
            </div>
    </header>
</template>

<script>
export default {
    name: 'Header',
    props: {
        titleMain: {
            type: String,
            default: 'Développeur web'
        },
        titleStroke: {
            type: String,
            default: 'front-end junior'
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
header{
    height: 730px;
    background: #C7D0D9;
    font-family: 'Mundial', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    // padding: 50px 0 0 0;
    overflow: hidden;
    position: relative;

    .top_header{
        width: calc(100% - 140px);
        margin: 50px auto 100px;
        max-width: 1600px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        &_logo{
            font-size: 24px;
            a{
                text-decoration: none;
                font-weight: lighter;
                color: #FFF;
            }
        }

        ul{
            list-style: none;
            display: flex;
            align-items: center;
            justify-content: space-between;

            li{
                margin: 0 17px;

                a{
                    text-decoration: none;
                    font-size: 24px;
                    color: #FFF;
                    font-weight: lighter;
                    position: relative;
                    
                    &::before{
                        content: '';
                        width: 100%;
                        height: 2px;
                        border-radius: 3px;
                        background-color: #FFF;
                        position: absolute;
                        bottom: -4px;
                        left: 0;
                        transform-origin: right;
                        transform: scale(0);
                        transition: transform 0.3s ease-in-out;
                    }

                    &:hover{
                        &::before{
                            transform-origin: left;
                            transform: scale(1);
                        }
                    }
                }
            }
        }
    }
    .bottom_header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
        width: calc(100% - 140px);
        margin: auto;
        max-width: 1600px;

        &_title{
            h1{
                font-size: 150px;
                color: #fff;
                font-weight: 600;
                padding-bottom: 260px;
                .stroke-title{
                    color: transparent;
                    -webkit-text-stroke: 2px #fff;
                }
            }
        }

        &_img{
            position: absolute;
            top: 314px;
            right: -60px;
            width: 580px;

        }
    }
}
</style>