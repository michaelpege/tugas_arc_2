<template>
  <div class="card" :class="{active : selected}" @click="onClick">
    <div class="card-head">
      <div :class=data.status>
        {{data.status}}
      </div>
      <p>{{data.nim}}</p>
    </div>
    <div class="card-name">
      {{data.name}}
    </div>
  </div>
</template>

<script>
export default {
 name : "Card", 
 props:{
   data : Object,
   selected : {type : Boolean, default : false},
 },
 methods:{
   onClick(e){
     e.preventDefault()
     this.$emit('select-card',this.data.id)
   }
 }
}
</script>

<style lang="scss" scoped>
  .card{
    @include setup_size(100%,12.5vh);
    border-radius: $card-border-radius;
    background-color : $gray;
    padding : 1% 5%;
    position: relative;
    background-color : $white;
    &:hover{
      background-color : $gray;
    }
    .card-head{
      position: absolute;
      height: 3.5vh;
      top : -1vh;
      justify-content: flex-start !important;
      background-color : $gray;
      border-radius: 4px;
      .cakru,.kru{
        @include setup_size(10vw, 100%);
        @include flex_center(row);
        font-weight: bold;
        border-radius: 4px;
      }
      .cakru{background-color : $cakru;}
      .kru{background-color : $kru;}
      p{margin-left : 1vw; padding : 0 2vw;}
      @include flex_center(row);
    }
    .card-name{
      @include flex_center(row);
      @include setup_size(100%,100%);
      justify-content: flex-start;
      font-size: 1.5vw;
    }
  }
  .active{
    background-color : $gray;
  }
</style>