<template >
<div class="absolute opacity-50 z-10 bg-neutral-500" v-if="$store.state.isOpened">
  
  <div class=" w-1/2 h-1/2  fixed inset-1/4 flex flex-col items-center justify-center bg-neutral-800 opacity-100"> 
  <h2 class="font-mono text-center text-teal-400 text-6xl">{{$store.state.reqValid ? 'Данные записаны.' : 'Что-то пошло не так :с'}}</h2>
  </div>
</div>

<div class="fixed inset-0 bg-slate-500/75 flex flex-col items-center justify-center " @click="hideModal" v-if="show">
<div class="w-80 h-auto bg-white rounded-lg px-5 py-5 md:h-64 md:w-ipad xl:w-desktop ">
  <p class="font-inter text-xl font-medium text-black mb-9 leading-6">Заказать звонок</p>
   <form @submit.prevent="makeOrder"  id="form" required  novalidate >
   <ul class="flex flex-col md:flex-row flex-wrap xl:justify-end
   ">
        <li class="font-inter text-black text-grey-700 font-medium left-0 flex flex-col md:mr-7 xl:mr-5">Телефон&#65121;
        <input v-model="form.phone"  maxlength="12" minlength="12" required pattern="\+?[0-9\s\-\(\)]+" type="text" id="phone" placeholder="+7 (___) ___-__-__" class="w-full mb-5 rounded-md invalid:text-red-500 md:w-44">
        <label  v-if="this.$store.state.isPhoneInvalid" class=" w-full text-teal-400 text-xs text-center" >Это обязательное поле.</label>
        </li>
        <li class="font-inter text-black text-grey-700 font-medium flex flex-col md:mr-7 xl:mr-5">Имя&#65121;
        <input v-model="form.name" required minlength="3" maxlength="12" id="name" type="text" placeholder="Иван Иванов" class="w-full mb-5 bg-grey-500 rounded-md  invalid:text-red-500 md:w-44">
        <label  v-if="this.$store.state.isNameInvalid" class=" w-full text-teal-400 text-xs text-center" >Тебя правда так назвали? Это обязательное поле.</label>
        </li>
        <li class="font-inter text-black text-grey-700 font-medium flex flex-col md:mr-7 xl:mr-5">Email&#65121;
        <input v-model="form.email"  required type="email"  id="email" placeholder="you@example.com" class="w-full mb-5 rounded-md md:w-44 ">
        <label  v-if="this.$store.state.isEmailInvalid" class=" w-full text-teal-400 text-xs text-center" >Угадай что? Это обязательное поле.</label>
        </li>
        <li class="font-inter text-black text-grey-700 font-medium flex flex-col md:w-96 md:mr-7 xl:mr-0 xl:w-44">Город&#65121;
        <select  @change="changeSelect" class="cursor-pointer mb-5 rounded-md font-inter text-black text-grey-700 font-medium">
            <option id="1option" class="1option" ref="option1">{{$store.state.isMsc ? "Москва" : "Питер"}}</option>
            <option id="2option"  class="2option" ref="option2">{{$store.state.isMsc ? "Питер" : "Москва"}}</option>
        </select >
        </li>
        <li class="font-inter text-black text-grey-700 font-medium flex flex-col ">
        <button @click="validation"  class="bg-green-600  text-white h-10 rounded-md md:mt-6 cursor-pointer md:w-44">Отправить</button>
        
    </li>
    </ul>

    </form>   
</div>
  </div>
  



</template>

<script >
import axios from 'axios';
export default {
  name: 'mymodal',
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
    changeSelect(){
     let opt1 = document.getElementById("1option")
     var result = opt1.hasAttribute('selected', false);
     
     console.log(result)
     
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
    
    validation(){
      let name = document.getElementById("name")
      let phone = document.getElementById("phone")
      let email = document.getElementById("email")
      
      
      if (!name.validity.valid) {this.$store.state.isNameInvalid = true} else {this.$store.state.isNameInvalid = false}
      if (!phone.validity.valid) {this.$store.state.isPhoneInvalid = true} else {this.$store.state.isPhoneInvalid = false}
      if (!email.validity.valid) {this.$store.state.isEmailInvalid = true} else {this.$store.state.isEmailInvalid = false}
      if (!this.$store.state.isNameInvalid && !this.$store.state.isPhoneInvalid  && !this.$store.state.isEmailInvalid ) 
      {
        let form = document.getElementById("form")
        this.showRes()
        form.submit()
        this.hideModal()
        form.reset()
        
        
      } else {}
      
    },
    
    makeOrder(){
      
      this.form.city_id = this.$store.state.city_id
      axios.post('http://hh.autodrive-agency.ru/test-tasks/front/task-7/', this.form)
      .then(response => (this.data = response.data.id))
      .then(this.$store.state.reqValid = true)
      
      //.then(form.reset())// сброс формы
      //showModalResponse
      
      
      .catch(error => (this.error = error),
            this.$store.state.reqValid = false
            // можно попробовать словить код ошибки респонса и отдать в модалку
      )
        

    
}
  }
  }
</script>
