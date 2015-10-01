import DS from 'ember-data';

export default DS.Model.extend({
  name:DS.attr(),
  comment: DS.attr(),
  post:DS.belongsTo('post', {async:true}),
  //comments

});
