<template>
  <div>
    <h1>Notes</h1>
    <br>
    <span>Find a note:</span>
    <br>
    <input v-model="filter" placeholder="Type text to search" class="note-filter">

    <br>    
    <br>
    <span>Create a new note:</span>
    <br>
    <input v-model="title" placeholder="Title" class="note-title">
    <br>
    <textarea v-model="text" placeholder="Text" class="note-text"></textarea>
    <br>
    <button v-on:click="onAddNote">Add</button>
    
    <br>    
    <br>
    <span>Your notes:</span>
    <br>
    <span v-if="notes.length === 0">Nothing found</span>
    <ul>
      <li v-for="(note, index) in notes" :key="index">
        <div>
          <Note v-bind:note="note"/>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Note from './Note.vue'

export default {
  name: 'MainPage',
  computed: {
    notes () {
      if (this.filter) {
        return this.$store.state.notes.filter(n => n.title.includes(this.filter) || n.text.includes(this.filter));
      }

      return this.$store.state.notes;
    }
  },
  data: function() { 
    return {
      title: '',
      text: '',
      filter: ''
    }
  },
  methods: {
    onAddNote: function () {
      this.$store.commit('addNote', { title: this.title, text: this.text });
    }
  },
  components: {
    Note
  }
}

</script>

<style>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.note-container {
    border: 1px solid gray;
}
.note-title {
    width: 150px;
    border: 1px solid gray;
    padding: 1px;
}
.note-text 
{
    width: 150px;
    min-height: 50px;
    border: 1px solid gray;
    padding: 1px;
}
.note-filter {
    width: 150px;
    border: 1px solid gray;
    padding: 1px;
}
</style>
