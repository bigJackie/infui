<script setup lang="ts">
import { computed } from 'vue'
import { ICard } from '../ICard'
import { useTabPanels, type TabPanelsProps } from './useTabPanels'

const props = withDefaults(defineProps<TabPanelsProps>(), {
  modelValue: undefined,
  items: () => [],
  block: false,
  lazy: true,
  keepAlive: false,
  transition: false,
})

const { activeItem, isActive, isVisited, transitionName } = useTabPanels(props)

const classes = computed(() => ({
  'i-tab-panels': true,
  'i-tab-panels--block': props.block,
  'i-tab-panels--with-transition': !!transitionName.value,
}))
</script>

<template>
  <div :class="classes">
    <template v-if="lazy">
      <template v-if="keepAlive">
        <template v-for="item in items" :key="String(item.value)">
          <ICard
            v-if="isVisited(item.value)"
            v-show="isActive(item.value)"
            class="i-tab-panels__panel"
            role="tabpanel"
            elevated
          >
            <slot name="panel" :item="item">
              {{ item.content }}
            </slot>
          </ICard>
        </template>
      </template>

      <Transition v-else-if="transitionName" :name="transitionName" mode="out-in">
        <ICard
          v-if="activeItem"
          :key="String(activeItem.value)"
          class="i-tab-panels__panel"
          role="tabpanel"
          elevated
        >
          <slot name="panel" :item="activeItem">
            {{ activeItem.content }}
          </slot>
        </ICard>
      </Transition>
      <ICard v-else-if="activeItem" class="i-tab-panels__panel" role="tabpanel" elevated>
        <slot name="panel" :item="activeItem">
          {{ activeItem.content }}
        </slot>
      </ICard>
    </template>

    <template v-else>
      <ICard
        v-for="item in items"
        :key="String(item.value)"
        v-show="isActive(item.value)"
        class="i-tab-panels__panel"
        role="tabpanel"
        elevated
      >
        <slot name="panel" :item="item">
          {{ item.content }}
        </slot>
      </ICard>
    </template>
  </div>
</template>
