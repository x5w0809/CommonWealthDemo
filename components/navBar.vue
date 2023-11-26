<template>
    <div id="navBar">
        <div class="navBarBg" @click="navBarClose()"></div>
        <div class="navBox">
            <div class="navBoxWrap">
                <div class="closeBtn" @click="navBarClose()">
                </div>
                <div class="navList">
                    <a href="/aboutUs">
                        <div class="toAboutUs navItem">關於我們</div>
                    </a>
                    <a href="/model">
                        <div class="toModel navItem">車種介紹</div>
                    </a>
                    <a href="/news">
                        <div class="toNews navItem">最新消息</div>
                    </a>
                    <a href="/service">
                        <div class="toService navItem">服務項目</div>
                    </a>
                    <a href="/contactUs">
                        <div class="toContact navItem">聯絡我們</div>
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
    },
}
</script>
