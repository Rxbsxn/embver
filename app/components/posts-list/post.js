import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',

  actions: {
    removePost(post) {
      post.deleteRecord();
    },

    addPoints(post) {
      post.incrementProperty('likes', 5);
    },

    removePoints(post) {
      post.decrementProperty('likes', 10)
    }
  }
});
