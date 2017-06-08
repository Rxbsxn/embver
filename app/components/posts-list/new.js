import Ember from 'ember';

export default Ember.Component.extend({

  store: Ember.inject.service(),
  actions: {
    createPost() {
      let inputTitle = this.get('title')
      let inputBody = this.get('body')
      this.get('store').createRecord('post', {title: inputTitle, body: inputBody} );
      this.set('title', '');
      this.set('body', '');
      console.log('post created');
    }
  }
});
