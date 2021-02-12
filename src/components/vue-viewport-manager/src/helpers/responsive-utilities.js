export const steps = ['xs', 'sm', 'md', 'lg', 'xl']
export const fallback = (property, step) => {
  const stepId = steps.indexOf(step)
  if (stepId < 0) {
    return undefined
  } else {
    if (!property) {
      return undefined
    } else {
      const availableSteps = steps.slice(0, stepId + 1).reverse()
      for (let i = 0; i < availableSteps.length; i++) {
        if (
          property[availableSteps[i]] !== undefined &&
          property[availableSteps[i]] !== null
        ) {
          return property[availableSteps[i]]
        }
      }
      return undefined
    }
  }
}
