<script setup lang="ts">
import { ref } from 'vue'
import { IAside, IButton } from '@jackiew/inf-ui'
import { PhList } from '@phosphor-icons/vue'
const asideRef = ref<InstanceType<typeof IAside>>()
</script>

<template>
  <LayoutPreview>
    <IApp>
      <IHeader>
        <template #left>
          <IButton variant="plain" @click="asideRef?.toggle()">
            <template #prepend>
              <IIcon :is="PhList" />
            </template>
            Header
          </IButton>
        </template>
      </IHeader>
      <IContainer app>
        <IAside :width="160" :miniWidth="0" ref="asideRef">
          <template #header>ASide Header</template>
          <div style="padding: 12px; color: var(--inf-color-on-surface-muted)">ASide Content</div>
          <template #footer>ASide Footer</template>
        </IAside>
        <IMain style="text-align: center">
          <h3>Main</h3>
          <p>Header 和 Footer 全宽</p>
        </IMain>
      </IContainer>
      <IFooter>© 2025 INF-UI</IFooter>
    </IApp>
  </LayoutPreview>
</template>
