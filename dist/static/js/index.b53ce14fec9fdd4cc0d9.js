webpackJsonp([1],{"035s":function(t,s){},"97Sy":function(t,s){},IgVc:function(t,s){},N9ca:function(t,s){},U67u:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});i("97Sy");var a=i("bCKv"),n=i.n(a),e=(i("035s"),i("eChN"),i("7+uW")),r=i("mtWM"),o=i.n(r),c={hotLists:"/index/hotLists",banner:"/index/banner"};for(var l in c)c.hasOwnProperty(l)&&(c[l]="http://rap2api.taobao.org/app/mock/15016"+c[l]);var p=c,u={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"bottom-nav"},[s("ul",[s("li",{staticClass:"active"},[s("a",{attrs:{href:"index.html"}},[s("i",{staticClass:"icon-home"}),s("div",[this._v("有赞")])])]),this._v(" "),s("li",[s("a",{attrs:{href:"https://maijia.youzan.com/mars/category"}},[s("i",{staticClass:"icon-category"}),s("div",[this._v("分类")])])]),this._v(" "),s("li",[s("a",{attrs:{href:"https://h5.youzan.com/v2/trade/cart?f_platform=yzapp&source=yzapp"}},[s("i",{staticClass:"icon-cart"}),s("div",[this._v("购物车")])])]),this._v(" "),s("li",[s("a",{attrs:{href:"https://h5.youzan.com/v2/buyer/member"}},[s("i",{staticClass:"icon-user"}),s("div",[this._v("我")])])])])])}]};var h=i("VU/8")({},u,!1,function(t){i("N9ca")},null,null).exports,d=i("DNVT"),f=(i("v2ns"),{name:"swipe",props:{lists:{type:Array,required:!0},name:{}},mounted:function(){new d.a(".swiper-container",{loop:!0,pagination:{el:".swiper-pagination"}})}}),v={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"swiper-container"},[s("div",{staticClass:"swiper-wrapper"},this._l(this.lists,function(t){return s("div",{staticClass:"swp-page swiper-slide"},[s("a",{staticClass:"js-no-follow",attrs:{href:t.clickUrl}},[s("img",{staticClass:"goods-main-photo fadeIn",attrs:{src:t.img}})])])})),this._v(" "),s("div",{staticClass:"swiper-pagination"})])},staticRenderFns:[]};var m=i("VU/8")(f,v,!1,function(t){i("IgVc")},null,null).exports;e.default.use(n.a);new e.default({el:"#app",data:{lists:null,pageNum:1,pageSize:8,loading:!1,allLoaded:!1,bannerLists:null},created:function(){this.getLists(),this.getBanner()},methods:{getLists:function(){var t=this;this.allLoaded||(this.loading=!0,o.a.post(p.hotLists,{pageNum:1,pageSize:8}).then(function(s){var i=s.data.lists;i.length<t.pageSize&&(t.allLoaded=!0),t.lists?t.lists=t.lists.concat(i):t.lists=i,t.pageNum++,t.loading=!1}))},getBanner:function(){var t=this;o.a.post(p.banner).then(function(s){t.bannerLists=s.data.lists})}},components:{Foot:h,Swipe:m}})},eChN:function(t,s){},v2ns:function(t,s){}},["U67u"]);
//# sourceMappingURL=index.b53ce14fec9fdd4cc0d9.js.map