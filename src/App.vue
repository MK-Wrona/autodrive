<template>
<my-modal v-model:show="modalVisible">
</my-modal>
  <div>
    <div class="bg-zinc-700 h-screen flex flex-row justify-evenly items-center">
      <h1 class="bg-zinc-700 text-6xl text-center pt-4  text-white">Заказать <br>в </h1>
    <modal-button @click="showModal(), setId(), $store.commit('setMsc')" id="1"><h2>{{cities.id = 1 ? 'Москве':'Питере'}}</h2><h2 class="hover:opacity-30 z-0 ease-in transition-opacity opacity-0 delay-75 z-1">Бордюр?</h2></modal-button>
    <modal-button @click="showModal(), setId(), $store.commit('setSaint')" id="2"><h2>{{cities.id = 2 ? 'Питере':'Москве'}}</h2><h2 class="hover:opacity-30 z-0 ease-in transition-opacity opacity-0 delay-75 z-1">Поребрик?</h2></modal-button>
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
      { 
        
      } else {
        {{$store.state.isMsc}}
        
        };
    },
    

  

  }
}
</script>
