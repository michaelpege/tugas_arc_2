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

const data = [
		{
			"id": 1,
			"name": "Jason Stanley Yoman",
			"nim": 13519019,
			"status": "cakru",
			"date": "2021-03-01",
			"content": [
				"Yoman micnya berisik karena ternyata di linux drivernya ga ada noise canceling",
				"Kalo dikasih 3 permintaan, dia bakal minta buat nambah permintaan (cliche emang i know)"
			]
		},
		{
			"id": 2,
			"name": "Kevin Ryan",
			"nim": 13519191,
			"status": "cakru",
			"date": "2021-03-01",
			"content": [
				"Pas lagi wawan dia baru inget ada deadline probstat, jadinya nyambi",
				"Movie yang paling lucu buat dia : pulp fiction"
			]
		},
		{
			"id": 3,
			"name": "Cynthia Rusadi",
			"nim": 13519118,
			"status": "cakru",
			"date": "2021-03-01",
			"content": [
				"Telat masuk karena.. *saya lupa maaf",
				"Jika tiba-tiba dia punya gajah, dan ngga bisa diusir gajahnya mau dia pelihara (dapet dari random question :))"
			]
		},
		{
			"id": 4,
			"name": "Kinantan Arya Bagaspati",
			"nim": 13519044,
			"status": "cakru",
			"date": "2021-03-01",
			"content": [
				"Breaking news! Dia ga jadi sekelompok stima sama vl karena ada janji sedari masuk jurusan",
				"Kalo dapet 100 ribu dollar mau diapain? Di tabung :)"
			]
		},
		{
			"id": 5,
			"name": "Jesson Gosal Yo",
			"nim": 13519079,
			"status": "kru",
			"date": "2021-03-01",
			"content": [
				"Ternyata dia udah lama ga main dota, lagi asik main divinity 2",
				"Maaf sal, gara-gara saya anda jadi terjebak wawancara 1 jam :v"
			]
		},
		{
			"id": 6,
			"name": "Steven Nataniel Kodyat",
			"nim": 13519002,
			"status": "kru",
			"date": "2021-03-01",
			"content": ["Beliau lagi sibuk nyari-nyari display port apaan :)"]
		}
	]

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
    this.db = data;
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
