<script setup lang='ts'>
import { h } from 'vue'
import { NIcon, useMessage } from 'naive-ui'
import { CashOutline as CashIcon } from '@vicons/ionicons5'

const message = useMessage()

const options = [
  {
    label: '个人中心',
    key: 'marina bay sands',
    disabled: true,
  },
  {
    label: '个人设置',
    key: 'brown\'s hotel, london',
    icon() {
      return h(NIcon, null, {
        default: () => h(CashIcon),
      })
    },
  },
  {
    type: 'divider',
    key: 'd1',
  },
  {
    label: '退出登录',
    key: 'the beverly hills hotel, los angeles',
  },
]

function handleSelect(key: string | number) {
  message.info(String(key))
}
</script>

<template>
  <n-dropdown
    size="small"
    trigger="hover"
    :options="options"
    :show-arrow="true"
    @select="handleSelect"
  >
    <div class="flex-center cursor-pointer hover:bg-gray-50 h-full px-2">
      <n-avatar
        round
        :size="24"
        src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
      />
      <span class="ml-2 text-sm">
        Depeng.Kong
      </span>
    </div>
  </n-dropdown>
</template>
