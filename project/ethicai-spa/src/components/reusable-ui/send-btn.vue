<template>
      <button class="btn btn-primary send-button" type="button">
      <font-awesome-icon :icon="faPaperPlane" style="color: #ffffff;"></font-awesome-icon>
      </button>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';


export default defineComponent({
    name: 'SendButton',
    data() {
        return {
            faPaperPlane: faPaperPlane,

        }
    }
});
</script>

<style scroped>
.btn {
    background-color: #6D0CFF;
}
.btn:hover {
    background-color: #8638fc;
}

</style>>