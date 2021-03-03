<template>
  <div class="detail">
    <h2>Detail Wawancara</h2>
    <LabText label="nama" :value="data.name"/>
    <LabText label="nim" :value="data.nim"/>
    <LabText label="status" :value="data.status"/>
    <LabText label="date" :value="data.date"/>
    <div class="text-area labtext">
      <label>Catatan</label>
      <div class="message">
        <ul>
          <li :key="idx" v-for="(data,idx) in data.content">
            {{data}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import LabText from "./LabText";
export default {
  name:"Detail",
  props:{
    data : Object
  },
  components:{LabText}
}
</script>

<style lang="scss" scoped>
  .detail{
    @include setup_size(100%,90vh);
    @include flex_center(column);
    align-items: flex-start;
    justify-content: flex-start;
    background-color : $white;
    border-radius: 8px;
    padding : 4% 5%;
  }
  .text-area{
    @include setup_size(100%, 20vh);
    display: grid;
    grid-template-rows: 2.5vh 1fr;
    gap : 5%;
    margin : 10px 0;
    div{
      padding : 5%;
      padding-left : 10%;
      border-radius: 8px;
      font-size : 1.25vw;
      background-color : $gray;
    }
    li{
      margin-bottom : 3%;
    }
  }
</style>