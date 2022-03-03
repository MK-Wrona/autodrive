<template>
<form class="w-46 h-46 opacity-100 ">
    <div class="w-full h-full bg-gray-500 flex flex-col justify-center items-center ">
        <select class="">
            <option class="1">{{$store.state.isMsc ? "Москва" : "Питер"}}</option>
            <option class="2">{{$store.state.isMsc ? "Питер" : "Москва"}}</option>
        </select >
        <label class="w-full bg-grey-500"><input placeholder="Имя" class="w-full bg-grey-500"></label>
        <label class="w-full bg-grey-500"><input placeholder="Телефон" class="w-full"></label>
        <label class="w-full bg-grey-500"><input placeholder="E-mail" class="w-full"></label>
        <button class="inset-2/3">Отправить</button>
        
    </div>
    </form>   
</template>
<script>
export default {
  name: 'modal-form',
  props:['city']
  
}
</script>
