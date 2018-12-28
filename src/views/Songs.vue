<template>
    <div class="container">
        <h1>Songs</h1>
        <button>Play</button>
        <div class="filt-tog"></div>
        <div class="songs">
            <ul>
                <li v-for="(data, index) in songs" :key="index"> {{data.title}} </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'songs',
    data(){
        return{
            
        }
    }
}
</script>


<style lang="scss" scoped>
@import '../assets/scss/mixins';
@import '../assets/scss/variables';
button{
    background: $brand-green;
    color: $white;
    padding: .7rem 2rem;
    @include btnProps();
}
li{
    color: $white;
}
</style>
