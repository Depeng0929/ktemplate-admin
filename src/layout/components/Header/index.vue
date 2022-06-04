<script setup lang='ts'>
import Logo from '~/layout/components/Header/components/Logo.vue'
import Actions from '~/layout/components/Header/components/Actions.vue'

const props = defineProps<{
  modelValue?: boolean
}>()

</script>

<template>
  <div class="h-full px-4 flex-center">
    <Logo />
    <div class="flex-1" />
    <Actions class="h-full" />
  </div>
</template>
