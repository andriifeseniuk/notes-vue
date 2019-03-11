<template>
  <div>
    <h1>Notes</h1>

    <input v-model="title" placeholder="Title" class="note-title">
    <br>
    <textarea v-model="text" placeholder="Text" class="note-text"></textarea>
    <br>
    <button v-on:click="onAddNote">Add</button>
    <br>
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
      return this.$store.state.notes;
    }
  },
  data: function() { 
    return {
      title: "",
      text: ""
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
    border:1px solid gray;
    padding: 1px;
}
.note-text 
{
    width: 150px;
    min-height: 50px;
    border:1px solid gray;
    padding: 1px;
}
</style>
