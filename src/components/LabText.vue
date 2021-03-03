<template>
  <div class="labtext">
    <label>{{label}} : </label>
    <div>{{value}}</div>
  </div>
</template>

<script>
export default {
  name : "LabText",
  props : {
    label : String,
    value : String
  }
}
</script>

<style lang="scss" scoped>
  .labtext{
    @include setup_size(100%, 10vh);
    display: grid;
    grid-template-rows: 1fr 3fr;
    gap : 5%;
    margin : 10px 0;
    div{
      @include flex_center(row);
      justify-content: flex-start;
      padding-left : 5%;
      font-size : 1.25vw;
      background-color : $gray;
      
    }
  }
</style>