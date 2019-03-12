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
      const note = this.$store.state.notes.find(n => n.id === this.id);
      if (note) {
          this.title = note.title;
          this.text = note.text;
      }
  },
  methods: {
      onSave: function() {
          if (this.title && this.text) {
              this.$store.commit('updateNote', { id: this.id, title: this.title, text: this.text });
              router.push('/');
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
