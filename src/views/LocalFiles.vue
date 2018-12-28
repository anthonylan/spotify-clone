<template>
    <div class="container">
        <h1>Local Files</h1>
        <p>0 songs, 0 sec</p>
        <button>play</button>
    </div>
</template>




<style lang="scss" scoped>
@import '../assets/scss/variables';
@import '../assets/scss/mixins';
button{
   background: $brand-green;
    color: $white;
    padding: .7rem 2rem;
    @include btnProps();
}
p{
    color: $router-view-links;
}
</style>
