<template>
      <button 
        class="btn btn-primary send-button" 
        type="button" 
        @click="buttonClicked"
        :disabled=disableButton
        >
      <font-awesome-icon :icon="faPaperPlane" style="color: #ffffff;"></font-awesome-icon>
      </button>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';


export default defineComponent({
    name: 'SendButton',
    data() {
        return {
            faPaperPlane: faPaperPlane,

        }
    },
    props: {
        'disableButton': Boolean
    },
    methods: {
          buttonClicked() {
            // Emit a custom event when the button is clicked
            this.$emit('button-clicked');
        }
    }
});
</script>

<style scoped>
.btn {
    background-color: #6D0CFF;
}
.btn:hover {
    background-color: #8638fc;
}

</style>>