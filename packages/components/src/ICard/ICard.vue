<script setup lang="ts">
import { computed, useSlots } from 'vue'
import { useCardStyle } from './useCardStyle'
import type { CardProps } from './useCard'

const props = withDefaults(defineProps<CardProps>(), {
  title: '',
  subtitle: '',
  text: '',
  outlined: false,
  elevated: false,
  block: false,
  width: undefined,
  height: undefined,
})

const slots = useSlots()
const { classes, styles } = useCardStyle(props)

const hasHeader = computed(() => !!slots.header || !!props.title || !!props.subtitle)
const hasContent = computed(() => !!slots.default || !!props.text)
const hasFooter = computed(() => !!slots.footer)
</script>

<template>
  <article :class="classes" :style="styles">
    <header v-if="hasHeader" class="i-card__header">
      <slot name="header">
        <h3 v-if="title" class="i-card__title">{{ title }}</h3>
        <p v-if="subtitle" class="i-card__subtitle">{{ subtitle }}</p>
      </slot>
    </header>

    <section v-if="hasContent" class="i-card__content">
      <slot>
        {{ text }}
      </slot>
    </section>

    <footer v-if="hasFooter" class="i-card__footer">
      <slot name="footer" />
    </footer>
  </article>
</template>
