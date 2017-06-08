import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    let posts = [{
        title: 'First post',
        body: "body",
        likes: 10
      }, {
        title: 'second post',
        body: "body2",
        likes: 30
      }, {
        title: 'third post',
        body: 'bosy3',
        likes: 0
    }];

    posts.forEach(post => this.store.createRecord('post', post));
  },
  model() {
    return this.get('store').peekAll('post');
  }

});
