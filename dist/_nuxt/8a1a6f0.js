(window.webpackJsonp=window.webpackJsonp||[]).push([[6,2,3,5],{314:function(t,e,n){"use strict";n.r(e);var l={data:function(){return{socialData:[{name:"ig",url:"https://www.instagram.com/bc_haul/"},{name:"fb",url:"https://www.facebook.com/commonWealth.tw/"},{name:"tiktok",url:"https://www.tiktok.com/@bc_haul"},{name:"",url:""}]}}},r=n(47),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"rightBar"}},[n("div",{staticClass:"social"},t._l(t.socialData,(function(t,e){return n("div",{key:"social"+e,class:"social__"+(e+1),attrs:{"data-anime":""}},[n("a",{attrs:{href:t.url,target:"_blank"}},[n("div",{class:"social__"+(e+1)+"-anime socialAnime"},[n("div",{class:"social__"+(e+1)+"-anime-obj"})])])])})),0)])}),[],!1,null,null,null);e.default=component.exports},315:function(t,e,n){"use strict";n.r(e);var l={props:["isMobile"],data:function(){return{navItemList:[{name:"首頁",el:".banner"},{name:"照顧現場",el:".takeCare"},{name:"一看就懂長照2.0",el:".fiveMin"},{name:"長照地圖",el:".map"}]}},mounted:function(){},methods:{navBarOpen:function(){this.$emit("navBarOpen")},scrollTo:function(t){this.$emit("increment",t)}}},r=n(47),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"header"}},[n("div",{staticClass:"logo"},t._l(2,(function(t,e){return n("div",{key:"logo"+e,class:"logo__"+(e+1),attrs:{"data-anime":""}},[n("a",{attrs:{href:"/"}},[n("div",{class:"logo__"+(e+1)+"-anime logoAnime"},[n("div",{class:"logo__"+(e+1)+"-anime-obj"})])])])})),0),t._v(" "),t.isMobile?t._e():n("div",{staticClass:"navBar"},t._l(t.navItemList,(function(e,l){return n("div",{key:"navBar"+l,class:"navBar__"+(l+1),attrs:{"data-anime":""}},[n("div",{class:"navBar__"+(l+1)+"-hr"}),t._v(" "),n("a",{on:{click:function(n){return t.scrollTo(e.el)}}},[n("span",{class:"navBar__"+(l+1)+"-anime navBarAnime"},[t._v("\n                    "+t._s(e.name)+"\n                ")])])])})),0),t._v(" "),t.isMobile?n("div",{staticClass:"navBarBtn",on:{click:t.navBarOpen}},[t._m(0)]):t._e(),t._v(" "),n("div",{staticClass:"height"})])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"javascript:void(0);"}},[e("div",{staticClass:"navBarBtn-anime"},[e("div",{staticClass:"navBarBtn-anime-obj"})])])}],!1,null,null,null);e.default=component.exports},316:function(t,e,n){"use strict";n.r(e);var l={props:["isMobile"]},r=n(47),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"footer"}},[t.isMobile?n("div",{staticClass:"footerContain_mb"},[n("p",[t._v("Copyright © 2023 天下數位發展部及整合傳播部企劃製作")]),t._v(" "),n("p",[t._v("All rights reserved. 版權所有，禁止擅自轉貼節錄")]),t._v(" "),n("p",[t._v(" 隱私權政策")])]):n("div",{staticClass:"footerContain"},[n("p",[t._v("Copyright © 2023 天下數位發展部及整合傳播部企劃製作  All rights reserved. ")]),t._v(" "),n("p",[t._v(" 版權所有，禁止擅自轉貼節錄")]),t._v(" "),n("p",[t._v(" 隱私權政策")])])])}),[],!1,null,null,null);e.default=component.exports},318:function(t,e,n){t.exports=n.p+"img/takeCareImg_1.770f20a.png"},319:function(t,e,n){t.exports=n.p+"img/takeCareImg_2.d8bf50a.png"},320:function(t,e,n){t.exports=n.p+"img/takeCareImg_3.df8a281.png"},321:function(t,e,n){t.exports=n.p+"img/Ellipse-14.6140f95.png"},322:function(t,e,n){t.exports=n.p+"img/introDes1.1b20bfa.png"},323:function(t,e,n){t.exports=n.p+"img/introDes1_mb.28c1682.png"},324:function(t,e,n){t.exports=n.p+"img/Ellipse-11.48ec69d.png"},325:function(t,e,n){t.exports=n.p+"img/introDes2.04239dd.png"},326:function(t,e,n){t.exports=n.p+"img/introDes2_mb.e2ed5a0.png"},327:function(t,e,n){t.exports=n.p+"img/Ellipse-18.2bdb9d3.png"},328:function(t,e,n){t.exports=n.p+"img/introDes3.186ef81.png"},329:function(t,e,n){t.exports=n.p+"img/introDes3_mb.7856a44.png"},332:function(t,e,n){"use strict";n.r(e);var l=n(39),r=(n(58),n(317)),o={components:{rightSideBar:n(314).default},name:"IndexPage",data:function(){return{navBarOpen:!1,swiperOption:{autoplay:1500,loop:!0,slidesPerView:1,spaceBetween:0,width:1442,centeredSlides:!0,breakpoints:{1440:{width:955},768:{width:600},640:{width:420},375:{width:327}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0,type:"bullets"}},takeCareImgList:[{url:"https://www.cw.com.tw/article/5125049",image:n(318),title:"面對照顧壓力大？張曼娟：",title2:"記得提醒自己，這一切都會過去的",des:"各位照顧者又要展開新的一年，每天闖關又常感到孤單的日子。"},{url:"https://www.cw.com.tw/article/5124631",image:n(319),title:"小六生可能已是照顧者",title2:"日本小學生與失智者共開店",des:"當我們擔心學童與失智者接觸的安危，日本小學已納入課程..."},{url:"https://www.cw.com.tw/article/5123858",image:n(320),title:"不想活得又老又窮",title2:"避開50歲最後悔的5個財務決定",des:"「早知道會活那麼久，當初就……」"}],introList:[{image:n(321),title:"服務對象",des:n(322),mbDes:n(323)},{image:n(324),title:"申請流程",des:n(325),mbDes:n(326)},{image:n(327),title:"服務內容",des:n(328),mbDes:n(329)}],mapIntroList:[{title:"TIPS 1",des:"透過左上角篩選功能，找到適合的服務機構"},{title:"TIPS 2",des:"直接點擊地圖，定位篩選出範圍內的相關服務機構"},{title:"TIPS 3",des:"點選下方篩選列表，觀看更詳細的聯絡資訊"}],isMobile:!1}},mounted:function(){var t=this;this.isDevice();var e=this;setTimeout((function(){e.scroll=new r.a({el:document.querySelector("[data-scroll-container]"),smooth:!0});document.querySelector(".map").offsetTop,document.querySelector(".container").scrollTop;var t=document.querySelector(".circle__1"),n=document.querySelector(".circle__2"),o=document.querySelector(".circle__3");e.scroll.on("scroll",(function(e){if("object"===Object(l.a)(e.currentElements.fiveMin)){var progress=e.currentElements.fiveMin.progress;console.log(progress),t.style.transform="rotate(460deg)",n.style.transform="rotate(-450deg)",o.style.transform="rotate(500deg)"}else t.style.transform="rotate(0deg)",n.style.transform="rotate(0deg)",o.style.transform="rotate(0deg)"})),addEventListener("resize",(function(){e.scroll.update(),e.scroll.init()}))}),100),window.bannerAnime(),addEventListener("resize",(function(){t.isDevice()}))},methods:{isDevice:function(){window.innerWidth<768?this.isMobile=!0:this.isMobile=!1},scrollTo:function(t){".map"===t?this.scroll.scrollTo(t,{offset:-240}):this.scroll.scrollTo(t)}}},c=n(47),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"main"}},[n("Header",{attrs:{isMobile:t.isMobile},on:{navBarOpen:function(e){t.navBarOpen=!0},increment:t.scrollTo}}),t._v(" "),n("right-side-bar"),t._v(" "),n("div",{staticClass:"container",attrs:{"data-scroll-container":""}},[n("section",{staticClass:"banner"},[n("div",{staticClass:"title"},t._l(6,(function(t,e){return n("div",{key:"title"+e,class:"title__"+(e+1),attrs:{"data-anime":""}},[n("div",{class:"title__"+(e+1)+"-anime titleAnime"},[n("div",{class:"title__"+(e+1)+"-anime-obj"})])])})),0),t._v(" "),n("div",{staticClass:"scrollArrow"},[n("a",{on:{click:function(e){return t.scrollTo(".longTeam")}}},[t._m(0)])]),t._v(" "),n("div",{staticClass:"height"})]),t._v(" "),n("section",{staticClass:"longTeam"},[n("div",{staticClass:"picture"},t._l(2,(function(t,e){return n("div",{key:"picture"+e,class:"picture__"+(e+1),attrs:{"data-anime":""}},[n("div",{class:"picture__"+(e+1)+"-anime pictureAnime",attrs:{"data-scroll":"","data-scroll-speed":"-2","data-scroll-direction":"horizontal"}},[n("div",{class:"picture__"+(e+1)+"-anime-obj"})])])})),0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),n("div",{staticClass:"height"})]),t._v(" "),t._m(4),t._v(" "),n("section",{staticClass:"takeCareSwip"},[n("swiper",{staticClass:"swiper",attrs:{options:t.swiperOption}},[t._l(t.takeCareImgList,(function(e,l){return n("swiper-slide",{key:"takeCareImg"+l,class:"takeCareImg__"+(l+1)+" takeCareImgBox",attrs:{"data-anime":""}},[n("div",{class:"takeCareImg__"+(l+1)+"-anime takeCareImgAnime",attrs:{"data-scroll":"","data-scroll-speed":"-1"}},[n("a",{attrs:{href:e.url,target:"_blank"}},[n("img",{staticClass:"takeCareImg",attrs:{src:e.image}}),t._v(" "),n("div",{staticClass:"takeCareTitle"},[n("div",{staticClass:"title1"},[t._v(t._s(e.title))]),t._v(" "),n("div",{staticClass:"title2"},[t._v(t._s(e.title2))]),t._v(" "),n("div",{staticClass:"des"},[t._v(t._s(e.des))])])])])])})),t._v(" "),n("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"}),t._v(" "),n("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"}),t._v(" "),n("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1),t._v(" "),n("section",{staticClass:"fiveMin"},[t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),n("div",{staticClass:"intro"},t._l(t.introList,(function(e,l){return n("div",{key:"intro"+l,class:"intro__"+(l+1),attrs:{"data-anime":""}},[n("div",{class:"intro__"+(l+1)+"-anime introAnime"},[n("div",{class:"intro__"+(l+1)+"-anime-box",attrs:{"data-scroll":"","data-scroll-id":"fiveMin"}},[n("div",{class:"circle__"+(l+1)+" circle"},[n("div",{staticClass:"line"})]),t._v(" "),n("div",{staticClass:"picture"},[n("img",{attrs:{src:e.image,alt:""}})])]),t._v(" "),n("div",{class:"intro__"+(l+1)+"-anime-title"},[t._v(t._s(e.title))]),t._v(" "),n("div",{class:"intro__"+(l+1)+"-anime-des"},[t.isMobile?n("img",{attrs:{src:e.mbDes,alt:""}}):n("img",{attrs:{src:e.des,alt:""}})])])])})),0),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),n("div",{staticClass:"height"})]),t._v(" "),n("section",{staticClass:"map"},[t._m(11),t._v(" "),t._m(12),t._v(" "),n("div",{staticClass:"introImg1"},t._l(4,(function(e,l){return n("div",{key:"introImg1"+l,class:"introImg1__"+(l+1),attrs:{"data-anime":""}},[n("div",{class:"introImg1__"+(l+1)+"-anime introImg1Anime",attrs:{"data-scroll":"","data-scroll-speed":"-1","data-scroll-direction":"horizontal"}},[n("div",{class:"introImg1__"+(l+1)+"-anime-obj"},[t._v(t._s(e.title))])])])})),0),t._v(" "),n("div",{staticClass:"introImg2"},t._l(2,(function(e,l){return n("div",{key:"introImg2"+l,class:"introImg2__"+(l+1),attrs:{"data-anime":""}},[n("div",{class:"introImg2__"+(l+1)+"-anime introImg1Anime",attrs:{"data-scroll":"","data-scroll-speed":"-1","data-scroll-direction":"horizontal"}},[n("div",{class:"introImg2__"+(l+1)+"-anime-obj"},[t._v(t._s(e.title))])])])})),0),t._v(" "),t._m(13),t._v(" "),n("div",{staticClass:"intro"},t._l(t.mapIntroList,(function(e,l){return n("div",{key:"intro"+l,class:"intro__"+(l+1),attrs:{"data-anime":""}},[n("div",{class:"intro__"+(l+1)+"-anime introAnime",attrs:{"data-scroll":"","data-scroll-speed":"-1","data-scroll-direction":"horizontal"}},[n("div",{class:"intro__"+(l+1)+"-anime-title"},[t._v(t._s(e.title))]),t._v(" "),n("span",{class:"intro__"+(l+1)+"-anime-des"},[t._v("\n                                "+t._s(e.des)+"\n                            ")])])])})),0),t._v(" "),t._m(14),t._v(" "),n("div",{staticClass:"height"})]),t._v(" "),n("Footer",{attrs:{isMobile:t.isMobile}}),t._v(" "),t.navBarOpen?n("Nav-bar",{on:{navBarOpen:function(e){t.navBarOpen=!1},increment:t.scrollTo}}):t._e()],1)],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"scrollArrow-anime scrollArrowAnime"},[e("div",{staticClass:"scrollArrow-anime-obj"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"subTitle"},[e("div",{staticClass:"subTitle-anime subTitleAnime",attrs:{"data-scroll":"","data-scroll-speed":"-1","data-scroll-direction":"vertical"}},[e("div",{staticClass:"subTitle-anime-obj"})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"txtContain",attrs:{"data-scroll":"","data-scroll-speed":"2","data-scroll-direction":"horizontal"}},[n("span",{staticClass:"title"},[t._v("長照2.0，"),n("br"),t._v("讓照顧的路上有專業相挺")]),t._v(" "),n("div",{staticClass:"subTitle"},[n("div",{staticClass:"subTitle-anime subTitleAnime"},[n("div",{staticClass:"subTitle-anime-obj"})])]),t._v(" "),n("textarea",{staticClass:"txtBox",attrs:{readonly:""}},[t._v("台灣走向超高齡社會，速度比想像中還要快又急，隨著人口老化加速，未來需要照顧年長父母的青壯人口，只會增加，不會減少。\n老年人壽命的延長，也表示照顧的時間會愈來愈長；甚至是在自己退休之後，仍須持續照顧長輩。\n「上有高堂，下有嗷嗷待哺」，三明治世代所面臨的困境，才是最需要協助的一群人。\n\n面對長照，經濟協助外，對「照顧者」提供專業協助更是關鍵！\n                    ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"longTeamLine"},[e("div",{staticClass:"longTeamLine-anime longTeamLineAnime",attrs:{"data-scroll":"","data-scroll-speed":"2","data-scroll-direction":"horizontal"}},[e("div",{staticClass:"longTeamLine-anime-obj"})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"takeCare"},[n("div",{staticClass:"title"},[n("div",{staticClass:"title-anime titleAnime",attrs:{"data-scroll":"","data-scroll-speed":"2","data-scroll-direction":"vertical"}},[n("div",{staticClass:"title-anime-obj"})])]),t._v(" "),n("div",{staticClass:"height"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bgCircle"},[e("div",{staticClass:"bgCircle-anime bgCircleAnime"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[e("div",{staticClass:"title-anime titleAnime",attrs:{"data-scroll":"","data-scroll-speed":"2","data-scroll-direction":"vertical"}},[e("div",{staticClass:"title-anime-obj"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"subTitle"},[e("div",{staticClass:"subTitle-anime subTitleAnime",attrs:{"data-scroll":"","data-scroll-speed":"2","data-scroll-direction":"vertical"}},[e("div",{staticClass:"subTitle-anime-obj"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bottomLine"},[e("div",{staticClass:"bottomLine-anime bottomLineAnime"},[e("div",{staticClass:"bottomLine-anime-obj"})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"moreBtn"},[n("a",{attrs:{href:"https://event.cw.com.tw/2023mohw/Infographic.pdf",target:"_blank"}},[n("div",{staticClass:"moreBtn-anime moreBtnAnime"},[n("div",{staticClass:"moreBtn-anime-obj"}),t._v(" "),n("div",{staticClass:"btnIcon"},[n("div",{staticClass:"btnIcon-anime"},[n("div",{staticClass:"btnIcon-anime-obj"})])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mapTitle"},[e("div",{staticClass:"mapTitle-anime mapTitleAnime",attrs:{"data-scroll":"","data-scroll-speed":"2","data-scroll-direction":"vertical"}},[e("div",{staticClass:"mapTitle-anime-obj"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mapBg"},[e("div",{staticClass:"mapBg-anime mapBgAnime"},[e("div",{staticClass:"mapBg-anime-obj"},[e("div",{staticClass:"mapBg-anime-obj-mask"})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mask"},[e("div",{staticClass:"mask-anime maskAnime"},[e("div",{staticClass:"mask-anime-obj"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"introImg3"},[e("div",{staticClass:"introImg3-anime introImg3Anime",attrs:{"data-scroll":"","data-scroll-speed":"-1","data-scroll-direction":"horizontal"}},[e("div",{staticClass:"introImg3-anime-obj"})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mapBtn"},[n("a",{attrs:{href:"https://ltcpap.mohw.gov.tw/public/index.html",target:"_blank"}},[n("div",{staticClass:"mapBtn-anime mapBtnAnime"},[n("div",{staticClass:"mapBtn-anime-obj"}),t._v(" "),n("div",{staticClass:"btnIcon"},[n("div",{staticClass:"btnIcon-anime"},[n("div",{staticClass:"btnIcon-anime-obj"})])])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:n(315).default,RightSideBar:n(314).default,Footer:n(316).default})}}]);