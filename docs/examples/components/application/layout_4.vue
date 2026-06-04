<script setup lang="ts">
import { ref } from 'vue'
import { IAside, IButton } from 'inf-ui'
import { PhList } from '@phosphor-icons/vue'
const asideRef = ref<InstanceType<typeof IAside>>()
</script>

<template>
  <LayoutPreview>
    <IApp>
      <IContainer app>
        <IAside :width="160" :miniWidth="0" ref="asideRef">
          <template #header>ASide Header</template>
          <div style="padding: 12px; color: var(--inf-color-on-surface-muted)">ASide Content</div>
          <template #footer>ASide Footer</template>
        </IAside>
        <IContainer vertical app>
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
          <IMain style="text-align: center">
            <h3>Main</h3>
            <p>Footer 在最底部全宽</p>
          </IMain>
        </IContainer>
      </IContainer>
      <IFooter :height="28">© 2025 INF-UI</IFooter>
    </IApp>
  </LayoutPreview>
</template>
