<template>
    <div id="main">
        <Header @navBarOpen="navBarOpen = true" />
        <right-side-bar />
        <div class="container">
            <section class="banner">
                <div class="bannerTitle">
                    <h2 class="title">專業運輸 。</h2>
                </div>
                <div class="shadow">
                    <div class="shadow-anime">
                        <div class="shadow-anime-obj"></div>
                    </div>
                </div>
                <div class="car">
                    <div class="car-anime">
                        <div class="car-anime-obj"></div>
                    </div>
                </div>
                <div class="bgIcon">
                    <div :class="`bgIcon__${index + 1}`" v-for="(item, index) in 2" :key="'bgIcon' + index" data-anime>
                        <div :class="`bgIcon__${index + 1}-anime bgIconAnime`">
                            <div :class="`bgIcon__${index + 1}-anime-obj`"></div>
                        </div>
                    </div>
                </div>
                <div class="bgBlur">
                    <div class="bgBlur-anime">
                        <div class="bgBlur-anime-obj"></div>
                    </div>
                </div>
                <div class="subbar">
                    <div class="subbar-anime">
                        <div class="subbar-anime-obj"></div>
                    </div>
                </div>
                <div class="subtitle">
                    <div class="subtitle-anime">
                        <div class="subtitle-anime-obj"></div>
                    </div>
                </div>
                <div class="readmore">
                    <a href="/aboutUs">
                        <div class="readmore-anime">
                            <div class="readmore-anime-obj"></div>
                        </div>
                    </a>
                </div>
                <div class="reserve">
                    <a href="/">
                        <div class="reserve-anime">
                            <div class="reserve-anime-obj"></div>
                        </div>
                    </a>
                </div>
                <div class="height"></div>
            </section>
        </div>
        <Footer />
        <Nav-bar @navBarOpen="navBarOpen = false" v-if="navBarOpen" />
    </div>
</template>

<script>
import rightSideBar from '../components/rightSideBar.vue'
export default {
    components: { rightSideBar },
    name: 'IndexPage',
    data() {
        return {
            navBarOpen: false,
            swiperOption: {
                autoplay: 2000,
                // speed: 300,
                loop: false,
                slidesPerView: 3,
                spaceBetween: 0,
                breakpoints: {
                    1024: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 100,
                    },
                    375: {
                        slidesPerView: 1,
                        spaceBetween: 100,
                    },
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            },
            isMobile: false,
        }
    },
    mounted() {
        this.isDevice()
        // window.bannerAnime()
        // window.scrollAnime(this.isMobile)
        // addEventListener('resize',()=>{
        //     this.isDevice()
        // })
        
    },
    methods: {
        isDevice (){
            if(window.innerWidth < 768){
                this.isMobile = true
            } else {
                this.isMobile = false
            }
        }
    },
}
</script>
