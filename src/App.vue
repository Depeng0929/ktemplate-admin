<script setup lang="ts">
import { dateZhCN, zhCN } from 'naive-ui'
</script>

<template>
  <n-config-provider :locale="zhCN" :date-locale="dateZhCN">
    <n-theme-editor>
      <n-message-provider>
        <router-view />
      </n-message-provider>
    </n-theme-editor>
  </n-config-provider>
</template>
