<template>
    <div id="main" >
        <Header @navBarOpen="navBarOpen = true" :isMobile="isMobile" @increment="scrollTo" />
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
                    <a @click="scrollTo('.longTeam')">
                        <div class="scrollArrow-anime scrollArrowAnime">
                            <div class="scrollArrow-anime-obj"></div>
                        </div>
                    </a>
                </div>
                <div class="height"></div>
            </section>
            <section class="longTeam">
                <div class="picture">
                    <div :class="`picture__${index + 1}`" v-for="(item, index) in 2" :key="'picture' + index" data-anime>
                        <div :class="`picture__${index + 1}-anime pictureAnime`" data-scroll data-scroll-speed="-2"  data-scroll-direction="horizontal">
                            <div :class="`picture__${index + 1}-anime-obj`"></div>
                        </div>
                    </div>
                </div>
                <div class="subTitle">
                    <div class="subTitle-anime subTitleAnime" data-scroll data-scroll-speed="-1"  data-scroll-direction="vertical">
                        <div class="subTitle-anime-obj"></div>
                    </div>
                </div>
                <div class="txtContain" data-scroll data-scroll-speed="2"  data-scroll-direction="horizontal">
                    <span class="title">長照2.0，<br />讓照顧的路上有專業相挺</span>
                    <div class="subTitle">
                        <div class="subTitle-anime subTitleAnime">
                            <div class="subTitle-anime-obj"></div>
                        </div>
                    </div>
                    <textarea class="txtBox" readonly>台灣走向超高齡社會，速度比想像中還要快又急，隨著人口老化加速，未來需要照顧年長父母的青壯人口，只會增加，不會減少。
老年人壽命的延長，也表示照顧的時間會愈來愈長；甚至是在自己退休之後，仍須持續照顧長輩。
「上有高堂，下有嗷嗷待哺」，三明治世代所面臨的困境，才是最需要協助的一群人。

