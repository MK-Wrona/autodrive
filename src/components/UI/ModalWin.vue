<template >
<div>
<div class="absolute opacity-50 z-15 bg-neutral-500 w-full h-full" v-if="shown">
  <div class=" w-1/2 h-1/2  fixed inset-1/4 flex flex-col items-center justify-center bg-neutral-800 opacity-100"> 
  <h2 class="font-mono text-center text-green-500 text-4xl">{{$store.state.reqValid ? 'Победа' : 'Не очень победа'}}</h2>
  
  </div>
</div>
<div class="absolute opacity-100 z-15" v-if="show">
  <div class="w-1/2 h-1/2  fixed inset-1/4 flex flex-col items-center justify-center">
  <div class="absolute w-8 h-8 ease-in transition-opacity  delay-75 hover:bg-teal-400 focus:outline-none focus:ring focus:ring-violet-300 top-0 right-0 cursor-pointer">

<img :src="require(`./Group.svg`)" class=" absolute top-0 right-0" @click="hideModal">
  </div>
  
   <form @submit.prevent="makeOrder"  novalidate class="w-full h-full bg-gray-500 flex flex-col justify-center items-center z-15 opacity-100">
    
        <select class="cursor-pointer">
            <option class="1" >{{$store.state.isMsc ? "Москва" : "Питер"}}</option>
            <option class="2">{{$store.state.isMsc ? "Питер" : "Москва"}}</option>
        </select >
        <input v-model="form.name" required minlength="3" maxlength="12" id="name" type="text" placeholder="Имя" class="w-1/2 bg-grey-500 rounded-md my-1.5 py-1.5 z-15 invalid:text-red-500 invalid:border-2 invalid:border-rose-600">
        <label  v-if="this.$store.state.isNameInvalid" class=" w-max text-rose-600 text-xs" >Тебя правда так назвали? Это обязательное поле.</label>
        <input v-model="form.phone"  minlength="12" maxlength="12" required v-mask="'+7##########'" pattern="[789][789][0-9][0-9]" type="phone" id="phone" placeholder="+7 (___) ___-__-__" class="w-1/2 rounded-md my-1.5 py-1.5 z-15">
        <label  v-if="this.$store.state.isPhoneInvalid" class=" w-max text-rose-600 text-xs" >Это обязательное поле.</label>
        <input v-model="form.email"  required type="email"  id="email" placeholder="E-mail" class="w-1/2 rounded-md my-1.5 py-1.5 z-15">
        <label  v-if="this.$store.state.isEmailInvalid" class=" w-max text-rose-600 text-xs" >Угадай что? Это обязательное поле.</label>
        <button @click="validation" type="submit" class="inset-2/3 bg-slate-100 py-1.5 pm-1.5 rounded-md hover:bg-teal-400 focus:outline-none delay-75 focus:ring focus:ring-violet-300 top-0 right-0 cursor-pointer">Отправить</button>
        
    
    </form>   
    
  </div>

</div>
</div>
</template>

<script >
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
      },

      shown: false,
    }
  },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    
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
        this.applyMask;
      
      } else {
        {{$store.state.setSaint(isMsc)}}
        let opt2 = document.querySelector(".2")
        opt2.setAttribute(checked, true),
        this.cityId = 2
        this.applyMask;
        };
    },
    showModalResponse(){
      this.shown = true;
      setTimeout(() => {
        this.shown = false;
      }, 1000);

    },
    validation(){
      let name = document.getElementById("name")
      let phone = document.getElementById("phone")
      let email = document.getElementById("email")
      if (!name.validity.valid) {this.$store.state.isNameInvalid = true} else {this.$store.state.isNameInvalid = false}
      if (!phone.validity.valid) {this.$store.state.isPhoneInvalid = true} else {this.$store.state.isPhoneInvalid = false}
      if (!email.validity.valid) {this.$store.state.isEmailInvalid = true} else {this.$store.state.isEmailInvalid = false}
    },
    
    makeOrder(){
      this.form.city_id = this.$store.state.city_id
      axios.post('http://hh.autodrive-agency.ru/test-tasks/front/task-7/', this.form)
      .then(response => (this.data = response.data.id))
      .then(this.$store.state.reqValid = true)
  
      //.then(EventTarget.reset())// сброс формы
      
      
      .catch(error => (this.error = error),
            this.$store.state.reqValid = false
            // можно попробовать словить код ошибки респонса и отдать в модалку
      )
        

    
}
  }
  }
</script>
