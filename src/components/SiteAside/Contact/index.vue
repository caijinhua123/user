<template>
<ul class="contact" v-if="data">
    <li>
        <a :href="data.github">
            <div class="icon">
                <Icon type="github" :size="35"  />
            </div>
            <span>{{ data.githubName }}</span>
        </a>
        <div class="pop">
            <img :src="imgurl+data.qqQrCode" alt="">
        </div>
    </li>
    <li>
        <a :href="`mailto:${data.mail}`">
            <div class="icon">
                <Icon type="mail" :size="35"/>
            </div>
            <span>{{ data.mail }}</span>
        </a>
        <div class="pop">
            <img :src="imgurl+data.qqQrCode" alt="">
        </div>
    </li>
    <li>
        <a href="">
            <div class="icon">
                <Icon type="weixin" :size="35"/>
            </div>
            <span>{{ data.weixin }}</span>
        </a>
        <div class="pop">
            <img :src="imgurl+data.weixinQrCode" alt="">
        </div>
    </li>
    <li>
        <a href="">
            <div class="icon">
                <Icon type="qq" :size="35"/>
            </div>
            <span>{{ data.qq }}</span>
        </a>
        <div class="pop">
            <img :src="imgurl+data.qqQrCode" alt="">
        </div>
    </li>
</ul>
</template>
<script>
import Icon from "@/components/Icon/Icon.vue"
import {mapState } from 'vuex'
import imgurlconfig from "@/utils/imgurlconfig"
export default {
    data(){
        return {
            imgurl:imgurlconfig(),
        }
    },
    components:{
        Icon
    },
    computed:{
        ...mapState('setting',['data'])
    }
    ,
    props:{

    }
}
</script>

<style lang='less' scoped>
    .contact{
        list-style: none;
        font-size: 20px;
        margin: 0;
        padding:0;
        background-color: rgb(30,30,30);
        li{
        position: relative;
        padding: 0 50px ;
        // margin-bottom:15px ;
        line-height: 50px;
        a{
        text-decoration: none;
        color: rgb(133,133,133);
        span{
            margin-left: 20px;
        }       
        .icon{
            display: inline-block;
            
        }}
        .pop{
            transition: all 0.5s;
            img{
                width: 150px;
                height: 150px;
                position: absolute;
                transition: all 0.5s;
                left: 50%;
                top: -170px;
                transform: translate(-50%)  scaleY(0);
                border: 1px solid;
               transform-origin:bottom center;
            }
            &::before{
                    content: '';
                    position: absolute;
                    width: 20px;
                    height: 20px;
                    transform-origin:center;
                    transition: all 0.5s;
                    border: 1px solid;
                    left: 50%;
                    transform: translate(-50%) rotate(45deg) scaleY(0);
                    top: -30px;
                    background-color: rgb(255, 255, 255);;
                }
        }
        &:hover{
            .pop{
                img{
                     transform: translate(-50%)  scaleY(1)
                }&::before{
                    transform: translate(-50%) rotate(45deg) scaleY(1)
                }
            }
            a{
                color: aliceblue
            }
        }
        }
        
    };
</style>