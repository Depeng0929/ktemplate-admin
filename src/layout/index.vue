<script setup lang='ts'>
import AppMain from '~/layout/components/AppMain.vue'
import Header from '~/layout/components/Header/index.vue'
import SideBar from '~/layout/components/SideBar/index.vue'

const collapsed = ref(false)

const headerStyle = reactive({
  height: useCssVar('--header-height'),
})

const sideBarStyle = reactive({
  width: +useCssVar('--sidebar-width'),
  collapsedWidth: +useCssVar('--sidebar-width-collasped'),
})

</script>

<template>
  <n-layout class="h-screen">
    <n-layout-header :style="headerStyle" bordered>
      <Header />
    </n-layout-header>
    <n-layout position="absolute" style="top: 48px;" has-sider>
      <n-layout-sider
        v-model:collapsed="collapsed"
        :native-scrollbar="false"
        bordered
        collapse-mode="width"
        :width="210"
        :collapsed-width="60"
        show-trigger="arrow-circle"
      >
        <SideBar :collapsed="collapsed" />
      </n-layout-sider>
      <n-layout embedded content-style="padding: 24px; min-height: 100%; display: flex;" :native-scrollbar="false">
        <AppMain />
      </n-layout>
    </n-layout>
  </n-layout>
</template>
