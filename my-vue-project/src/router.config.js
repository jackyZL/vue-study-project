import HomeView from './components/Home.vue'
import FollowView from './components/Follow.vue'
import ColumnView from './components/Column.vue'

export default [
    {
        path: '/index',
        component: HomeView,
        name: '首页'
    },
    {
        path: '/follow',
        component: FollowView,
        name: '关注'
    },
    {
        path: '/column',
        component: ColumnView,
        name: '栏目'
    },
    {
        path: '/',
        redirect : '/index'
    },
    {
        path: '*',
        redirect : '/index'
    }
]