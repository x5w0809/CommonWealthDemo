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
        <div class="navBar">
            <div :class="`navBar__${index + 1}`" v-for="(item, index) in navItemList" :key="'navBar' + index" data-anime>
                <div :class="`navBar__${index + 1}-hr`"></div>
                <a href="/">
                    <span :class="`navBar__${index + 1}-anime navBarAnime`">
                        {{ item }}
                    </span>
                </a>
            </div>
        </div>
        <!-- <div class="navBarBtn" @click="navBarOpen">
            <a href="javascript:void(0);">
                <div class="navBarBtn-anime">
                    <div class="navBarBtn-anime-obj"></div>
                </div>
            </a>
        </div> -->
        <div class="height"></div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            navItemList:[
                '首頁',
                '照顧現場',
                '一看就懂長照2.0',
                '長照地圖'
            ]
        }
    },
    methods: {
        navBarOpen() {
            this.$emit('navBarOpen')
        }
    },
}
</script>
