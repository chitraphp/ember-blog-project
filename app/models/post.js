import DS from 'ember-data';

export default DS.Model.extend({
  author:DS.belongsTo('author', {async:true}),
  title:DS.attr(),
  blog:DS.attr(),
  comments: DS.hasMany('comment', {async:true})

});
