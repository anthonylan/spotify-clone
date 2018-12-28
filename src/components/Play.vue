<template>
        <div class="play">
         <i class="fas fa-plus"></i>
         <i class="fas fa-play"></i>
         <i class="fas fa-ellipsis-h"></i>
    </div>
</template>


<script>


export default {
    name: 'play',
    components:{
        
    }
}
</script>


<style lang="scss" scoped>

@import '../assets/scss/variables';


    .play{
      position: relative;
      top: -70%;
      left: 14%;
      color: $white;
      opacity: 0;
      .fa-play{
        color: $white;
        font-size: 1.6rem;
        background: rgba(0, 0, 0, 0.7);
        border: 1px solid $white;
        border-radius: 50%;
        padding: 1rem .9rem .9rem 1.1rem;
        transition: all .2s ease-in-out;
        &:hover{
          transform: scale(1.1);
        }
      }
      .fas{
        margin: .6rem;
        cursor: pointer;
      }
    }
  
  .img-wrap{
    &:hover .play{
      opacity: 1;
    }
  }


</style>


