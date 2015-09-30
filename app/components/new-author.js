import Ember from 'ember';

export default Ember.Component.extend({
  addNewAuthor: false,
  actions: {
    authorFormShow() {
      this.set('addNewAuthor', true);
    },
  saveAuthor() {
    var params = {
      name: this.get('name'),
      //post: this.get('post') ? this.get('post'),
    };
    this.set('addNewAuthor', false);
    this.sendAction('save2', params);
    }
  }
});
