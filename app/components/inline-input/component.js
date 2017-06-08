import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  inputValue: Ember.computed.reads('value'),
  content: Ember.computed.or('value', 'placeholder'),

  click() {
    this.set('isClicked', true);
    Ember.run.scheduleOnce('afterRender', () => {
      this.$('input').focus();
    });

  },

  actions: {
    focusOut() {
        this.set('isClicked', false);
        this.set('value', this.get('inputValue'));
    }
  }
});
