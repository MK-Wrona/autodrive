<template>
    <div class="absolute opacity-100 z-15 bg-yellow-500 w-full h-full" v-if="showResModal"></div>
</template>
<script>
export default {
    name: "modal-response",
    props: {
    showResModal: {
      type: Boolean,
      default:false
    }
  }
}
</script>