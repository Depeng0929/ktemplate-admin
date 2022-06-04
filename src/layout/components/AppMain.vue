<script setup lang='ts'>
import Footer from '~/layout/components/Footer.vue'
const props = defineProps<{
  modelValue?: boolean
}>()

</script>

<template>
  <div class="flex flex-col flex-1">
    <div class="flex-1">
      <router-view />
    </div>
    <Footer />
  </div>
</template>
