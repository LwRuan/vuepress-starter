<template>
  <span
    class="badge"
    :class="type"
    :style="{
      verticalAlign: vertical,
    }"
  >
    <slot>{{ text }}</slot>
  </span>
</template>

<script setup lang="ts">
defineProps({
  type: {
    type: String,
    required: false,
    default: 'tip',
  },
  text: {
    type: String,
    required: false,
    default: '',
  },
  vertical: {
    type: String,
    required: false,
    default: undefined,
  },
})
</script>

<style lang="scss" scoped>
.badge {
  display: inline-block;
  font-size: 14px;
  height: 18px;
  line-height: 18px;
  border-radius: 3px;
  padding: 0 6px;
  color: #ffffff;
  vertical-align: top;
  transition: color 0.3s ease, background-color 0.3s ease;

  &.tip {
    background-color: #42b983;
  }

  &.warning {
    background-color: #e7c000;
  }

  &.danger {
    background-color: #cc0000;
  }

  .table-of-contents & {
    vertical-align: middle;
  }

  & + & {
    margin-left: 5px;
  }
}
</style>