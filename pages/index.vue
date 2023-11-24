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
                                <div class="takeCareTitle">
                                    <div class="takeCareTitle-anime">
                                        <div class="takeCareTitle-anime-obj"></div>
                                    </div>
                                </div>
                                <img class="takeCareImg" :src="item.image" />
                            </a>
                        </div>
                    </swiper-slide>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
            </section>
            <section class="fiveMin">
                <div class="bgCircle">
                    <div class="bgCircle-anime bgCircleAnime">
                    </div>
                </div>
                <div class="title">
                    <div class="title-anime titleAnime">
                        <div class="title-anime-obj"></div>
                    </div>
                </div>
                <div class="subTitle">
                    <div class="subTitle-anime subTitleAnime">
                        <div class="subTitle-anime-obj"></div>
                    </div>
                </div>
                <div class="intro">
                    <div :class="`intro__${index + 1}`" v-for="(item, index) in introList" :key="'intro' + index" data-anime>
                        <div :class="`intro__${index + 1}-anime introAnime`">
                            <div :class="`intro__${index + 1}-anime-box`">
                                <div class="circle">
                                    <div class="line"></div>
                                </div>
                                <div class="picture">
                                    <img :src="item.image" alt="">
                                </div>
                            </div>
                            <div :class="`intro__${index + 1}-anime-title`">{{ item.title }}</div>
                            <div :class="`intro__${index + 1}-anime-des`">
                                <img :src="item.des" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bottomLine">
                    <div class="bottomLine-anime bottomLineAnime">
                        <div class="bottomLine-anime-obj"></div>
                    </div>
                </div>
                <div class="moreBtn">
                    <div class="moreBtn-anime moreBtnAnime">
                        <div class="moreBtn-anime-obj"></div>
                    </div>
                </div>
                <div class="moreBtn">
                    <div class="moreBtn-anime moreBtnAnime">
                        <div class="moreBtn-anime-obj"></div>
                    </div>
                </div>
                <div class="mapTitle">
                    <div class="mapTitle-anime mapTitleAnime">
                        <div class="mapTitle-anime-obj"></div>
                    </div>
                </div>
                <div class="height"></div>
            </section>
            <section class="map">
                <div class="mapBg">
                    <div class="mapBg-anime mapBgAnime">
                        <div class="mapBg-anime-obj">
                            <div class="mapBg-anime-obj-mask"></div>
                        </div>
                    </div>
                </div>
                <div class="mask">
                    <div class="mask-anime maskAnime">
                        <div class="mask-anime-obj"></div>
                    </div>
                </div>
                <!-- <div class="intro">
                    <div :class="`intro__${index + 1}`" v-for="(item, index) in introList" :key="'intro' + index" data-anime>
                        <div :class="`intro__${index + 1}-anime introAnime`">
                            <div :class="`intro__${index + 1}-anime-box`">
                                <div class="circle">
                                    <div class="line"></div>
                                </div>
                                <div class="picture">
                                    <img :src="item.image" alt="">
                                </div>
                            </div>
                            <div :class="`intro__${index + 1}-anime-title`">{{ item.title }}</div>
                            <div :class="`intro__${index + 1}-anime-des`">
                                <img :src="item.des" alt="">
                            </div>
                        </div>
                    </div>
                </div> -->
                <div class="height"></div>
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
                loop: true,
                slidesPerView: 1,
                spaceBetween: 0,
                width: 955,
                centeredSlides:true,
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
                //direction:'horizontal',
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                pagination:{
                    el: '.swiper-pagination',
                    clickable: true,
                    type: 'bullets',
                }
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
            introList:[
                {
                    image: require('@/static/image/pc/Ellipse-14.png'),
                    title:'服務對象',
                    des: require('@/static/image/pc/introDes1.png'),
                },
                {
                    image: require('@/static/image/pc/Ellipse-11.png'),
                    title:'申請流程',
                    des: require('@/static/image/pc/introDes2.png'),
                },
                {
                    image: require('@/static/image/pc/Ellipse-18.png'),
                    title:'服務內容',
                    des: require('@/static/image/pc/introDes3.png'),
                },
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
        },100)
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
