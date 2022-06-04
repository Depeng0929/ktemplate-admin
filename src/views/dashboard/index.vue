<script setup lang="ts">
const loading = ref(true)

onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 2000)
})
</script>

<template>
  <div>
    <div class="flex-center ">
      <n-card
        v-for="i in 4"
        :key="i"
        class="mx-3"
        :segmented="{
          content: true,
          footer: 'soft'
        }"
      >
        <template #header>
          <n-text class="text-sm text-gray-500">
            总销售额
          </n-text>
        </template>
        <template #header-extra>
          <n-tooltip trigger="click">
            <template #trigger>
              <div class=" text-md cursor-pointer expand">
                <n-text depth="3" class="i-mdi-information-outline inline-block" />
              </div>
            </template>
            指标提示
          </n-tooltip>
        </template>
        <n-p class="text-3xl">
          ¥ 126,560
        </n-p>
        <n-p>
          周同比12% <n-text class="i-mdi-menu-up inline-block text-green-500" />
          日同比11% <n-text class="i-mdi-menu-down inline-block text-red-500" />
        </n-p>
        <template #footer>
          日销售额&emsp;￥12,423
        </template>
      </n-card>
    </div>
  </div>
</template>
