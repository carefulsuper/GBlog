<template>
    <div class="about">
        <div class="site-content">
            <div class="content-warp">
                <div class="about-site about-info">
                    <section-title><span>❤</span>carefulsuper</section-title>
                    <div class="info-card">
                        <p style="font-size: 20px">前端开发工程师</p><br>
                        <p style="font-size: 20px ">四川师范大学 通信工程 2023届</p><br>
                      <p>熟练掌握Html，CSS，大多数Html标签和CSS样式属性以及布局技巧，掌握响应式布局以及自适应布局</p><br>
                      <p>掌握JS，Vue.js，uni-app，jQuery，Quasar技术框架和Git，npm的使用，熟悉elementui组件库及其二次封装</p><br>
                      <p>熟练掌握基于Ajax的异步交互和Webpack，Sass，gulp，Ajax，axios以及apifox的应用</p><br>
                      <p>了解React，TypeScript，ES6新特性，express和MongoDB，vuepress</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import sectionTitle from '@/components/section-title'
    import {getTime,getTimeInterval} from '@/utils'
    // import Quote from "@/components/quote";
    // import {fetchnewPage} from '../api'
    export default {
        name: "About",
        data() {
            return {
                list: []
            }
        },
        components: {
            // Quote,
            sectionTitle
        },
        methods: {},
        mounted() {
        }
    }
</script>
<style scoped lang="less">
    .about {
        padding-top: 40px;
    }

    .content-warp {
        margin-top: 80px;

        .about-info {
            margin: 30px 0;

            span {
                color: red;
                margin-right: 10px;
            }

            .info-card {
                min-height: 100px;
                padding: 20px;
                border-radius: 3px;
                margin: 30px 0 50px 0;
                box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
                p{
                    line-height: 1.7rem;
                }
            }
        }
        .contactForm{
            width: 100%;
            padding: 20px;
            .form-item{
                align-items: center;
                display: flex;
                &:not(:last-child){
                    margin-bottom: 20px;
                }
                label{
                  width: 80px;
                }
                .v{
                    min-height: 40px;
                    line-height: 20px;
                    border-radius: 3px;
                    padding: 2px 10px;
                    outline:none;
                    border: 1px solid #8fd0cc;
                    width: 100%;
                    resize: vertical;
                }
                button{
                    width: 100px;
                    height: 40px;
                    border-radius: 3px;
                    outline:0;
                    border-style: none;
                    cursor: pointer;
                    background-color: #409eff;
                    color: white;
                    &:hover{
                        opacity: 0.8;
                    }
                }
            }
        }
    }

    /*******/
    @media (max-width: 800px) {
        .content-warp {
            margin-top: 0;
        }
    }
</style>
