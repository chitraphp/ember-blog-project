import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('author', params.author_id);
  },
  actions: {
  savePost(params) {
    var newPost = this.store.createRecord('post', params);
    var author = params.author;
    author.get('posts').addObject(newPost);
    newPost.save().then(function() {
      return author.save();
    });
    this.transitionTo('author', params.author);
  }
}
});
