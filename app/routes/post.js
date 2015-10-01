import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('post', params.post_id);
  },
  actions: {
  saveComment(params) {

    var newComment = this.store.createRecord('comment', params);
    var post = params.post;
    post.get('comments').addObject(newComment);
    newComment.save().then(function() {
      return post.save();
    });
    this.transitionTo('post', params.post);
  },
  // deletePost(post) {
  //   var post_deletions = author.get('posts').map(function(post) {
  //     return post.destroyRecord();
  //   });
  //   Ember.RSVP.all(post_deletions)
  //     .then(function() {
  //       return author.destroyRecord();
  //     })
  //
  //   this.transitionTo('index');
  // }
}
});
