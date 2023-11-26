<template>
    <div id="footer">
        <div class="footerContain" v-if="!isMobile">
            <p>Copyright © 2023 天下數位發展部及整合傳播部企劃製作  All rights reserved. </p>
            <p> 版權所有，禁止擅自轉貼節錄</p>
            <p> 隱私權政策</p>
        </div>
        <div class="footerContain_mb" v-else>
            <p>Copyright © 2023 天下數位發展部及整合傳播部企劃製作</p>
            <p>All rights reserved. 版權所有，禁止擅自轉貼節錄</p>
            <p> 隱私權政策</p>
        </div>
    </div>
</template>
<script>
    export default {
        props:['isMobile'],
    } 
</script>
