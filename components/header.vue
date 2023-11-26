<template>
    <div id="header">
        <div class="logo">
            <div :class="`logo__${index + 1}`" v-for="(item, index) in 2" :key="'logo' + index" data-anime>
                <a href="/">
                    <div :class="`logo__${index + 1}-anime logoAnime`">
                        <div :class="`logo__${index + 1}-anime-obj`"></div>
                    </div>
                </a>
            </div>
        </div>
        <div class="navBar" v-if="!isMobile">
            <div :class="`navBar__${index + 1}`" v-for="(item, index) in navItemList" :key="'navBar' + index" data-anime>
                <div :class="`navBar__${index + 1}-hr`"></div>
                <a @click="scrollTo(item.el)">
                    <span :class="`navBar__${index + 1}-anime navBarAnime`">
                        {{ item.name }}
                    </span>
                </a>
            </div>
        </div>
        <div class="mb_navBar" v-if="isMobile">
            <div class="closeBtn" @click="navBarClose()" ></div>
            <div :class="`navBar__${index + 1}`" v-for="(item, index) in navItemList" :key="'navBar' + index" data-anime>
                <div :class="`navBar__${index + 1}-hr`"></div>
                <a @click="scrollTo(item.el)">
                    <span :class="`navBar__${index + 1}-anime navBarAnime`">
                        {{ item.name }}
                    </span>
                </a>
            </div>
        </div>
        <div class="navBarBtn" @click="navBarOpen">
            <a href="javascript:void(0);">
                <div class="navBarBtn-anime">
                    <div class="navBarBtn-anime-obj"></div>
                </div>
            </a>
        </div>
        <div class="height"></div>
    </div>
</template>
<script>
export default {
    props:['isMobile'],
    data() {
        return {
            navItemList:[
                {
                    name:'首頁',
                    el:'.banner'
                },
                {
                    name:'照顧現場',
                    el:'.takeCare'
                },
                {
                    name:'一看就懂長照2.0',
                    el:'.fiveMin'
                },
                {
                    name:'長照地圖',
                    el:'.map'
                },
            ]
        }
    },
    mounted() {
        const self =this
    },
    methods: {
        navBarOpen() {
            this.$emit('navBarOpen')
        },
        scrollTo(el){
            const self =this
            self.$emit('increment',el)
        }
    },
}
</script>
