<template>
<mymodal v-model:show="modalVisible">
</mymodal>
  <div>
    <div class="bg-zinc-700 h-screen flex md:flex-row flex-col justify-evenly items-center">
      <h1 class="bg-zinc-700 md:text-6xl text-4xl  text-center pt-4  text-white">Заказать <br>в </h1>
    <modal-button @click="showModal(), setId(), $store.commit('setMsc')" id="1"><h2 class="font-mono text-xl  text-center flex items-center justify-center">{{cities.id = 1 ? 'Москве':'Питере'}}</h2><h2 class="font-mono md:text-base text-xs text-center text-white">>Бордюр?</h2></modal-button>
    <modal-button @click="showModal(), setId(), $store.commit('setSaint')" id="2"><h2 class="font-mono text-xl text-center flex items-center justify-center">{{cities.id = 2 ? 'Питере':'Москве'}}</h2><h2 class="font-mono md:text-base text-xs text-center text-white">>Поребрик?</h2></modal-button>
  </div>
  </div> 
  
</template>
<script>
export default {
  data(){
    return{
      modalVisible: false,
      cities: [
 {
 id: 1,
 name: 'Москва'
 },
 {
 id: 2,
 name: 'Санкт-Петербург'
 },
 {
 id: 3,
 name: 'Казань'
 }
]
    }
  },
  methods: {
    showModal(){
      this.modalVisible = true;
      
      
    },
  
    setId(){
      if (this.id = 1) 
      { this.$store.state.mscIsPicked = true
        this.$store.state.saintIsPicked = false
        
      } if (this.id = 2) {
        this.$store.state.mscIsPicked = false
        this.$store.state.saintIsPicked = true
        //this.$store.state.isMsc = false
        
        } else {};
    },
    

  

  }
}
</script>
