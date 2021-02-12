<template>
  <button class="CtaCmp Project1 btn">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'CtaCmp'
};
</script>

<style lang="scss" scoped>
.CtaCmp {
  &.Project1 {
    @import "Project1-cta-cmp";
  }

  &.Project2 {
    @import "Project2-cta-cmp";
  }
}
</style>
