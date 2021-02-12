<template>
  <img class="block mx-auto" alt="Vue logo" src="./assets/logo.png" />
  <cta-cmp class="block mx-auto btn-green">Button green</cta-cmp>
  <cta-cmp class="block mx-auto mt-2 btn-red">Button red</cta-cmp>

  <hr class="my-2">

  <side-by-side-cmp
    class="py-4"
    data-type="right-image"
    data-variant-class="simple"
  >
    <template #small_title>But also</template>
    <template #title>pure at heart</template>
    <template #image><img src="https://picsum.photos/500/500" alt="lorem"></template>
    <template #wysiwyg>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
      officia deserunt mollit anim id est laborum.
    </template>
  </side-by-side-cmp>

  <side-by-side-cmp
    class="py-4"
    data-type="left-image"
  >
    <template #small_title>...</template>
    <template #title>Rough around the edges</template>
    <template #image><img src="https://picsum.photos/500/500" alt="lorem"></template>
    <template #wysiwyg>With a grainy texture that brings us closer to the very essence of real food.</template>
  </side-by-side-cmp>

  <side-by-side-cmp
    class="py-4"
    data-type="right-image"
  >
    <template #small_title>But also</template>
    <template #title>pure at heart</template>
    <template #image><img src="https://picsum.photos/500/500" alt="lorem"></template>
    <template #wysiwyg>As raw and genuine as Swedish nature. A handful of carefully selected raw ingredients that are
      mixed.
    </template>
  </side-by-side-cmp>
</template>

<script setup>
import CtaCmp from './components/cta-cmp/cta-cmp.vue';
import SideBySideCmp from './components/side-by-side-cmp/side-by-side-cmp.vue';
</script>
