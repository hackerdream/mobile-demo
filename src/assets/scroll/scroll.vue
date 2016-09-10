<template>
    <div>
        <header class="header">header</header>
        <div id="content" class="main">
            <div class="test">hello</div>
            <div class="test">hello</div>
            <div class="test">hello</div>
            <div class="test">hello</div>
            <div class="test">hello</div>
            <div class="test">hello</div>
            <div class="test">hello</div>
            <div class="test">hello</div>
            <div class="test">hello</div>
            <div class="test">hello</div>
            <div class="test">hello</div>
            <div class="test">hello</div>
            <div class="test">hello</div>
            <div class="test">hello</div>
            <div class="test">hello</div>
            <div class="test">hello</div>
        </div>
        <footer class="footer">footer</footer>
    </div>
</template>
<style scoped>

</style>
<script>
    require('./scroll.css');

    export default{
        ready(){
            var previewY = 0;
            var currentY;
            var sumScrollY = 0;

            function onScroll() {
                var route;
                var currentY = document.getElementsByTagName('body')[0].scrollTop;
                route = currentY - previewY;
                sumScrollY += route;
                if (sumScrollY > 80) {
                    document.getElementsByClassName('header')[0].className = "header header-hide";
                    document.getElementsByClassName('footer')[0].className = "footer footer-hide";
                }
                if (route < 0) {
                    document.getElementsByClassName('header')[0].className = "header header-show";
                    document.getElementsByClassName('footer')[0].className = "footer footer-show";
                }
                previewY = document.getElementsByTagName('body')[0].scrollTop;
            }

            function init() {
                document.addEventListener("scroll", onScroll, false);
                console.log("hello");
            }

            init();
        },
        methods: {}
    }
</script>