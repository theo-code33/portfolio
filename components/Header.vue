<template>
    <header>
        <div class="top_header">
            <div class="top_header_logo">
                <NuxtLink to="/">@Théo Gillet</NuxtLink>
            </div>
            <nav class="top_header_nav" v-if="widthDevice > 767">
                <ul>
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/projets">Projets</NuxtLink></li>
                    <li><NuxtLink to="/contact">Contact</NuxtLink></li>
                </ul>
            </nav>
            <nav v-else>
                <button  @click.prevent="openMenu()" class="openMenuButton">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#FFF" class="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                </button>
                <div class="burger-menu">
                    <div class="close-container">
                        <button @click.prevent="closeMenu()">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                            </svg>
                        </button>
                    </div>
                    <ul class="main-link">
                        <li><NuxtLink to="/">Home</NuxtLink></li>
                        <li><NuxtLink to="/projets">Projets</NuxtLink></li>
                        <li><NuxtLink to="/contact">Contact</NuxtLink></li>
                    </ul>
                    <ul class="contact-link">
                        <a href="tel:0614590394">06 14 59 03 94</a>
                        <a href="mailto:gillettheo1@gmail.com">gillettheo1@gmail.com</a>
                    </ul>
                </div>
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
    },
    data(){
        return {
            widthDevice: window.innerWidth,
            menuOpen: false
        }
    },
    methods: {
        openMenu(){
            const burgerMenu = this.$el.querySelector('.burger-menu');
            console.log(burgerMenu);
            burgerMenu.style.right = 0
            this.menuOpen = true
        },
        closeMenu(){
            const burgerMenu = this.$el.querySelector('.burger-menu');
            console.log(burgerMenu);
            burgerMenu.style.right = '-100vw'
            this.menuOpen = false
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

@media all and (max-width: 767px) {
    header{
        .top_header{
            width: calc(100% - 50px) !important;
            .openMenuButton{
                background: transparent;
                border: none;       
            }
            .burger-menu{
                z-index: 9999;
                position: fixed;
                width: 100%;
                height: 100vh;
                top: 0;
                right: -100vw;
                background: #000;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-around;
                transition: all 0.3s ease-in-out;
    
                .close-container{
                    width: calc(100% - 50px);
                    display: flex;
                    justify-content: flex-end;
                    button{
                        background: none;
                        border: none;
                        color: #fff;
                        font-size: 24px;
                        margin: 0 20px;
                    }
                }
    
                .main-link{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: space-around;
                    height: 40%;
                    a{
                        font-size: 40px;
                    }
    
                }
                .contact-link{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: space-between;
                    width: calc(100% - 50px);
                    a{
                        color: #fff;
                        text-decoration: none;
                        font-family: 'Mundial', sans-serif;
                        &:nth-child(1){
                            margin-bottom: 10px;
                        }
                    }
                }
            }
        }
        .bottom_header{
            width: calc(100% - 50px) !important;
            &_title{
                h1{
                    font-size: 50px !important;
                }
            }
            &_img{
                width: 250px !important;
                right: 40% !important;
            }

        }
    }
}
</style>