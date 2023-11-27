<template>
    <div id="navBar">
        <div class="navBarBg" @click="navBarClose()"></div>
        <div class="navBox">
            <div class="navBoxWrap">
                <div class="closeBtn" @click="navBarClose()">
                    <img :src="require('@/static/image/pc/icon--burger-close.png')" alt="">
                </div>
                <div class="navList">
                    <a @click="scrollTo('.banner')">
                        <div class="toAboutUs navItem">首頁</div>
                    </a>
                    <div class="barHr"></div>
                    <a @click="scrollTo('.takeCare')">
                        <div class="toModel navItem">照顧現場</div>
                    </a>
                    <div class="barHr"></div>
                    <a @click="scrollTo('.fiveMin')">
                        <div class="toNews navItem">一看就懂長照2.0</div>
                    </a>
                    <div class="barHr"></div>
                    <a @click="scrollTo('.map')">
                        <div class="toService navItem">長照地圖</div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        navBarClose() {
            this.$emit('navBarOpen')
        },
        scrollTo(el){
            const self =this
            this.$emit('navBarOpen')
            self.$emit('increment',el)
        }
    },
}
</script>
