<template>
  <div class="note-container">
    <input v-model="title" readonly class="note-title">
    <br>
    <textarea v-model="text" readonly class="note-text"></textarea>
    <br>
    <button v-if="!isDone" v-on:click="onMarkAsDone">Done</button>
    <span v-if="isDone" class="done-marker">Done</span>
    <button v-on:click="onEdit">Edit</button>
    <button v-on:click="onRemove">Remove</button>
  </div>

</template>

<script>
import router from '../router'

export default {
  name: 'Note',
  props: {
      note: Object
  },
  computed: {
    title () {
      return this.note.title;
    },
    text () {
      return this.note.text;
    },
    isDone () {
      return this.note.isDone;
    }
  },
  methods: {
      onMarkAsDone: function() {
          this.$store.commit('markAsDone', { id: this.note.id });
      },
      onRemove: function() {
          this.$store.commit('removeNote', { id: this.note.id });
      },
      onEdit: function() {
          router.push({ name: 'edit', params: { id: this.note.id }});
      }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.done-marker {
    color: green;
}
</style>
