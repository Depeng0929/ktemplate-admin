<script setup lang='ts'>
const [show, toggle] = useToggle(false)
const el = ref(null)

onClickOutside(el, () => {
  show.value = false
})

</script>

<template>
  <div
    ref="el"
    class="flex-center h-full cursor-pointer app-search px-2 hover:bg-gray-50"
    :class="{show}"
    @click="toggle"
  >
    <n-text depth="3" class="i-mdi-magnify inline-block text-xl" />

    <div class="input-x">
      <n-input v-show="show" type="text" size="small" class="ml-1" />
    </div>
  </div>
</template>

<style lang="scss">
.app-search {
  .input-x {
    width: 0!important;
    transition: width 0.4s;
  }
  &.show {
    .input-x {
      width: 200px!important;
    }
  }

}
</style>
