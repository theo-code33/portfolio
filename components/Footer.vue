<template>
    <footer>
        <div v-if="contact" class="contact-footer">
            <div class="contact-footer-img">
                <img src="/image_2.png" alt="Logo Call Me">
            </div>
            <div class="contact-footer-title">
                <p>
                    Une idée de projet ? 
                    <NuxtLink to="/contact">
                        <span class="text">
                            Contactez moi 
                        </span>
                        <svg>
                          <path id="arrow-right" d="M1,35.645a3.571,3.571,0,0,1,3.571-3.571H88.8L66.324,9.6a3.576,3.576,0,1,1,5.057-5.057l28.57,28.57a3.571,3.571,0,0,1,0,5.057l-28.57,28.57a3.576,3.576,0,1,1-5.057-5.057L88.8,39.216H4.571A3.571,3.571,0,0,1,1,35.645Z" fill="#fff"></path>
                        </svg>
                    </NuxtLink>            
                </p>
            </div>
        </div>
        <div class="link-footer">
            <ul class="social-media">
                <li>
                    <a href="https://www.linkedin.com/in/theo-gillet/" target="_blank">
                        <img src="../static/LinkedIn_logo_initials.png" alt="Logo Linkedin">
                    </a>
                </li>
                <li>
                    <a href="https://www.malt.fr/profile/theogillet" target="_blank">
                        <img src="../static/malt-logo.png" alt="Logo Malt">
                    </a>
                </li>
                <li>
                    <a href="https://github.com/theo-code33" target="_blank">
                        <img src="/Font_Awesome_5_brands_github.svg.png" alt="Logo GitHub">
                    </a>
                </li>
            </ul>
            <ul>
                <li><NuxtLink to="/">Home</NuxtLink></li>
                <li><NuxtLink to="/projets">Projets</NuxtLink></li>
                <li><NuxtLink to="/contact">Contact</NuxtLink></li>
            </ul>
        </div>
        <div class="legal-link">
            <ul>
                <li><NuxtLink to="/">Site Map</NuxtLink></li>
                <li><NuxtLink to="/">Mentions Légales</NuxtLink></li>
            </ul>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    props: {
        contact: {
            type: Boolean,
            default: true
        }
    }
}
</script>

<style lang="scss">
footer{
    padding: 50px 0 20px;
    background: #0B0C0E;

    .contact-footer{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 60px;
        &-img{
            width: 200px;
            height: 200px;

            img{
                width: 100%;
                height: 100%;
            }
        }
        &-title{
            font-family: 'Mundial', sans-serif;
            p{
                display: flex;
                align-items: center;
                color: #fff;
                font-size: 60px;
                font-weight: 600;
                margin: 0;
                a{
                    display: flex;
                    align-items: center;
                    margin-left: 10px;
                    color: #fff;
                    text-decoration: none;
                        transition: all 0.3s ease;
                    svg {
                        transition: all 0.3s ease;
                        margin-left: 10px;
                        margin-top: 10%;
                    }
                    .text{
                        position: relative;
                        -webkit-text-stroke: 2px #FFF;
                        color: transparent;
                        transition: all 0.3s ease;
                        cursor: pointer;
                        
                        &::before{
                        content: '';
                        width: 100%;
                        height: 4px;
                        border-radius: 3px;
                        background-color: #FFF;
                        position: absolute;
                        bottom: -4px;
                        left: 0;
                        transform-origin: right;
                        transform: scale(0);
                        transition: transform 0.3s ease-in-out;
                        
                    }
                    }
                    &:hover{
                        .text{
                            color: #fff;
                            &::before{
                                transform-origin: left;
                                transform: scale(1);
                            }
                        }
                        svg{
                            transform: translateX(30px);
                        }
                    }
                }
            }
        }
    }
    .link-footer{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 40%;
        margin: auto;


        ul{
            width: 100%;
            list-style: none;
            display: flex;
            // flex-direction: column;
            align-items: center;
            justify-content: space-between;

            &.social-media{
                justify-content: center;
                margin-bottom: 50px;
                li{
                    width: auto;
                    margin: 0 15px;
                    a{
                        &::before{
                            width: 0;
                        }
                        img{
                            width: 50px;
                            height: 50px;
                            border-radius: 40px;
                            filter: grayscale(0.5);
                            transition: all 0.1s ease;
                        }

                        &:hover{
                            img{
                                filter: grayscale(0);
                            }
                        }
                    }
                }
            }

            &.first-tab{
                align-items: flex-start;
            }
            &.last-tab{
                align-items: flex-end;
            }
            li{
                width: 100%;
                text-align: center;
                a{
                    color: #fff;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    font-family: "Mundial", sans-serif;
                    font-weight: 300;
                    font-size: 24px;
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

            .first-link{
                margin-bottom: 30px;
            }
        }
    }
    .legal-link{
        width: 100%;
        padding: 20px 0 0;
        margin-top: 35px;
        border-top: 1px solid rgba($color: #FFF, $alpha: 0.2);
        ul{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            list-style: none;

            li{
                margin: 0 10px;
                a{
                    color: #FFF;
                    font-family: 'Mundial', sans-serif;
                    position: relative;
                    text-decoration: none;
                    font-weight: 300;
                    font-size: 14px;
                    &::before{
                        content: '';
                        width: 100%;
                        height: 1px;
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
}

@media all and (max-width: 1024px) {
    .contact-footer{
        align-items: flex-end !important;
        &-img{
            height: 100% !important;
        }
        &-title{
            p{
                align-items: flex-start !important;
                flex-direction: column;
                justify-content: center;
                font-size: 40px !important;
                
                a{
                    font-size: 40px !important;
                    margin-left: 0 !important;
                    svg{
                        font-size: 40px !important;
                        height: 100px;
                        margin-top: 25px !important;
                    }
                }
            }
        }
    }
}
@media all and (max-width: 767px) {
    footer{
        .contact-footer{
            .contact-footer-title{
                p{
                    font-size: 30px !important;
                    a{
                        font-size: 30px !important;

                        .text{
                            -webkit-text-stroke: 1px #FFF;
                        }
                    }
                }
                svg{
                    display: none;
                }
            }
        }
        .link-footer{
            width: calc(100% - 100px);
        }
    }
}
</style>