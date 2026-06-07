import { computed, ref } from 'vue'
import type { SnackBarLocation, SnackBarTone } from './useSnackBar'

export type SnackBarScope = string

export interface SnackBarMessage {
  id: number
  text: string
  tone: SnackBarTone
  location: SnackBarLocation
  timeout: number
  actionLabel: string
  closable: boolean
  persistent: boolean
  onAction?: () => void
}

export interface SnackBarMessageOptions {
  text: string
  tone?: SnackBarTone
  location?: SnackBarLocation
  timeout?: number
  actionLabel?: string
  closable?: boolean
  persistent?: boolean
  onAction?: () => void
}

const DEFAULT_SCOPE = 'default'
const queues = ref<Record<SnackBarScope, SnackBarMessage[]>>({
  [DEFAULT_SCOPE]: [],
})
let seed = 0

function ensureScope(scope: SnackBarScope) {
  if (!queues.value[scope]) {
    queues.value[scope] = []
  }

  return queues.value[scope]
}

function normalizeMessage(options: string | SnackBarMessageOptions): SnackBarMessage {
  const base = typeof options === 'string' ? { text: options } : options

  return {
    id: ++seed,
    text: base.text,
    tone: base.tone ?? 'default',
    location: base.location ?? 'bottom-center',
    timeout: base.timeout ?? 3000,
    actionLabel: base.actionLabel ?? '',
    closable: base.closable ?? true,
    persistent: base.persistent ?? false,
    onAction: base.onAction,
  }
}

export function showSnackBar(options: string | SnackBarMessageOptions, scope: SnackBarScope = DEFAULT_SCOPE) {
  const message = normalizeMessage(options)
  ensureScope(scope).push(message)
  return message.id
}

export function dismissSnackBar(id?: number, scope: SnackBarScope = DEFAULT_SCOPE) {
  const queue = ensureScope(scope)
  if (queue.length === 0) {
    return
  }

  if (id == null) {
    queue.shift()
    return
  }

  queues.value[scope] = queue.filter(item => item.id !== id)
}

export function clearSnackBarQueue(scope: SnackBarScope = DEFAULT_SCOPE) {
  queues.value[scope] = []
}

export function getCurrentSnackBarMessage(scope: SnackBarScope = DEFAULT_SCOPE) {
  return computed(() => ensureScope(scope)[0] ?? null)
}

export function getSnackBarMessages(scope: SnackBarScope = DEFAULT_SCOPE, max = 1) {
  return computed(() => {
    const list = ensureScope(scope)
    const limit = Math.max(1, max)
    return list.slice(0, limit)
  })
}

export function useSnackBarService(scope: SnackBarScope = DEFAULT_SCOPE) {
  return {
    show: (options: string | SnackBarMessageOptions) => showSnackBar(options, scope),
    dismiss: (id?: number) => dismissSnackBar(id, scope),
    clear: () => clearSnackBarQueue(scope),
    success: (text: string, options: Omit<SnackBarMessageOptions, 'text' | 'tone'> = {}) =>
      showSnackBar({ ...options, text, tone: 'success' }, scope),
    warning: (text: string, options: Omit<SnackBarMessageOptions, 'text' | 'tone'> = {}) =>
      showSnackBar({ ...options, text, tone: 'warning' }, scope),
    error: (text: string, options: Omit<SnackBarMessageOptions, 'text' | 'tone'> = {}) =>
      showSnackBar({ ...options, text, tone: 'error' }, scope),
    info: (text: string, options: Omit<SnackBarMessageOptions, 'text' | 'tone'> = {}) =>
      showSnackBar({ ...options, text, tone: 'info' }, scope),
  }
}

export const currentSnackBarMessage = getCurrentSnackBarMessage(DEFAULT_SCOPE)

// test helper
export function resetSnackBarServiceState() {
  queues.value = {
    [DEFAULT_SCOPE]: [],
  }
  seed = 0
}

export {}




