<template>
    <footer>
        <div v-if="contact" class="contact-footer">
            <div class="contact-footer-img">
                <img src="/image_2.png" alt="Logo Call Me">
            </div>
            <div class="contact-footer-title">
                <p>
                    Une idée de projet ? 
                    <NuxtLink to="">
                        Contactez moi 
                        <svg>
                          <path id="arrow-right" d="M1,35.645a3.571,3.571,0,0,1,3.571-3.571H88.8L66.324,9.6a3.576,3.576,0,1,1,5.057-5.057l28.57,28.57a3.571,3.571,0,0,1,0,5.057l-28.57,28.57a3.576,3.576,0,1,1-5.057-5.057L88.8,39.216H4.571A3.571,3.571,0,0,1,1,35.645Z" fill="#fff"></path>
                        </svg>
                    </NuxtLink>            
                </p>
            </div>
        </div>
        <div class="link-footer">
            <ul>
                <li><a href="https://www.linkedin.com/in/theo-gillet/" target="_blank"><img src="../static/LinkedIn_logo_initials.png" alt="Logo Linkedin"></a></li>
            </ul>
            <ul>
                <li><NuxtLink to="/">Home</NuxtLink></li>
                <li><NuxtLink to="/">Projets</NuxtLink></li>
                <li><NuxtLink to="/">Contact</NuxtLink></li>
            </ul>
            <!-- <ul class="first-tab">
                <li class="first-link"><NuxtLink to="/">Home</NuxtLink></li>
                <li><a href="https://www.linkedin.com/in/theo-gillet/" target="_blank">Linkedin</a></li>
            </ul>
            <ul>
                <li class="first-link"><NuxtLink to="/">Projets</NuxtLink></li>
                <li><a href="https://github.com/theo-code33" target="_blank">GitHub</a></li>
            </ul>
            <ul class="last-tab">
                <li class="first-link"><a href="https://www.malt.fr/profile/theogillet" target="_blank">Malt</a></li>
                <li><NuxtLink to="/">Contact</NuxtLink></li>
            </ul> -->
        </div>
            <ul>
                <li><NuxtLink to="/">Site Map</NuxtLink></li>
                <li><NuxtLink to="/">Mentions Légales</NuxtLink></li>
            </ul>
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
    padding: 50px 0 30px;
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
                    &:hover{
                        text-decoration: underline;

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

            &.first-tab{
                align-items: flex-start;
            }
            &.last-tab{
                align-items: flex-end;
            }
            li{
                a{
                    color: #fff;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    font-family: "Mundial", sans-serif;
                    font-weight: 400;
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
}
</style>