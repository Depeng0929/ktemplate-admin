<script setup lang='ts'>
import Avatar from '~/layout/components/Header/components/Avatar.vue'
import Notice from '~/layout/components/Header/components/Notice.vue'
import Search from '~/layout/components/Header/components/Search.vue'

</script>

<template>
  <div class="h-full flex-center">
    <Search class="mr-2" />
    <div class="h-full flex-center hover:bg-gray-50 px-2 mr-4">
      <n-text depth="3" class="i-mdi:progress-question inline-block text-xl cursor-pointer" />
    </div>
    <Notice class="mr-6" />
    <Avatar class="mr-6" />
  </div>
</template>
