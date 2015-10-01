import Ember from 'ember';

export default Ember.Component.extend({
  addNewComment: false,
  actions: {
    commentFormShow() {
      this.set('addNewComment', true);
    },
  saveComment() {
    //debugger;
    var params = {
      name: this.get('name'),
      comment: this.get('comment'),
      post:this.get('post')
      //post: this.get('post') ? this.get('post'),
    };
    this.set('addNewComment', false);
    this.sendAction('saveComment', params);
    }
  }
});
