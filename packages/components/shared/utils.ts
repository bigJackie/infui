export const toUnit = (val?: string | number) => {
  return val == null ? undefined : typeof val === 'number' ? `${val}px` : val
}
