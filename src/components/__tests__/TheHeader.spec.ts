import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import TheHeader from '../TheHeader.vue';
import router from '../../router/index';

describe('Render header', () => {
  it('renders properly', () => {
    const wrapper = mount(TheHeader, {
      global: {
        plugins: [router],
      },
    });
    expect(wrapper.text()).toContain('User Management');
    expect(wrapper.text()).toContain('Product Management');
    expect(wrapper.text()).toContain('Async Validate');
  });
});
