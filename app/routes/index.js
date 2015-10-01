import Ember from 'ember';

// var authors = [{
//   id:1,
//   author:"chitra"
// }, {
//   id:2,
//   author:"suchi"
// }
// ];
//alert(authors[0].id);
// var blogs = [
//   {
//     id:1,
//     name:"chitra",
//
//     posts:["ekkkkkkkkk","ssssssssssssss","mmmmmmm"]
//
//   }, {
//     id:2,
//     name:"suchi",
//     posts:["vvvvvv","ddsazxcvfd"]
//   }
// ];


export default Ember.Route.extend({
  model() {
    //return blogs;
    return Ember.RSVP.hash({
      authors: this.store.findAll('author'),
      posts: this.store.findAll('post')
    });
  },
  actions: {
    save3(params) {
      var newAuthor = this.store.createRecord('author', params);
      newAuthor.save();
      this.transitionTo('index');
    },
    // savePost(params) {
    //   var newPost = this.store.createRecord('post', params);
    //   var author = params.author;
    //   author.get('posts').addObject(newPost);
    //   newPost.save().then(function() {
    //     return author.save();
    //   });
    //   this.transitionTo('author', params.author)
    // }
  }

});
