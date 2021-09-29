/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import { mount } from '@vue/test-utils';
import App from '../src/App.vue';

describe('Mounted App', () => {
  const wrapper = mount(App);

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy();
  });

  wrapper.get('input[name=name]').setValue('limolimo');
  wrapper.vm.$nextTick();

  wrapper.get('input[name=email]').setValue('limolimo@domain.com');
  wrapper.vm.$nextTick();

  wrapper.get('input[name=subject]').setValue('Subject');
  wrapper.vm.$nextTick();

  wrapper.get('textarea[name=message]').setValue('This is the message of the communication');
  wrapper.vm.$nextTick();

  it('has data', () => {
    expect(typeof App.data).toBe('function');
  });

  it('has submit function', () => {
    expect(typeof App.methods.submit).toBe('function');
  });

});
