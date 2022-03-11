<template>
<mymodal v-model:show="modalVisible">
</mymodal>
  
    <div class="bg-white  flex sm:flex-row flex-col items-center my-2.5 mx-2.5 sm:mt-5 sm:ml-10 md:ml-20   ">
    <modal-button @click="showModal(), setId(), $store.commit('setMsc')" id="1">Заказать в{{cities.id = 1 ? ' Москву':' Санкт-Петербург'}}</modal-button>
    <modal-button @click="showModal(), setId(), $store.commit('setSaint')" id="2">Заказать в{{cities.id = 2 ? ' Санкт-Петербург':' Москву'}}</modal-button>
  
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
