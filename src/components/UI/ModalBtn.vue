<template>
  <div class="md:text-base text-2xl bg-zinc-500 h-1/4 max-h-fit md:w-2/6 w-60 min-w-max rounded-md font-mono text-center flex items-center justify-center">
      <button class="bg-slate-100 h-2/6 w-2/6 rounded-md hover:bg-teal-400"><slot></slot></button>
  </div>
</template>

<script>
export default {
  name: 'modal-button',
  methods: {
      
      
  }
}
</script>