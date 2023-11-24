<template>
    <div id="main" >
        <Header @navBarOpen="navBarOpen = true" />
        <right-side-bar />
        <div class="container" data-scroll-container>
            <section class="banner">
                <div class="title">
                    <div :class="`title__${index + 1}`" v-for="(item, index) in 6" :key="'title' + index" data-anime>
                        <div :class="`title__${index + 1}-anime titleAnime`">
                            <div :class="`title__${index + 1}-anime-obj`"></div>
                        </div>
                    </div>
                </div>
                <div class="scrollArrow">
                    <div class="scrollArrow-anime scrollArrowAnime">
                        <div class="scrollArrow-anime-obj"></div>
                    </div>
                </div>
                <div class="height"></div>
            </section>
            <section class="longTeam">
                <div class="picture">
                    <div :class="`picture__${index + 1}`" v-for="(item, index) in 2" :key="'picture' + index" data-anime>
                        <div :class="`picture__${index + 1}-anime pictureAnime`">
                            <div :class="`picture__${index + 1}-anime-obj`"></div>
                        </div>
                    </div>
                </div>
                <div class="subTitle">
                    <div class="subTitle-anime subTitleAnime">
                        <div class="subTitle-anime-obj"></div>
                    </div>
                </div>
                <div class="txtContain">
                    <span class="title">長照2.0，<br />讓照顧的路上有專業相挺</span>
                    <textarea class="txtBox" readonly>台灣走向超高齡社會，速度比想像中還要快又急，隨著人口老化加速，未來需要照顧年長父母的青壯人口，只會增加，不會減少。
老年人壽命的延長，也表示照顧的時間會愈來愈長；甚至是在自己退休之後，仍須持續照顧長輩。
「上有高堂，下有嗷嗷待哺」，三明治世代所面臨的困境，才是最需要協助的一群人。

面對長照，經濟協助外，對「照顧者」提供專業協助更是關鍵！
                    </textarea>
                </div>
                <div class="longTeamLine">
                    <div class="longTeamLine-anime longTeamLineAnime">
                        <div class="longTeamLine-anime-obj"></div>
                    </div>
                </div>
                <div class="height"></div>
            </section>
            <section class="takeCare">
                <div class="title">
                    <div class="title-anime titleAnime">
                        <div class="title-anime-obj"></div>
                    </div>
                </div>
                <div class="height"></div>
            </section>
            <section class="takeCareSwip">
                <swiper class="swiper" :options="swiperOption">
                    <swiper-slide :class="`takeCareImg__${index + 1} takeCareImgBox`" v-for="(item, index) in takeCareImgList" :key="'takeCareImg' + index" data-anime>
                        <div :class="`takeCareImg__${index + 1}-anime takeCareImgAnime`">
                            <a :href="item.url" target="_blank">
                                <img class="takeCareImg" :src="item.image" />
                            </a>
                        </div>
                    </swiper-slide>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                </swiper>
            </section>
        </div>
        <!-- <Footer /> -->
        <Nav-bar @navBarOpen="navBarOpen = false" v-if="navBarOpen" />
    </div>
</template>

<script>
import LocomotiveScroll from 'locomotive-scroll';
import rightSideBar from '../components/rightSideBar.vue'
import Swiper from 'swiper';
export default {
    components: { rightSideBar },
    name: 'IndexPage',
    data() {
        return {
            navBarOpen: false,
            swiperOption: {
                autoplay: 1500,
                // speed: 300,
                loop: false,
                slidesPerView: 1.5,
                spaceBetween: -1,
                // breakpoints: {
                //     1024: {
                //         slidesPerView: 2,
                //     },
                //     768: {
                //         slidesPerView: 1,
                //         spaceBetween: 100,
                //     },
                //     375: {
                //         slidesPerView: 1,
                //         spaceBetween: 100,
                //     },
                // },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            },
            takeCareImgList:[
                {
                    url:'https://www.cw.com.tw/article/5125049',
                    image: require('@/static/image/pc/takeCareImg1.png')
                },
                {
                    url:'https://www.cw.com.tw/article/5124631',
                    image: require('@/static/image/pc/takeCareImg2.png')
                },
                {
                    url:'https://www.cw.com.tw/article/5123858',
                    image: require('@/static/image/pc/takeCareImg3.png')
                }
            ],
            isMobile: false,
        }
    },
    mounted() {
        this.isDevice()
        const self =this
        
        // self.$nextTick(function () {
            
        //     //var mySwiper = new Swiper('.swiper',{})
        //     const scroll = new LocomotiveScroll({
        //         el: document.querySelector('[data-scroll-container]'),
        //         smooth: true
        //     }); 
        // },1000)
        setTimeout(()=>{
            const scroll = new LocomotiveScroll({
                el: document.querySelector('[data-scroll-container]'),
                smooth: true
            });
        },50)
        // window.bannerAnime()
        // window.scrollAnime(this.isMobile)
        // addEventListener('resize',()=>{
        //     this.isDevice()
        // })
        
    },
    methods: {
        isDevice() {
            if (window.innerWidth < 768) {
                this.isMobile = true
            } else {
                this.isMobile = false
            }
        }
    },
}
</script>
