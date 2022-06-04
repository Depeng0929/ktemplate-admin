<script setup lang='ts'>

const value = ref(1)

</script>

<template>
  <div>
    <n-popover trigger="click" width="340" :style="{paddingLeft: 0, paddingRight: 0, paddingBottom: 0}">
      <template #trigger>
        <n-badge :value="value" :max="15" class="cursor-pointer">
          <n-text class="i-mdi-bell text-xl" />
        </n-badge>
      </template>
      <n-tabs
        class="card-tabs"
        default-value="signin"
        size="large"
        animated
        justify-content="space-evenly"
      >
        <n-tab-pane name="signin" tab="通知(4)">
          <div>
            <div v-for="i in 4" :key="i" class="flex-center px-8 py-4 cursor-pointer hover:bg-gray-50">
              <n-avatar
                size="small"
                src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
              />
              <div class="px-4 ml-2">
                <n-p class="text-sm mb-2">
                  你收到了 14 份新周报
                </n-p>
                <n-text depth="3" class="text-xs">
                  5年前
                </n-text>
              </div>
            </div>
          </div>
          <n-button-group size="large" class="flex">
            <n-button class="flex-1">
              清空通知
            </n-button>
            <n-button class="flex-1">
              查看更多
            </n-button>
          </n-button-group>
        </n-tab-pane>
        <n-tab-pane name="signup" tab="消息(3)">
          <div>
            <div v-for="i in 4" :key="i" class="flex px-8 py-4 cursor-pointer hover:bg-gray-50">
              <n-avatar
                size="small"
                src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
              />
              <div class="px-4 ml-2">
                <n-p class="text-sm mb-2">
                  曲丽丽 评论了你
                </n-p>
                <n-text depth="3" class="text-sm mb-2 block text-xs">
                  描述信息描述信息描述信息
                </n-text>
                <n-text depth="3" class="text-xs">
                  5年前
                </n-text>
              </div>
            </div>
          </div>
          <n-button-group size="large" class="flex">
            <n-button class="flex-1">
              清空消息
            </n-button>
            <n-button class="flex-1">
              查看更多
            </n-button>
          </n-button-group>
        </n-tab-pane>
        <n-tab-pane name="signup2" tab="待办(3)">
          <div>
            <div v-for="i in 4" :key="i" class="px-8 py-4 cursor-pointer hover:bg-gray-50">
              <n-p class="text-sm mb-2 flex-center justify-between">
                <n-text>任务名称</n-text>
                <n-tag type="error" size="small">
                  马上到期
                </n-tag>
              </n-p>
              <n-text depth="3" class="text-xs">
                任务需要在 2017-01-12 20:00 前启动
              </n-text>
            </div>
          </div>
          <n-button-group size="large" class="flex">
            <n-button class="flex-1">
              清空待办
            </n-button>
            <n-button class="flex-1">
              查看更多
            </n-button>
          </n-button-group>
        </n-tab-pane>
      </n-tabs>
    </n-popover>
  </div>
</template>
