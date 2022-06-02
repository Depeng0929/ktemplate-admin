<script setup lang='ts'>
import AppMain from '~/layout/components/AppMain.vue'
import Footer from '~/layout/components/Footer.vue'
const props = defineProps<{
  modelValue?: boolean
}>()

</script>

<template>
  <n-layout class="h-screen">
    <n-layout-header class="h-16 p-4" bordered>
      颐和园路
    </n-layout-header>
    <n-layout position="absolute" style="top: 64px; bottom: 64px" has-sider>
      <n-layout-sider
        content-style="padding: 24px;"
        :native-scrollbar="false"
        bordered
        collapse-mode="width"
        :collapsed-width="120"
        :width="240"
        show-trigger="arrow-circle"
      >
        <n-h2 v-for="i in 20" :key="i">
          海淀桥
        </n-h2>
      </n-layout-sider>
      <n-layout content-style="padding: 24px;" :native-scrollbar="false">
        <AppMain />
      </n-layout>
    </n-layout>
    <n-layout-footer
      position="absolute"
      class="h-16 p-4"
      bordered
    >
      <Footer />
    </n-layout-footer>
  </n-layout>
</template>
