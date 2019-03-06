<template>
  <div>
    <h1>Notes</h1>
    <input v-model="title" placeholder="Title">
    <br>
    <textarea v-model="text" placeholder="Text"></textarea>
    <br>
    <button v-on:click="onAddNote">Add</button>
    <br>
    <ul>
      <li v-for="note in notes" :key="note">
        <div id="Note">
          <Note v-bind:title="note.title" v-bind:text="note.text"/>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Note from './Note.vue'

export default {
  name: 'MainPage',
  data: function() { 
    return {
      title: "",
      text: "",
      notes: [],
    }
  }  ,
  methods: {
    onAddNote: function () {
      const note = { text: this.text, title: this.title };
      this.notes.push(note);
      console.log(this.notes);
    }
  },
  components: {
    Note
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
