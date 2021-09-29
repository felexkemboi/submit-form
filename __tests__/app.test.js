/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import { mount, shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import Main from '../src/views/Main.vue';
import App from '../src/App.vue';

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter();

shallowMount(App, {
  localVue,
  router,
});

describe('Main', () => {
  // Inspect the raw component options
  it('has data', () => {
    expect(typeof Main.data).toBe('function');
  });

  it('has submit function', () => {
    expect(typeof Main.methods.submit).toBe('function');
  });
});

describe('Mounted App', () => {
  const wrapper = mount(App);

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy();
  });
});
