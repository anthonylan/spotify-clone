<template>

    <div class="playlist animated fadeIn" v-bind:class="{plactive: isActive}">
         <div class="playlist-form">
             <p>Create Playlist</p>
               <hr>
            <div class="wrapper">
             <form>
               <label>Name</label>
               <input type="text" placeholder="New Playlist" v-model="playlist">
               <div class="seperator">
                 <div class="choose-img">
                     <label>Image</label>
                     <img src="../assets/msymbol.png">
                     <button class="choose">choose image</button>
                 </div>
                 <div class="desc">
                   <label>Description</label>
                   <textarea rows="12" placeholder="Give your playlist a catchy description"></textarea>
                 </div>
               </div>
               <div class="bottom">
                <p><i class="fas fa-exclamation"></i>Experimental purpose only. Changes to description and image will not be saved.</p>
                <button class="cancel" @click="closeplaylist">Cancel</button>
                <button class="create" @click="createList">Create</button>
               </div>
             </form>
           </div>
         </div>
      </div>

</template>

<script>

export default {
  
    data(){
        return{
           isActive: true,
            playlist: '',
            playlists:[
            {"list": 'Adele'},
            {"list": 'Ed Sheeran'},
            {"list": 'Kendrick Lamar'}
         ]
        }
    },
    methods:{
        closeplaylist(){
            this.isActive = true
        },
        createList(){
            this.playlists.push({list: this.playlist})
           console.log(this.playlist);
           
        }
    },
    mounted(){
      this.$root.$on('trigger', () => {
        this.isActive = false
      })
    }
}
</script>


<style lang="scss" scoped>
@import '../assets/scss/variables';
@import '../assets/scss/mixins';

.playlist{
    position: fixed;
    top: 10%;
    left: 25%;
    width: 50%;
    height: auto;
    margin: 0 auto;
    background: lighten($nowPlayingBg, 2);
    box-shadow: 2px 2px 10px 4px $scheme-color;
    z-index: 1000;
    .wrapper{
        width: 90%;
        height: 100%;
        margin-left: 1.4rem;
        .cancel, .choose{
            background: lighten($scheme-color, 5);
        }
    }
    p{
        text-align: center;
        color: $white;
        margin: 0;
        padding-top: 1rem;
    }
    label{
        color: $router-view-links;
        margin: .8rem 0;
        display: block;
    }
    input, textarea{
        background: $white;
        border: none;
        color: #555;
        width: 100%;
        height: auto;
        padding: .6rem 1rem;
        &:focus{
            outline: none;
        }
    }
    button{
        @include btnGlobal();
        margin: .9rem;
    }
    .seperator{
        display: grid;
        grid-template-columns: 1fr 2fr;
        .choose-img{
            img{
                margin-left: 1.6rem;
            }
        }
    }
    .bottom{
        margin: 0;
        text-align: center;
        p{
            text-align: left;
            padding: .5rem 1rem;
            margin: 1rem 0;
            background-color:$noti;
            width: 100%;
            i{
                padding-right: .6rem;
                border: 1px solid $white;
                border-radius: 50%;
                padding: .3rem .5rem .2rem .5rem;
                margin-right: .4rem;
                font-size: .7rem;
            }
        }
        .create{
            background: $brand-green;
            border-color: $brand-green;
        }
    }
}
.plactive{
    display: none;
}

</style>
