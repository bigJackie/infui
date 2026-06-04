<script setup lang="ts">
const items = [
  { value: 'photos', label: '我的照片', icon: '🖼️', badge: '' },
  { value: 'music', label: '音乐收藏', icon: '🎵', badge: '12' },
  { value: 'videos', label: '视频', icon: '🎬', badge: '' },
  { value: 'docs', label: '文档', icon: '📄', badge: '3' },
  { value: 'download', label: '下载', icon: '📥', badge: '' },
]
</script>

<template>
  <IList>
    <IListItem
      v-for="item in items"
      :key="item.value"
      :value="item.value"
      :title="item.label"
      clickable
    >
      <template #prepend>
        <span style="font-size: 18px">{{ item.icon }}</span>
      </template>
      <template v-if="item.badge" #append>
        <span
          style="
            background: var(--inf-color-primary);
            color: #fff;
            font-size: 11px;
            padding: 1px 6px;
            border-radius: 999px;
          "
        >
          {{ item.badge }}
        </span>
      </template>
    </IListItem>
  </IList>
</template>
