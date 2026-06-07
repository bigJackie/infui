<template>
  <div style="display: grid; gap: 8px">
    <ICheckbox label="选中" :model-value="true" />
    <ICheckbox label="未选中" :model-value="false" />
    <ICheckbox label="半选" :model-value="false" indeterminate />
    <ICheckbox label="选中禁用" :model-value="true" disabled />
    <ICheckbox label="未选中禁用" :model-value="false" disabled />
    <ICheckbox label="半选禁用" :model-value="false" indeterminate disabled />
  </div>
</template>