面對長照，經濟協助外，對「照顧者」提供專業協助更是關鍵！
                    </textarea>
                </div>
                <div class="longTeamLine">
                    <div class="longTeamLine-anime longTeamLineAnime" data-scroll data-scroll-speed="2"  data-scroll-direction="horizontal">
                        <div class="longTeamLine-anime-obj"></div>
                    </div>
                </div>
                <div class="height"></div>
            </section>
            <section class="takeCare">
                <div class="title">
                    <div class="title-anime titleAnime" data-scroll data-scroll-speed="2"  data-scroll-direction="vertical">
                        <div class="title-anime-obj"></div>
                    </div>
                </div>
                <div class="height"></div>
            </section>
            <section class="takeCareSwip">
                <swiper class="swiper" :options="swiperOption">
                    <swiper-slide :class="`takeCareImg__${index + 1} takeCareImgBox`" v-for="(item, index) in takeCareImgList" :key="'takeCareImg' + index" data-anime>
                        <div :class="`takeCareImg__${index + 1}-anime takeCareImgAnime`" data-scroll data-scroll-speed="-1">
                            <a :href="item.url" target="_blank">
                                <img class="takeCareImg" :src="item.image" />
                                <div class="takeCareTitle">
                                    <div class="title1">{{ item.title }}</div>
                                    <div class="title2">{{ item.title2 }}</div>
                                    <div class="des">{{ item.des }}</div>
                                </div>
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
                    <div class="title-anime titleAnime" data-scroll data-scroll-speed="2"  data-scroll-direction="vertical">
                        <div class="title-anime-obj"></div>
                    </div>
                </div>
                <div class="subTitle">
                    <div class="subTitle-anime subTitleAnime" data-scroll data-scroll-speed="2"  data-scroll-direction="vertical">
                        <div class="subTitle-anime-obj"></div>
                    </div>
                </div>
                <div class="intro">
                    <div :class="`intro__${index + 1}`" v-for="(item, index) in introList" :key="'intro' + index" data-anime>
                        <div :class="`intro__${index + 1}-anime introAnime`">
                            <div :class="`intro__${index + 1}-anime-box`"  data-scroll data-scroll-id="fiveMin">
                                <div :class="`circle__${index + 1} circle`"  >
                                    <div class="line"></div>
                                </div>
                                <div class="picture">
                                    <img :src="item.image" alt="">
                                </div>
                            </div>
                            <div :class="`intro__${index + 1}-anime-title`">{{ item.title }}</div>
                            <div :class="`intro__${index + 1}-anime-des`">
                                <img :src="item.des" alt="" v-if="!isMobile">
                                <img :src="item.mbDes" alt="" v-else>
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
                    <a href="https://event.cw.com.tw/2023mohw/Infographic.pdf" target="_blank">
                        <div class="moreBtn-anime moreBtnAnime">
                            <div class="moreBtn-anime-obj"></div>
                            <div class="btnIcon">
                                <div class="btnIcon-anime">
                                    <div class="btnIcon-anime-obj"></div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="mapTitle">
                    <div class="mapTitle-anime mapTitleAnime" data-scroll data-scroll-speed="2"  data-scroll-direction="vertical">
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
                <div class="introImg1" >
                    <div :class="`introImg1__${index + 1}`" v-for="(item, index) in 4" :key="'introImg1' + index" data-anime >
                        <div :class="`introImg1__${index + 1}-anime introImg1Anime`"  data-scroll data-scroll-speed="-1"  data-scroll-direction="horizontal">
                            <div :class="`introImg1__${index + 1}-anime-obj`">{{ item.title }}</div>
                        </div>
                    </div>
                </div>
                <div class="introImg2">
                    <div :class="`introImg2__${index + 1}`" v-for="(item, index) in 2" :key="'introImg2' + index" data-anime>
                        <div :class="`introImg2__${index + 1}-anime introImg1Anime`" data-scroll data-scroll-speed="-1"  data-scroll-direction="horizontal">
                            <div :class="`introImg2__${index + 1}-anime-obj`">{{ item.title }}</div>
                        </div>
                    </div>
                </div>
                <div class="introImg3">
                    <div class="introImg3-anime introImg3Anime" data-scroll data-scroll-speed="-1"  data-scroll-direction="horizontal">
                        <div class="introImg3-anime-obj"></div>
                    </div>
                </div>
                <div class="intro">
                    <div :class="`intro__${index + 1}`" v-for="(item, index) in mapIntroList" :key="'intro' + index" data-anime>
                        <div :class="`intro__${index + 1}-anime introAnime`" data-scroll data-scroll-speed="-1"  data-scroll-direction="horizontal">
                            <div :class="`intro__${index + 1}-anime-title`">{{ item.title }}</div>
                            <span :class="`intro__${index + 1}-anime-des`">
                                {{ item.des }}
                            </span>
                        </div>
                    </div>
                </div>
                <div class="mapBtn">
                    <a href="https://ltcpap.mohw.gov.tw/public/index.html"  target="_blank">
                        <div class="mapBtn-anime mapBtnAnime">
                            <div class="mapBtn-anime-obj"></div>
                            <div class="btnIcon">
                                <div class="btnIcon-anime">
                                    <div class="btnIcon-anime-obj"></div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="height"></div>
            </section>
            <Footer :isMobile="isMobile" />
        </div>
        <Nav-bar @navBarOpen="navBarOpen = false" v-if="navBarOpen" @increment="scrollTo" />
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
                autoplay:{
                    delay:2000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                },
                speed: 800,
                loop: true,
                slidesPerView: 1,
                spaceBetween: 0,
                width: 1442,
                centeredSlides:true,
                breakpoints: {
                    1440:{
                        width: 955,
                    },
                    768: {
                        width: 600,
                    },
                    640: {
                        width:420,
                    },
                    375: {
                        width: 327,
                    },
                },
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
                    image: require('@/static/image/pc/takeCareImg_1.png'),
                    title: '面對照顧壓力大？張曼娟：',
                    title2: '記得提醒自己，這一切都會過去的',
                    des:'各位照顧者又要展開新的一年，每天闖關又常感到孤單的日子。'
                },
                {
                    url:'https://www.cw.com.tw/article/5124631',
                    image: require('@/static/image/pc/takeCareImg_2.png'),
                    title: '小六生可能已是照顧者',
                    title2: '日本小學生與失智者共開店',
                    des:'當我們擔心學童與失智者接觸的安危，日本小學已納入課程...'
                },
                {
                    url:'https://www.cw.com.tw/article/5123858',
                    image: require('@/static/image/pc/takeCareImg_3.png'),
                    title: '不想活得又老又窮',
                    title2: '避開50歲最後悔的5個財務決定',
                    des:'「早知道會活那麼久，當初就……」'
                }
            ],
            introList:[
                {
                    image: require('@/static/image/pc/Ellipse-14.png'),
                    title:'服務對象',
                    des: require('@/static/image/pc/introDes1.png'),
                    mbDes: require('@/static/image/pc/introDes1_mb.png'),
                },
                {
                    image: require('@/static/image/pc/Ellipse-11.png'),
                    title:'申請流程',
                    des: require('@/static/image/pc/introDes2.png'),
                    mbDes: require('@/static/image/pc/introDes2_mb.png'),
                },
                {
                    image: require('@/static/image/pc/Ellipse-18.png'),
                    title:'服務內容',
                    des: require('@/static/image/pc/introDes3.png'),
                    mbDes: require('@/static/image/pc/introDes3_mb.png'),
                },
            ],
            mapIntroList:[
                {
                    title:'TIPS 1',
                    des: '透過左上角篩選功能，找到適合的服務機構',
                },
                {
                    title:'TIPS 2',
                    des: '直接點擊地圖，定位篩選出範圍內的相關服務機構',
                },
                {
                    title:'TIPS 3',
                    des: '點選下方篩選列表，觀看更詳細的聯絡資訊',
                },
            ],
            isMobile: false,
            //bannerAnimeFinish: false,
            scroll: null
        }
    },
    // watch:{
    //     bannerAnimeFinish: function (newValue,oldValue) {
    //         const self =this
    //         if(newValue){
    //             console.log(newValue)
    //             self.scrollInit()
    //         }
    //     }
    // },
    mounted() {
        const self =this
        self.isDevice()
        const p = new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve(1);
        }, 100);
        });
        p.then(()=>{
            window.bannerAnime()
        })
        .then(()=>{
            setTimeout(function () {
                self.scrollInit()
            },1200)
        })
        addEventListener('resize',()=>{
            self.isDevice()
            self.scroll.update()
        })
        
    },
    methods: {
        isDevice() {
            if (window.innerWidth < 768) {
                this.isMobile = true
            } else {
                this.isMobile = false
            }
        },
        scrollTo(el){
            const self =this
            const target = document.querySelector(el);
            if(el==='.map'){
                self.scroll.scrollTo(target,{offset:-240,})
            }else {
                self.scroll.scrollTo(target)
            }
        },
        scrollInit(){
            const self =this
            let scrollContainer = document.querySelector("[data-scroll-container]");
            self.scroll = new LocomotiveScroll({
                el: scrollContainer,
                smooth: true
            });
            //self.scroll.init()
            let clouds1 = document.querySelector(".circle__1");
            let clouds2 = document.querySelector(".circle__2");
            let clouds3 = document.querySelector(".circle__3");
            self.scroll.on("scroll", (instance) => {
                if(typeof instance.currentElements['fiveMin'] === 'object') {
                    clouds1.style.transform = "rotate(460deg)";
                    clouds2.style.transform = "rotate(-450deg)";
                    clouds3.style.transform = "rotate(500deg)";
                }else{
                    clouds1.style.transform = "rotate(0deg)";
                    clouds2.style.transform = "rotate(0deg)";
                    clouds3.style.transform = "rotate(0deg)";
                }
            });
            imagesLoaded(scrollContainer, { background: true }, function () {
               self.scroll.update();
            });
            addEventListener('resize',()=>{
                self.scroll.update()
            })
        }
    },
}
</script>
