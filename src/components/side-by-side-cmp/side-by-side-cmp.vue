<template>
  <div class="SideBySideCmp Project1">
    <div class="SideBySideCmp__container">
      <!-- Immagine step mobile e desktop left -->
      <div
        v-if="hasImageSlot && ($currentStep === 'xs' || ($currentStep !== 'xs' && dataType === 'left-image'))"
        class="SideBySideCmp__image-container--left"
      >
        <div
          ref="$left"
          :class="$currentStep === 'xs' ? ['SideBySideCmp__aspect-ratio-image aspect-w-16 aspect-h-9'] : ['SideBySideCmp__side-box SideBySideCmp__side-box--image', getFadeAnimation(dataType, 'SideBySideCmp__side-box--image')]"
        >
          <slot name="image" />
        </div>
      </div>

      <!-- Contenuto left o right -->
      <div
        :class="['SideBySideCmp__text-container', {'SideBySideCmp__text-container--right': dataType === 'left-image', 'SideBySideCmp__text-container--left': dataType === 'right-image'}]"
      >
        <div
          :ref="dataType === 'right-image' ? '$left' : '$right'"
          :class="$currentStep === 'xs' ? null : ['SideBySideCmp__side-box SideBySideCmp__side-box--text', getFadeAnimation(dataType, 'SideBySideCmp__side-box--text')]"
        >
          <div
            v-if="hasSmallTitleSlot"
            class="SideBySideCmp__small-title"
          >
            <slot name="small_title" />
          </div>
          <div
            v-if="hasTitleSlot"
            :class="['SideBySideCmp__title', {'SideBySideCmp__title--simple': dataVariantClass === 'simple'}]"
          >
            <slot name="title" />
          </div>
          <div
            v-if="hasWysiwygSlot"
            class="SideBySideCmp__wysiwyg"
          >
            <slot name="wysiwyg" />
          </div>
          <template v-if="hasCtaSlot">
            <slot name="cta" />
          </template>
        </div>
      </div>

      <!-- Immagine step desktop right -->
      <div
        v-if="hasImageSlot && $currentStep !== 'xs' && dataType === 'right-image'"
        class="SideBySideCmp__image-container--right"
      >
        <div
          ref="$right"
          :class="['SideBySideCmp__side-box SideBySideCmp__side-box--image', getFadeAnimation(dataType, 'SideBySideCmp__side-box--image')]"
        >
          <slot name="image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import imagesLoaded from 'imagesloaded';
import anime from 'animejs/lib/anime.es.js';

export default {
  name: 'SideBySideCmp',
  props: {
    dataType: {
      type: String,
      default: 'left-image'
    },
    dataVariantClass: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      onGoingAnimations: []
    };
  },
  computed: {
    // SLOTS CHECKERS
    hasSmallTitleSlot() {
      return this.dataVariantClass !== 'simple' && this.$slots.small_title && this.$slots.small_title().findIndex(o => o.type !== Comment) !== -1;
    },
    hasTitleSlot() {
      // return !!(this.$slots['title'] || [])[0]; vue2 way not working anymore
      return this.$slots.title && this.$slots.title().findIndex(o => o.type !== Comment) !== -1;
      /* prima parte check se lo slot esiste, seconda parte se lo slot esiste ed è pieno */
    },
    hasWysiwygSlot() {
      return this.$slots.wysiwyg && this.$slots.wysiwyg().findIndex(o => o.type !== Comment) !== -1;
    },
    hasImageSlot() {
      return this.$slots.image && this.$slots.image().findIndex(o => o.type !== Comment) !== -1;
    },
    hasCtaSlot() {
      return this.$slots.cta && this.$slots.cta().findIndex(o => o.type !== Comment) !== -1;
    }
  },
  watch: {
    $currentStep: {
      handler(val) {
        console.log(val)
        this.handleScroll();
      },
      immediate: true
    }
  },
  created() {
    // SETTING LISTENER
    window.addEventListener('scroll', this.handleScroll);
  },
  beforedestroy() {
    // DESTROY LISTENER
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    //  WRAPPER METHOD FOR ANIMATIONS
    handleScroll() {
      // animations during scroll
      this.$nextTick(() => {
        imagesLoaded(this.$el, () => {
          this.handleAnimations();
        });
      });
    },
    //  ANIMATES ELEMENT
    handleAnimations() {
      if (this.dataType === 'right-image') {
        this.animateElement(this.$refs.$left, 'SideBySideCmp__side-box--text');
        this.animateElement(this.$refs.$right, 'SideBySideCmp__side-box--image');
      } else {
        this.animateElement(this.$refs.$left, 'SideBySideCmp__side-box--image');
        this.animateElement(this.$refs.$right, 'SideBySideCmp__side-box--text');
      }
    },
    animateElement(element, container) {
      if (element && !this.onGoingAnimations.includes(element)) {
        const isElementInViewport = this.isElementXPercentInViewport(element, 33);
        const isElementAnimable = element.classList.contains(container);

        if (isElementInViewport && isElementAnimable) {
          const animClass = this.getFadeAnimation(this.dataType, container);
          this.onGoingAnimations.push(element);
          animClass === 'fade-right'
            ? anime({
              targets: element,
              right: 0,
              opacity: 1,
              duration: 1000,
              easing: 'cubicBezier(.455, .030, .515, .955)',
              complete: () => {
                element.classList.remove('fade-right');
              }
            })
            : anime({
              targets: element,
              left: 0,
              opacity: 1,
              duration: 1000,
              easing: 'cubicBezier(.455, .030, .515, .955)',
              complete: () => {
                element.classList.remove('fade-left');
              }
            });
        }
      }
    },
    // SAYS IF ELEMENT IS IN VIEWPORT
    isElementXPercentInViewport(el, percentVisible) {
      const rect = el.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;

      return !(
        Math.floor(100 - ((rect.top >= 0 ? 0 : rect.top) / +-(rect.height / 1)) * 100) < percentVisible ||
        Math.floor(100 - ((rect.bottom - windowHeight) / rect.height) * 100) < percentVisible
      );
    },
    // CHOOSE ANIMATION DIRECTION
    getFadeAnimation(type, container) {
      let classToAdd = null;

      if (type === 'right-image') {
        if (container === 'SideBySideCmp__side-box--text') {
          if (!this.onGoingAnimations.includes(this.$refs.$left)) {
            classToAdd = 'fade-left';
          }
        } else if (container === 'SideBySideCmp__side-box--image') {
          if (!this.onGoingAnimations.includes(this.$refs.$right)) {
            classToAdd = 'fade-right';
          }
        }
      } else if (type === 'left-image') {
        if (container === 'SideBySideCmp__side-box--text') {
          if (!this.onGoingAnimations.includes(this.$refs.$right)) {
            classToAdd = 'fade-right';
          }
        } else if (container === 'SideBySideCmp__side-box--image') {
          if (!this.onGoingAnimations.includes(this.$refs.$left)) {
            classToAdd = 'fade-left';
          }
        }
      }

      return classToAdd;
    }
  }
};
</script>

<style lang="scss" scoped>
.SideBySideCmp {
  &.Project1 {
    @import "Project1-side-by-side-cmp";
  }

  &.Project2 {
    @import "Project2-side-by-side-cmp";
  }
}
</style>
