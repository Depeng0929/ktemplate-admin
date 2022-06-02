<script setup lang="ts">
import { dateZhCN, zhCN } from 'naive-ui'
</script>

<template>
  <n-config-provider :locale="zhCN" :date-locale="dateZhCN">
    <n-theme-editor>
      <main font-sans text="center gray-700 dark:gray-200">
        <router-view />
        <Footer />
      </main>
    </n-theme-editor>
  </n-config-provider>
</template>
