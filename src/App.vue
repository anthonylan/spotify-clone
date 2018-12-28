<template>
  <div id="app">
    <div id="top-bar">
      <i class="fas fa-chevron-left"></i>
      <i class="fas fa-chevron-right"></i>
      <input type="text" class="search" placeholder="Search">
       <router-link to="/user">
        <img src="./assets/user.png">
        {{user}}
       </router-link>
       <span class="fas fa-chevron-down" v-on:click="dropIsShown = !dropIsShown"></span>
       <div v-if="dropIsShown" class="dropdown" v-bind:class="{activate: dropIsShown}">
         <li>Private Session</li>
         <li>Account</li>
         <li>Settings</li>
         <li>Log Out</li>
       </div>
    </div>
    <Nav />
    <div class="now-playing">
      <Now-playing />
    </div>
    <div id="friends">
      <div class="wrapper">
      <h4>See what your friends are playing</h4>
      <button>find friends</button>
      </div>
    </div>
    <Create-play-list />
    <div class="not-available-sm">
      <h1>Sorry! </h1>
      <p>We are currently not supporting your device(but we will soon)</p>
    </div>
    <router-view />
  </div>
</template>


<script>
import Nav from './components/Nav.vue'
import NowPlaying from './components/NowPlaying.vue'
import CreatePlayList from './components/CreatePlayList.vue'


export default {
  name: 'app',
  components:{
    Nav,
    NowPlaying,
    CreatePlayList
  },
  data(){
    return{
      user: 'Anthony Lan',
      dropIsShown: false,
       pLisActive: true
    }
  },
  methods:{
    dropdown (){
      if(this.dropIsShown == false){
        this.dropIsShown = true
      }else{
        this.dropIsShown = false
      }
    }
  }
}
</script>



<style lang="scss">
@import url("https://use.fontawesome.com/releases/v5.6.3/css/all.css");
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900');
@import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css');
@import './assets/scss/variables';
@import './assets/scss/mixins';


body{
  margin: 0;
  font-family: 'Roboto', sans-serif;
  background: $minorBlack;

}

#app{
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}

#top-bar{
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 68%;
  height: 4rem;
  margin: 0 auto;
  background: $minorBlack;
  z-index: 1000;
  input{
    position: relative;
    display: inline-block;
    width: 12rem;
    height: 1.8rem;
    border: none;
    outline: none;
    border-radius: 50px;
    padding-left: 1rem;
    color: $scheme-color;
    &:focus{
      outline: none;
    }
  }
   ::placeholder{
      color: $scheme-color;
    }
  i{
    padding: 1rem .8rem;
    color: $white;
  }
  a{
    float: right;
    color: $white;
    text-decoration: none;
    transform: translateX(-100%);
    img{
      width: 2.2rem;
      transform: translateY(25%);
      border-radius: 50px;
    }
  }
  span.fas{
    float: right;
    clear: both;
    display: inline-block;
    color: $white;
    margin-right: 5rem;
    margin-top: -1rem;
  }
  .dropdown{
    position: relative;
    right: -70.1%;
    margin-top: 1rem;
    margin-right: 4rem;
    background: darken($nowPlayingBg, 1);
    width: 15rem;
    padding-right: 0;
    display: block;
    box-sizing: border-box;
    box-shadow: 2px 2px 10px 4px $scheme-color;
    z-index: 9999;
    &::before{
      content: '';
      position: absolute;
      right: .5rem;
      top: -22%;
      width: 0px;
      height: 0px;
      border-right: 1rem solid transparent;
      border-left: 1rem solid transparent;
      border-top: 1rem solid transparent;
      border-bottom: 1rem solid darken($nowPlayingBg, 1);
    }
    li{
      list-style: none;
      display: block;
      color: $router-view-links;
      padding: .5rem 2rem;
      cursor: context-menu;
      &:hover{
        background: lighten($nowPlayingBg, 10);
        color: $white;
      }
    }
  }

}
//Toggle class for dropdown
.activate{
  display: none;
}


//See what your friends are playing
#friends{
  position: fixed;
  right: 0;
  top: 0;
  width: 280px;
  height: 99vh;
  background: #242424;
  display: table;
  z-index: 1000;
  .wrapper{
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    padding-bottom: 4rem;
    h4{
      color: $white;
      max-width: 80%;
      margin: 0 auto 2rem auto;
      font-weight: 500;
      font-size: 1.3rem;
      line-height: 1.5;
    }
    button{
     @include btnGlobal();
     background: transparent;
      
    }
  }
}
.container{
  position: relative;
  margin: 5rem 20% 2rem 20%;
  h3{
    color: $white;
    font-weight: 500;
    font-size: 1.3rem;
    margin: 0;
  }
  h1{
    color: $white;
    font-size: 2.8rem;
  }
}

  hr{
    border: none;
    background: $nowPlayingLine;
    height: 1px;
  }
.now-playing{
  position: fixed;
  bottom: 0;
  left: 0;
  height: 85px;
  width: 99.40%;
  z-index: 10;
  margin-left: .3rem;
  background: $nowPlayingBg;
  z-index: 1100;
}
::-webkit-scrollbar{
  width: 1.1rem;
}
::-webkit-scrollbar-thumb{
  background-color: $scroll;
  outline: 1px solid $scroll;
}
::-webkit-scrollbar-track{
  -webkit-box-shadow: inset 0 0 0 transparent;
}


@media (max-width:550px) {
  .not-available-sm{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  background: $white;
  height: 100vh;
  width: 100%;
  padding: 2rem;
  overflow-x: hidden;
  p{
    max-width: 90%;
    line-height: 1.6;
  }
}
}
@media (min-width:550px) {
  .not-available-sm{
    display: none;
  }
}


</style>
