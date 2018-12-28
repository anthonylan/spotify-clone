<template>
  <div class="container">
   <h3>Most Popular</h3>
   <hr>
   <div class="artists">
     <div class="artist">
      <div class="img-wrap">
       <img src="../assets/artists/chainsmokers.jpg">
       <Play />
     </div>
       <router-link to="/chainsmokers">The Chainsmokers</router-link>
     </div>
    <div class="artist">
      <div class="img-wrap">
       <img src="../assets/artists/coldplay.jpg">
       <play /> 
     </div>
     <router-link to="/chainsmokers">Cold Play</router-link>
     </div>
    <div class="artist">
      <div class="img-wrap">
       <img src="../assets/artists/charlie.jpg">
       <play /> 
     </div>
     <router-link to="/chainsmokers">Charlie Puth</router-link>
     </div>
     <div class="artist">
      <div class="img-wrap">
       <img src="../assets/artists/sia.jpg">
       <play /> 
     </div>
     <router-link to="/chainsmokers">Sia</router-link>
     </div>
   </div>
   <h3>Focus</h3>
     <span>Music to help you concentrate</span>
     <hr>
     <div class="artists">
    <div class="artist" id="nb">
      <div class="img-wrap">
       <img src="../assets/artists/piano.jpg">
       <play /> 
     </div>
     <router-link to="/">Peacful Piano</router-link>
        <span>68,620 followers</span>
     </div>
    <div class="artist" id="nb">
      <div class="img-wrap">
       <img src="../assets/artists/lifo.jpg">
       <play /> 
     </div>
     <router-link to="/">Lo-Fi Beats</router-link>
        <span>261,802 followers</span>
     </div>
    <div class="artist" id="nb">
      <div class="img-wrap">
       <img src="../assets/artists/work.jpg">
       <play /> 
     </div>
     <router-link to="/">Work with Music</router-link>
        <span>10,295 followers</span>
     </div>
    <div class="artist" id="nb">
      <div class="img-wrap">
       <img src="../assets/artists/concentration.jpg">
       <play /> 
     </div>
     <router-link to="/">Maximum Concentration</router-link>
      <span>23,445 followers</span>
     </div>
     </div>
      <h3>Hip-Hop</h3>
     <hr>
     <div class="artists">
    <div class="artist" id="nb">
      <div class="img-wrap">
       <img src="../assets/artists/cardib.jpg">
       <play /> 
     </div>
     <router-link to="/">Cardi B</router-link>
      <span>8,8 Mln followers</span>
     </div>
    <div class="artist" id="nb">
      <div class="img-wrap">
       <img src="../assets/artists/lamar.jpg">
       <play /> 
     </div>
     <router-link to="/">Kendrick Lamar</router-link>
      <span>3,3 Mln followers</span>
     </div>
    <div class="artist" id="nb">
      <div class="img-wrap">
       <img src="../assets/artists/eminem.jpg">
       <play /> 
     </div>
     <router-link to="/">Eminem</router-link>
      <span>12 Mln followers</span>
     </div>
    <div class="artist" id="nb">
      <div class="img-wrap">
       <img src="../assets/artists/sean.jpg">
       <play /> 
     </div>
     <router-link to="/">Big Sean</router-link>
      <span>4 Mln followers</span>
     </div>
     </div>
  </div>
</template>

<script>


import Play from '../components/Play.vue'


export default {
  name: 'home',
  components:{
    Play
  },
  data(){
    return{
     showIcons: true
    }
  },
  methods:{

  }
}
</script>


<style lang="scss" scoped>

@import '../assets/scss/variables';


.artists{
  margin-top: 2rem;
  padding-bottom: 4rem;
  display: flex;
  justify-content: space-between;
  .artist{
    width: 220px;
    height: 240px;
    //display: inline-block;
    margin-bottom: 2rem;
    &:hover .img-wrap::before{
      display: block;
    }
  }
  .img-wrap{
    width: 200px;
    height: 200px;
    position: relative;
    overflow: hidden;
    border-radius: 50%;
    &::before{
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: rgba(0, 0, 0, 0.3);
      transition: all .2s ease-in-out;
      display: none;
    }
    img{
      display: inline;
      margin: 0 auto;
      margin-left: -25%;
      height: 100%;
      width: auto;
    }
  }
  #nb{
    max-width: 220px;
    margin-right: .1rem;
    .img-wrap{
      border-radius: 0%;
      width: 210px;
    }
    a{
      text-align: left;
      margin-left: 0;
    }
  }
  a{
    display: block;
    text-decoration: none;
    text-align: center;
    color: $white;
    margin-left: -10%;
    margin-top: 1rem;
    &:hover{
      text-decoration: underline;
    }
  }
}
span{
      color: $router-view-links;
      font-weight: 300;
    }
</style>
