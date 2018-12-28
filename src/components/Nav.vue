<template>
 <div id="nav">
    <div class="wrapper">
        <i class="fas fa-ellipsis-h"></i>
        <router-link to="/" exact-active-class="exact-active">Home</router-link> 
        <router-link to="/browse"> Browse</router-link>
        <router-link to="/radio">Radio</router-link>
      <div class="down-links">
          <h3>Your library</h3>
        <router-link to="/madeforyou">Made For You</router-link>
        <router-link to="/recentlyplayed">Recently Played</router-link>
        <router-link to="/songs">Songs</router-link>
        <router-link to="/albums">Albums</router-link>
        <router-link to="/stations">Stations</router-link>
        <router-link to="/localfiles">Local Files</router-link>
        <router-link to="/podcasts">Podcasts</router-link>
      </div>
        <div class="play-lists">
          <h3>Playlists</h3>
          <ul>
            
          </ul>
        </div>
      </div>
      <div class="create-btn">
        <hr>
        <a href="#" @click="trigger"> <i class="fa fa-plus"></i> New Playlist </a>
      </div>
    </div>
</template>

<script>

export default {
    name: 'nav',
    data(){
      return{
  
      }
    },
   methods:{
     trigger(){
       this.$root.$emit('trigger')
     }
   }
}
</script>


<style lang="scss" scoped>
@import '../assets/scss/variables';
#nav {
  height: 99vh;
  width: 240px;
  margin-left: .3rem;
  position: fixed;
  top: 0;
  left: 0;
  background: $scheme-color;
  overflow-y: auto;
  z-index: 1000;
  .wrapper{
    padding: 1.1rem;
    margin-bottom: 10rem;
    box-sizing: border-box;
  }
  a{
    position: relative;
    color: $router-view-links;
    text-decoration: none;
    display: block;
    text-align: left;
    padding: .5rem;
    font-weight: 400;
    cursor: context-menu;
  }
  .exact-active{
    position: relative;
    color: $white;
    &::before{
      position: absolute;
      left: -8%;
      top: 23%;
      content: '';
      height: 1.2rem;
      width: .3rem;
      background: $brand-green;
    }
  }
  .fas{
    color: $white;
    font-size: 1rem;
    padding-left: .5rem;
    margin-bottom: 1.6rem;
  }
  h3{
      margin: 0;
      margin-top: 1.8rem;
      margin-bottom: .4rem;
      padding-left: .4rem;
      text-transform: uppercase;
      color: $router-view-links;
      font-weight: 300;
      font-size: .8rem;
      letter-spacing: .1rem;
    }
    .play-lists{
      ul{
        padding: 0;
        li{
          list-style: none;
          padding:  .3rem.6rem;
          color: $router-view-links;
        }
      }
    }
    .create-btn{
      position: fixed;
      bottom: 11%;
      left: .3rem;
      width: 240px;
      padding: 1rem 0;
      background-color: $scheme-color;
      a{
        color: $router-view-links;
        font-size: 1rem;
        font-weight: 300;
        i{
          border: 1px solid $router-view-links;
          border-radius: 50%;
          padding: .5rem .6rem;
          margin-right: .6rem;
        }
      }
    }
}


</style>
