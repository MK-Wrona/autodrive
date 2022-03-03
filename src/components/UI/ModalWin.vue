<template >
<div class="absolute opacity-100 z-15" v-if="show">
  <div class="w-1/2 h-1/2  fixed inset-1/4 flex flex-col items-center justify-center">
  <div class="absolute w-8 h-8 ease-in transition-opacity  delay-75 hover:bg-teal-400 focus:outline-none focus:ring focus:ring-violet-300 top-0 right-0 cursor-pointer">

<img :src="require(`./Group.svg`)" class=" absolute top-0 right-0" @click="hideModal">
  </div>
   <form @submit.prevent="makeOrder" required class="w-full h-full bg-gray-500 flex flex-col justify-center items-center z-15 opacity-100">
    
        <select class="cursor-pointer">
            <option class="1" >{{$store.state.isMsc ? "Москва" : "Питер"}}</option>
            <option class="2">{{$store.state.isMsc ? "Питер" : "Москва"}}</option>
        </select >
        <label class="w-1/2 bg-grey-500 text-red-500 z-15"><input v-model="form.name"  minlength="3" maxlength="12" placeholder="Имя" class="w-full bg-grey-500 rounded-md my-1.5 py-1.5 z-15"></label>
        <label class="w-1/2 bg-grey-500 text-red-500 z-15"><input v-model="form.phone"  placeholder="Телефон" class="w-full rounded-md my-1.5 py-1.5 z-15"></label>
        <label class="w-1/2 bg-grey-500 text-red-500 z-15"><input v-model="form.email"  type="email" placeholder="E-mail" class="w-full rounded-md my-1.5 py-1.5 z-15"></label>
        <button type="submit" class="inset-2/3 bg-slate-100 py-1.5 pm-1.5 rounded-md hover:bg-teal-400 focus:outline-none delay-75 focus:ring focus:ring-violet-300 top-0 right-0 cursor-pointer">Отправить</button>
        
    
    </form>   
  </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'my-modal',
  data(){
    return {
      form: {
        name: "",
        phone: "",
        email: "",
        city_id: 0
      }
    }
  },
  props: {
    show: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    hideModal(){
      this.$emit('update:show', false)
    },
    setAtt(){
      if (this.id = 1) 
      { 
        let opt1 = document.querySelector(".1")
        opt1.setAttribute(checked, true),
        this.cityId = 1
      
      } else {
        {{$store.state.setSaint(isMsc)}}
        let opt2 = document.querySelector(".2")
        opt2.setAttribute(checked, true),
        this.cityId = 2
        };
    },
    makeOrder(){
      this.form.city_id = this.$store.state.city_id
      axios.post('http://hh.autodrive-agency.ru/test-tasks/front/task-7/', this.form)
      .then(response => (this.data = response.data.id))
      .catch(error => (this.error = err))
        

    
}
  }
}
</script>
