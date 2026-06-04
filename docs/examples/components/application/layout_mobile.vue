<script setup lang="ts">
import { ref } from 'vue'
import { IAside, IButton } from '@jackiew/inf-ui'
import { PhList } from '@phosphor-icons/vue'

const asideRef = ref<InstanceType<typeof IAside>>()
</script>
<template>
  <LayoutPreview :height="500">
    <IApp>
      <IHeader>
        <template #left>
          <IButton variant="plain" @click="asideRef?.toggle()">
            <template #prepend>
              <IIcon :is="PhList" />
            </template>
            Header
          </IButton>
          <IAside ref="asideRef" float :mini="true">
            <template #header>ASide Header</template>
            <div style="padding: 12px; color: var(--inf-color-on-surface-muted)">ASide Content</div>
            <template #footer>ASide Footer</template>
          </IAside>
        </template>
      </IHeader>
      <IContainer app>
        <IMain style="text-align: center">
          <h3>Mobile Main</h3>
          <p>Aside 为浮动层，不挤压内容区</p>
        </IMain>
      </IContainer>
      <IFooter>© 2025 INF-UI</IFooter>
    </IApp>
  </LayoutPreview>
</template>
