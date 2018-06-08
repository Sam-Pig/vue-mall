import 'css/common.css'
import './index.css'
import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'

import { InfiniteScroll } from 'mint-ui';
Vue.use(InfiniteScroll);

import Foot from 'components/Foot.vue'
import Swipe from 'components/Swipe.vue'

new Vue({
    el: '#app',
    data: {
        lists: null,
        pageNum: 1,
        pageSize: 8,
        loading: false,
        allLoaded: false,
        bannerLists: null
    },
    created() {
        this.getLists()
        this.getBanner()
    },
    methods: {
        getLists() {
            if(this.allLoaded) {
                return
            }
            // 是否在记载中
            this.loading = true
            axios.post(url.hotLists, {
                pageNum: 1,
                pageSize: 8
            }).then(res => {
                let curLists = res.data.lists
                // 判断所有数据是否加载完毕
                if(curLists.length < this.pageSize) {
                    this.allLoaded = true
                }
                if(this.lists) {
                    this.lists = this.lists.concat(curLists)
                }else{
                    // 第一次请求数据
                    this.lists = curLists
                }
                this.pageNum++
                this.loading = false
            })
        },
        getBanner() {
            axios.post(url.banner).then(res => {
                this.bannerLists = res.data.lists
            })
        }
    },
    components: {
        Foot,
        Swipe
    }
})