<template>
  <ICard>
    <template #header>
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <strong>插槽头部</strong>
        <small>可放标签</small>
      </div>
    </template>

    <p>这里是插槽正文，可放任意 Vue 内容。</p>

    <template #footer>
      <div style="display: flex; gap: 8px; justify-content: flex-end;">
        <IButton variant="text" label="取消" />
        <IButton label="保存" />
      </div>
    </template>
  </ICard>
</template>

