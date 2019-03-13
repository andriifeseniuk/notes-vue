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
    <span v-if="!notes || notes.letght === 0">Nothing found</span>
    <div v-if="notes">
      <ul>
        <li v-for="(note, index) in notes" :key="index">
          <div>
            <Note v-bind:note="note" v-on:note-updated="loadNotes"/>
          </div>
        </li>
      </ul>
    </div>
    <br>
    <router-link to="/archive">Archived notes</router-link>
  </div>
</template>

<script>
import Note from './Note.vue'

export default {
  name: 'MainPage',
  data: function() { 
    return {
      allNotes: [],
      title: '',
      text: '',
      filter: ''
    }
  },
  computed: {
    notes: function () {
      if (this.filter) {
        return this.allNotes.filter(n => !n.isArchived).filter(n => n.title.includes(this.filter) || n.text.includes(this.filter));
      } else {
        return this.allNotes.filter(n => !n.isArchived);
      }
    }
  },
  created: function() {
    this.loadNotes();
  },
  methods: {
    onAddNote: function () {
      this.$store.dispatch('addNote', { title: this.title, text: this.text })
      .then(res => this.loadNotes());
    },
    loadNotes: function () {
      this.$store.dispatch('getNotes')
      .then(res => {
        this.refreshNotes(res.data);
      });
    },
    refreshNotes: function(newData) {
        //console.log('newData', newData);
        this.allNotes.splice(0, this.allNotes.length);
        //console.log('allNotes cleared', this.allNotes);
        newData.forEach(i => this.allNotes.push(i));
        //console.log('allNotes updated', this.allNotes);
        //console.log('notes', this.notes);
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
    width: 250px;
    border: 1px solid gray;
    padding: 1px;
}
.note-text 
{
    width: 250px;
    min-height: 50px;
    border: 1px solid gray;
    padding: 1px;
}
.note-filter {
    width: 250px;
    border: 1px solid gray;
    padding: 1px;
}
</style>
