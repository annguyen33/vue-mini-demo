import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import VueModal from '../VueModal.vue';
import router from '../../router/index';

describe('Custom modal', () => {
  test('Render modal to add new via routing', async () => {
    router.push('/users/add');
    await router.isReady();

    const wrapper = mount(VueModal, {
      props: {
        modalActive: true,
      },
      global: {
        plugins: [router],
      },
    });

    expect(wrapper.findComponent(VueModal).exists()).toBe(true);
  });
});
