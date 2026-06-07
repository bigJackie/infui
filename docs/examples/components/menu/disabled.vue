<template>
  <IMenu
    :items="[
      { label: '可用项', value: 'enabled' },
      { label: '禁用项', value: 'disabled', disabled: true },
    ]"
    label="禁用项示例"
  />
</template>

