<template>
    <div class="wrap">
        <div class="artist">

        </div>
        <div class="music-controls">
            <div class="top">
                <i class="fas fa-random"></i>
                <i class="fas fa-step-backward"></i>
                <i class="fas fa-play"></i>
                <i class="fas fa-step-forward"></i>
               <i class="fas fa-redo-alt"></i>
            </div>
            <div class="bottom">
                <div class="song-lenght"></div>
            </div>
        </div>
        <div class="extra-controls">

        </div>
    </div>
</template>


<style lang="scss" scoped>
@import '../assets/scss/variables';

.wrap{
    display: flex;
    justify-content: space-between;
    .artist{
        flex-basis: 25%;
    }
    .music-controls{
        flex-basis: 45%;
        margin-top: 1rem;
        text-align: center;
        .top{
            .fa-play{
                color: $white;
                font-size: .8rem;
                border: 1px solid $white;
                border-radius: 50%;
                padding: .7rem .6rem .6rem .8rem;
                margin: 0 .8rem;
                &:hover{
                transform: scale(1.1);
                }
            }
            .fa-step-forward, .fa-redo-alt,
            .fa-step-backward, .fa-random{
                color: $router-view-links;
                padding: 0 1.8rem;
                &:hover{
                    color: $white;
                }
            }
        }
        .bottom{
            margin-top: 1rem;
            .song-lenght{
                background: $nowPlayingLine;
                width: 90%;
                height: .3rem;
                margin: 0 auto;
                border-radius: 50px;
            }
        }
    }
    .extra-controls{
        flex-basis: 25%;
    }
}

</style>
