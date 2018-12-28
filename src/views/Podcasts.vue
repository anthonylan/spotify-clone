<template>
    <div class="container">
        <div class="wrapper">
            <div class="content">
                <img src="../assets/wifi.svg">
                <p>Your favorite [odcast will appear here. Discover interesting Podcast to follow in your Browse page.</p>
                <button>Go to browse</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/variables';
@import '../assets/scss/mixins';
.wrapper{
    display: table;
    height: 60vh;
    width: 100%;
    .content{
        display: table-cell;
        vertical-align: middle;
         text-align: center;
        img{
            width: 5rem;
        }
        p{
            color: $router-view-links;
            font-weight: 300;
            max-width: 50%;
            margin: 1rem auto;
            line-height: 1.6;
        }
        button{
            padding: .6rem 1.7rem;
            color: $minorBlack;
            background: $white;
            @include btnProps();
        }
    }
}
</style>
