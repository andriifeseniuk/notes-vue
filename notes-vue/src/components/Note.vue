<template>
  <div class="note-container">
    <input v-model="title" readonly class="note-title">
    <br>
    <textarea v-model="text" readonly class="note-text"></textarea>
    <br>
    <button v-if="!isDone" v-on:click="onMarkAsDone">Done</button>
    <span v-if="isDone" class="done-marker">Done</span>
    <button v-if="isArchived" v-on:click="onRearchive">Rearchive</button>
    <button v-if="!isArchived" v-on:click="onArchive">Archive</button>
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
    },
    isArchived () {
      return this.note.isArchived;
    }
  },
  methods: {
      onMarkAsDone: function() {
          this.$store.dispatch('updateNote', { id: this.note.id, title: this.note.title, text: this.note.text, isDone: true, isArcived: this.note.isArcived })
          .then(res => this.$emit('note-updated'));
      },
      onArchive: function() {
          this.$store.dispatch('updateNote', { id: this.note.id, title: this.note.title, text: this.note.text, isDone: this.note.isDone, isArchived: true })
          .then(res => this.$emit('note-updated'));
      },
      onRearchive: function() {
          this.$store.dispatch('updateNote', { id: this.note.id, title: this.note.title, text: this.note.text, isDone: this.note.isDone, isArchived: false })
          .then(res => this.$emit('note-updated'));
      },
      onRemove: function() {
          this.$store.dispatch('removeNote', { id: this.note.id })
          .then(res => this.$emit('note-updated'));
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
