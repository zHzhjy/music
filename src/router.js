const routers = [{
  path: '',
  redirect: {
    name: 'singerlist',
  },
}, {
  path: '/login',
  name: 'login',
  meta: {
    title: 'TIT-music 登录'
  },
  component: (resolve) => require(['./views/login/index.vue'], resolve)
}, {
  path: '/',
  name: 'home',
  meta: {
    title: 'TIT-music 首页'
  },
  component: (resolve) => require(['./views/home/index.vue'], resolve),
  children: [{
    path: '/singerlist',
    name: 'singerlist',
    meta: {
      title: 'TIT-music 歌手列表'
    },
    component: (resolve) => require(['./views/singerlist/index.vue'], resolve)
  },{
    path: '/singer-details',
    name: 'singer-details',
    meta: {
      title: 'TIT-music 歌手详情'
    },
    component: (resolve) => require(['./views/singerdetails/index.vue'], resolve)
  },
  {
  	path:'/Recommend',
  	name:'Recommend',
  	meta: {
  		title: 'TIT-music 推荐歌单'
  	}
  }]
},]
export default routers;