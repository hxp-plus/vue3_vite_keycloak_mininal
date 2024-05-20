<template>
  <div>Hello</div>
  <h1>{{ $filters.sexName(1) }}</h1>
  <el-button @click="handleClick">submit</el-button>
  <el-icon><Edit /></el-icon>
</template>

<script setup>
import { getCurrentInstance } from 'vue';
const { proxy } = getCurrentInstance();

async function handleClick() {
  proxy.submitOk('ABC');
  proxy.submitFail('提交失败');
}
</script>
