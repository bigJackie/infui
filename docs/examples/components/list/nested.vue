<script setup lang="ts">
import { ref } from 'vue'

const selected = ref('')
</script>

<template>
  <IList v-model="selected" style="width: 280px">
    <IListItem value="dashboard" title="仪表盘">
      <template #prepend>📊</template>
    </IListItem>

    <IListGroup title="用户管理" default-open>
      <template #prepend>👥</template>
      <IListItem value="user-list" title="用户列表" />
      <IListItem value="user-roles" title="角色权限" />
      <IListItem value="user-log" title="操作日志" />
    </IListGroup>

    <IListGroup title="内容管理">
      <template #prepend>📝</template>
      <IListItem value="articles" title="文章列表" />
      <IListItem value="comments" title="评论审核" />

      <!-- 二级嵌套 -->
      <IListGroup title="媒体资源">
        <IListItem value="images" title="图片库" />
        <IListItem value="videos" title="视频库" />
      </IListGroup>
    </IListGroup>

    <IListGroup title="系统设置">
      <template #prepend>⚙️</template>
      <IListItem value="settings-basic" title="基础配置" />
      <IListItem value="settings-email" title="邮件服务" />
    </IListGroup>
  </IList>
</template>
