<template>
    <div v-cloak>
        <div id="header-bar">
            <div class="title">欢迎使用</div>
            <div class="nav-menu-icon" style="background-image: url(/src/img/ghosticon.jpg)" @click="showMenu()"></div>
        </div>
        <div>
            <div class="menu">
                <ul>
                    <li class="menu-item">
                        <a href="mmm">mmm</a>
                    </li>
                    <li class="menu-item">xxx</li>
                    <li class="menu-item">xxx</li>
                    <li class="menu-item">xxx</li>
                    <li class="menu-item">xxx</li>
                </ul>
            </div>
            <div class="menu-mask" @click="hideMenu()"></div>
        </div>
    </div>
</template>
<style scoped>

</style>
<script>
    require('./navigation.css');

    export default{
        methods: {
            showMenu() {
                document.getElementsByClassName("menu")[0].className = "menu menu-show";
                document.getElementsByClassName("menu-mask")[0].style.display = "block";
            },
            hideMenu(){
                document.getElementsByClassName("menu")[0].className = "menu menu-hide";
                document.getElementsByClassName("menu-mask")[0].style.display = "none";
            }
        }
    }
</script>