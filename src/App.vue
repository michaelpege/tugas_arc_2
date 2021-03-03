<template>
  <Header title="Tugas Wawan ARC | Michael PG | 13519121"/>
  <div class="container">
    <div class="card-container">
      <template :key="data.id" v-for="data in db">
        <Card :data="data" :selected="data.id===selected" @select-card="selectCard"/>  
      </template>
    </div>
    <Detail v-if="this.selected" :data="selectedData"/>
  </div>
</template>

<script>
import Header from "./components/Header"
import Card from "./components/Card"
import Detail from "./components/Detail"
export default {
  name: 'App',
  components: {Header, Card, Detail},
  data(){
    return {
      db:[],
      selected : null,
      selectedData : null,
    }
  },
  async created(){
    this.db = await this.fetchData()
  },
  methods:{
    selectCard(id){
      if(this.selected==id){
        this.selectedData = null;        
        this.selected = null;
      }else{
        this.selectedData = this.db.filter(row=>row.id===id)[0];
        this.selected = id;
      }
    },
    async fetchData(){
      const res = await fetch("api/wawan");
      const data = res.json()
      return data
    }
  }
}
</script>

<style lang="scss">
body{
  margin : 0;
  padding : 0;
}
header{
  @include flex_center(row);
}
#app{
  max-width: 100vw;
  max-height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  padding : 5vh 10vw;
  box-sizing: border-box;
  background-color : #333333;
}
</style>
