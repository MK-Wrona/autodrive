<template >
<div class="absolute opacity-50 z-10 bg-neutral-500 rounded-md" v-if="$store.state.isOpened">
  
  <div class=" w-1/2 h-1/2  fixed inset-1/4 flex flex-col items-center justify-center bg-neutral-800 opacity-100 rounded-xl"> 
  <h2 class="font-inter text-center text-teal-400 text-3xl  ">{{$store.state.reqValid ? 'Данные записаны.' : 'Что-то пошло не так :с'}}</h2>
  </div>
</div>

<div class="fixed inset-0 bg-slate-500/75 flex flex-col items-center justify-center" v-if="show">
<div class="w-80 h-auto bg-white rounded-lg px-5 py-5 md:h-64 md:w-ipad xl:w-desktop ">
  <p class="font-inter text-xl font-medium text-black mb-9 leading-6">Заказать звонок</p>
   <form @submit.prevent="makeOrder"  id="form" required  novalidate >
   <ul class="flex flex-col md:flex-row flex-wrap xl:justify-end
   ">
        <li class="font-inter text-black text-grey-700 font-medium left-0 flex flex-col md:mr-7 xl:mr-5">Телефон&#65121;
        <input v-model="form.phone"  @focus="applyMask"  minlength="16" maxlength="16" required type="text" id="phone" placeholder="+7 (___) ___-__-__" class="w-full mb-5 rounded-md invalid:text-red-500 md:w-44">
        <label  v-if="this.$store.state.isPhoneInvalid" class=" w-full text-teal-400 text-xs text-center -mt-5" >Это обязательное поле.</label>
        </li>
        <li class="font-inter text-black text-grey-700 font-medium flex flex-col md:mr-7 xl:mr-5 xl:order-first">Имя&#65121;
        <input v-model="form.name" required minlength="3" maxlength="12" id="name" type="text" placeholder="Иван Иванов" class="w-full mb-5 bg-grey-500 rounded-md  invalid:text-red-500 md:w-44">
        <label  v-if="this.$store.state.isNameInvalid" class=" w-full text-teal-400 text-xs text-center -mt-5" >Это обязательное поле.</label>
        </li>
        <li class="font-inter text-black text-grey-700 font-medium flex flex-col md:mr-7 xl:mr-5">Email&#65121;
        <input v-model="form.email"  required type="email"  id="email" placeholder="you@example.com" class="w-full mb-5 rounded-md md:w-44 ">
        <label  v-if="this.$store.state.isEmailInvalid" class=" w-full text-teal-400 text-xs text-center -mt-5" >Это обязательное поле.</label>
        </li>
        <li class="font-inter text-black text-grey-700 font-medium flex flex-col md:w-96 md:mr-7 xl:mr-0 xl:w-44">Город&#65121;
        <select  v-model="form.city_id" id="select_city" class="cursor-pointer mb-5 rounded-md font-inter text-black text-grey-700 font-medium">
            <option id="1option" :value="1" class="1option" ref="option1">{{$store.state.isMsc ? "Москва" : "Питер"}}</option>
            <option id="2option"  :value="2" class="2option" ref="option2">{{$store.state.isMsc ? "Питер" : "Москва"}}</option>
        </select >
        </li>
        <li class="font-inter text-black text-grey-700 font-medium flex flex-col ">
        <button @click="validation" type="submit"  class="bg-green-600  text-white h-10 rounded-md md:mt-6 cursor-pointer md:w-44">Отправить</button>
        
        
    </li>
    </ul>

    </form>   
</div>
  </div>
  

</template>

<script >
import IMask from 'imask';
import axios from 'axios';
export default {
  name: 'mymodal',
  data(){
    return {
      form: {
        name: "",
        phone: "",
        email: "",
        city_id : this.$store.state.city_id
      },
      
     
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
    
    showRes(){
      this.$store.commit('openResponse')
    },
    setAtt(){
      if (this.id = 1) 
      { 
        let opt1 = document.querySelector(".1")
        opt1.setAttribute(checked, true)
    
      
      } else {
        {{$store.state.setSaint(isMsc)}}
        let opt2 = document.querySelector(".2")
        opt2.setAttribute(checked, true)
        
        };
    },

    applyMask(){

var phone = document.getElementById('phone');
var maskOptions = {
  mask: '+{7}(000)000-00-00',
  min:10,
  max:10
};
const mask = IMask(phone, maskOptions);

    },
  
   validation(){
      event.preventDefault();
      let name = document.getElementById("name")
      let phone = document.getElementById("phone")
      let email = document.getElementById("email")
      
      
      if (!name.validity.valid) {this.$store.state.isNameInvalid = true} else {this.$store.state.isNameInvalid = false}
      if (!phone.validity.valid) {this.$store.state.isPhoneInvalid = true} else {this.$store.state.isPhoneInvalid = false}
      if (!email.validity.valid) {this.$store.state.isEmailInvalid = true} else {this.$store.state.isEmailInvalid = false}
      if (!this.$store.state.isNameInvalid && !this.$store.state.isPhoneInvalid  && !this.$store.state.isEmailInvalid ) 
      {
        
        let form = document.getElementById("form")
        form.submit()
        form.reset()
        this.hideModal()
        this.showRes()
      
      } else {}
      
    },
    
    makeOrder(){
      
      this.form.phone = this.form.phone.replace(/[^0-9+]/g, '');
      axios.post('http://hh.autodrive-agency.ru/test-tasks/front/task-7/', this.form)
      .then(response => (this.data = response.data.id))
      .then(this.$store.state.reqValid = true)
      .catch(error => (this.error = error),
            this.$store.state.reqValid = false
            // можно попробовать словить код ошибки респонса и отдать в модалку
      )
}
  }
  }
</script>
