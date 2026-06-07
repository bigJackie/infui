<script setup lang="ts">
import { ISnackBarHost, useSnackBarService } from '@jackiew/inf-ui'

const leftSnack = useSnackBarService('left')
const rightSnack = useSnackBarService('right')

const pushMessages = () => {
  leftSnack.success('左侧：保存成功')
  leftSnack.info('左侧：正在同步数据...')
  rightSnack.warning('右侧：网络较慢，请稍候')
}
</script>

<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap">
    <IButton size="sm" @click="pushMessages">加入队列</IButton>
    <IButton size="sm" variant="outlined" @click="leftSnack.error('左侧：操作失败')">左侧错误</IButton>
    <IButton size="sm" variant="outlined" @click="rightSnack.info('右侧：已接收任务')">右侧提示</IButton>
    <IButton size="sm" variant="text" @click="leftSnack.clear()">清空左侧</IButton>
    <IButton size="sm" variant="text" @click="rightSnack.clear()">清空右侧</IButton>
  </div>

  <ISnackBarHost scope="left" :max="2" />
  <ISnackBarHost scope="right" :max="1" />
</template>



