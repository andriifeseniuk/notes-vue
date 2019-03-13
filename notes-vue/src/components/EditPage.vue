<template>
  <div>
    <input v-model="title" placeholder="Title" class="note-title">
    <br>
    <textarea v-model="text" placeholder="Text" class="note-text"></textarea>
    <br>
    <button v-on:click="onSave">Save</button>
    <button v-on:click="onCancel">Cancel</button>
  </div>

</template>

<script>
import router from '../router'

export default {
  name: 'Edit',
  data: function() {
      return {
          id: null,
          title: '',
          text: ''
      }
  },
  created: function() {
      this.id = this.$route.params.id;
      const note = this.$store.dispatch('getNote', { id: this.id })
      .then(res => {
          this.title = res.data.title;
          this.text = res.data.text;
      });
  },
  methods: {
      onSave: function() {
          if (this.title && this.text) {
            this.$store.dispatch('updateNote', { id: this.id, title: this.title, text: this.text, isDone: false })
            .then(res => {
                router.push('/');
            });
          }
      },
      onCancel: function() {
          router.push('/');
      }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
