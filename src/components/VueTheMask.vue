<template>
  <div>
      <div>mask=['###', '###-#', '###-##']</div>
    <the-mask :mask="['###', '###-#', '###-##']" />
    <div> mask=['###-#', '####-#', '#####-#', '######-#']</div>
    <the-mask :mask="['###-#', '####-#', '#####-#', '######-#']" />
    <div>  mask="FFFFFF" :tokens="hexTokens"</div>
    <the-mask mask="FFFFFF" :tokens="hexTokens" />
    <div>mask=['###.###.###-##', '##.###.###/####-##']</div>
    <the-mask :mask="['###.###.###-##', '##.###.###/####-##']" />

  </div>
</template>

<script>
import {TheMask} from 'vue-the-mask'
export default {
components: {TheMask},
  data() {
    return {
      hexTokens: {
        F: {
          pattern: /[0-9a-fA-F]/,
          transform: (v) => v.toLocaleUpperCase(),
        },
      },
    };
  },
};
</script>

<style></style>
