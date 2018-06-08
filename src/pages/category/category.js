import 'css/common.css'
import './category.css'

import Vue from 'vue'
import Foot from 'components/Foot.vue'
import url from 'js/api.js'
import axios from 'axios'

new Vue({
    el: '#app-category',
    data: {
        topLists: null,
        topIndex: 0,
        subData: null,
        rankData: null
    },
    methods: {
        getTopList() {
            axios.post(url.topList).then(res => {
                this.topLists = res.data.lists
                console.log(this.topLists)
            }).catch(res => {
                console.log('axios fail!')
            })
        },
        getSubList(id,index) {
            this.topIndex = index
            if(index === 0){
                this.getRank()
            }else{
                axios.post(url.subList, {id: id}).then(res => {
                    this.subData = res.data.data
                })
            }
        },
        getRank() {
            axios.post(url.rank).then(res => {
                this.rankData = res.data.data
            })
        }
    },
    components: {
        Foot
    },
    filters: {
        number(price) {
            return price + '.00'
        }
    },
    created() {
        this.getTopList()
        this.getSubList(0,0)
    }
})