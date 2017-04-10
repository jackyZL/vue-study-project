<template>
    <div id="app">
        <NavView></NavView>
        <router-view></router-view>
        <FootView></FootView>
    </div>
</template>

<script>

    import NavView from './components/Nav.vue'
    import FootView from './components/Foot.vue'

    export default {
        name: 'app',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        components:{
            NavView,
            FootView
        }
    }
</script>

<style scoped>

</style>
