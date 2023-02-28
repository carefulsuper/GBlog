const Mock = require('mockjs');
export default [
    // 站点信息
    {
        url: '/site',
        type: 'get',
        response: () => {
            return {
                code: 20000,
                data: {
                    avatar: 'https://n.sinaimg.cn/sinakd20123/100/w1250h1250/20220425/2281-40345383d68bdc960bf2ac01ea86be4c.jpg',
                    slogan: '下辈子不学前端了',
                    name: 'carefulsuper',
                    domain: 'https://www.carefulsuper.cn',
                    notice: '本博客的Demo数据由Mockjs生成',
                    desc: '一个It技术的探索者'
                }
            }
        }
    },
    // 站点社交信息
    {
        url: '/social',
        type: 'get',
        response: () => {
            return {
                code: 20000,
                data: [
                    {
                        id: 1,
                        title: 'QQ',
                        icon: 'iconqq',
                        color: '#1AB6FF ',
                        href: 'http://wpa.qq.com/msgrd?v=3&uin=3082956466&site=qq&menu=yes'
                    },
                    {
                        id: 2,
                        title: 'Gitee',
                        icon: 'icongitee',
                        color: '#d81e06',
                        href: 'https://gitee.com/confuse-truth-and-falsehood'
                    },
                    {
                        id: 3,
                        title: 'GitHub',
                        icon: 'icongithub',
                        color: '',
                        href: 'https://github.com/carefulsuper'
                    }
                ]
            }
        }
    }
]
