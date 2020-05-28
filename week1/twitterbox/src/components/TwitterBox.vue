<template>
  <div id="twitter">
    <h1>Project Twitter Box Client</h1>

    <div class="box">
      <form class="my-form" action>
        <textarea class="text-input" type="text" v-model.trim="newTweet"/>
        <button v-bind:disabled="!canSubmit()" v-on:click.prevent="addTweet">Submit</button>
      </form>
      <p v-if="checkForEmptyString()">Add tweet.</p>
      <p v-else-if="checkForLargeString()">Text too large</p>
      <p v-else>{{ charactersLeft() }}</p>

    </div>
    <div class="box box-list" v-if="hasItems()">
      <h2>Previous Tweets</h2>
      <div class="list-item" v-for="(item, index) in tweetList" v-bind:key="index">
        <div>{{ item }}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TwitterBox",
    data() {
      return {
        textLimit: 80,
        newTweet: '',
        tweetList: []
      };
    },
    methods: {
      hasItems(){
        return this.tweetList.length > 0
      },
      checkForEmptyString() {
        return this.newTweet.length == 0;
      },
      checkForLargeString() {
        return this.newTweet.length > this.textLimit;
      },
      canSubmit() {
        return !(this.checkForEmptyString() || this.checkForLargeString());
      },
      charactersLeft() {
        let charLeft = this.textLimit - this.newTweet.length
        if(charLeft > 0){
          return `You have ${charLeft} characters left.`
        } else if (charLeft == 0){
          return 'No characters left.'
        }
      },
      addTweet: function(){
        this.tweetList.push(this.newTweet)
        this.newTweet = ''
      }
    },
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
  width: 33%;
  background-color: #b8dcdc;
  margin: 20px auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
.my-form {
  display: flex;
}
.text-input {
  outline: none;
}
button {
  margin-left: 10px;
  padding: 10px;
  border-radius: 5px;
  outline: none;
  background-color: #dcb8b8;
  color: white;
}
.list-item {
  background-color: #dcb8b8;
  color: white;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  width: 80%;
}
</style>
