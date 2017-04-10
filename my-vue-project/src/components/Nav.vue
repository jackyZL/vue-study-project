<template>
    <div id="nav">
        <ul>
            <router-link to="/index" tag="li" active-class="active">
                <a href="javascript:void(0);" >首页</a>
            </router-link>
            <router-link to="/follow" tag="li" active-class="active">
                <a href="javascript:void(0);" >关注</a>
            </router-link>
            <router-link to="/column" tag="li" active-class="active">
                <a href="javascript:void(0);" >栏目</a>
            </router-link>
        </ul>
    </div>
</template>
<style scoped>

    #nav{
        height: 50px;
        margin-bottom: 50px;
        font-size: 20px;
    }

    ul li{
        float: left;
    }

    .active a{
        color: red !important;
    }
</style>