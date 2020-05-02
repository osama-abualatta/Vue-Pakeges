<template>
  <div>
    <multiselect
    v-model="value" 
    :options="options" 
    :close-on-select="true" 
    :clear-on-select="false" 
    :hide-selected="false" 
    :preserve-search="true" 
    placeholder="Pick some" 
    label="name" 
    track-by="name" 
    :preselect-first="true"
    id="example"
    @select="onSelect"
    :multiple="true"
    >
    </multiselect>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";
import "vue-multiselect/dist/vue-multiselect.min.css";
export default {
  components: { Multiselect },
	data() {
        return{
  	value: '',
  	options: [
        { name: 'Vue.js', language: 'JavaScript' },
        { name: 'Rails', language: 'Ruby' },
        { name: 'Sinatra', language: 'Ruby' },
        { name: 'Laravel', language: 'PHP', $isDisabled: true }
      ]
    }
    },
  methods: {
  	customLabel (option) {
      return `${option.library} - ${option.language}`
    },
    onSelect (option, id) {
    	console.log(option, id)
    }
  }
};
</script>

<style></style>
