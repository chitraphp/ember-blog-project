import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    postFormShow() {
      this.set('addNewPost', true);
    },
  savePost() {
    var params = {
      title: this.get('title'),
      blog: this.get('blog'),
      author:this.get('author')
      //post: this.get('post') ? this.get('post'),
    };
    this.set('addNewPost', false);
    this.sendAction('savePost', params);
    }
  }
});
