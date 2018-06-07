<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swp-page swiper-slide" v-for="list in lists">
                <a class="js-no-follow" :href="list.clickUrl">
                    <img class="goods-main-photo fadeIn" :src="list.img">
                </a>
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>


<style>
    .swiper-slide img {
        height: 100%;
        width: 100%;
    }
</style>


<script>
    // swiper对DOM节点进行操作的，DOM节点什么时候生成？
    // 1、mounted v-if
    // 2、watch

    import Swiper from 'swiper'
    import 'swiper/dist/css/swiper.css'


    export default {
        name: 'swipe',
        props: {
            lists: {
                type: Array,
                required: true
            },
            name: {

            }
        },
        // 关于数据异步处理的一些方便理解的演示
        // created() {
        //     if(this.lists){
        //         console.log(this.lists)
        //     }else{
        //         // alert('Swipe.vue的lists仍然为null！')
        //         console.log('Swipe.vue的lists仍然为null！')
        //     }
        //     console.log('created:',document.querySelectorAll('.swiper-slide'))
        // },
        mounted() {
            new Swiper('.swiper-container', {
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                },
            })
        //     if(this.lists){
        //         console.log(this.lists)
        //     }else{
        //         console.log('Swipe.vue的lists仍然为null！')
        //     }
        //     console.log('mounted:',document.querySelectorAll('.swiper-slide'))
        // },
        // watch: {
        //     lists(val, oldVal) {
        //         console.log(val, oldVal)
        //         console.log('before $nextTick:',document.querySelectorAll('.swiper-slide'))
        //         this.$nextTick(() => {
        //             console.log('after $nextTick:',document.querySelectorAll('.swiper-slide'))
        //         })
        //     }
        }
    }
</script>
