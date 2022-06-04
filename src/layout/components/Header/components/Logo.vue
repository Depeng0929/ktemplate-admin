<script setup lang='ts'>
import LogoSvg from '~/assets/logo.svg'
const props = defineProps<{
  modelValue?: boolean
}>()

</script>

<template>
  <n-a href="javascript:void(0)" class="h-full flex-center">
    <img :src="LogoSvg" alt="logo" class="h-7 mr-4">
    <n-h1 class="font-bold text-lg my-0">
      KTemplate Admin
    </n-h1>
  </n-a>
</template>
