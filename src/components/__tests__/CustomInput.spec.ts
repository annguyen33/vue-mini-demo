import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import CustomInput from '../CustomInput.vue';

describe('Custom Input', () => {
  test('modelValue should be updated', async () => {
    const wrapper = mount(CustomInput, {
      props: {
        label: 'Initial Text',
        type: 'text',
        modelValue: 'initialText',
        'onUpdate:modelValue': (e: any) => wrapper.setProps({ modelValue: e }),
      },
    });

    await wrapper.find('input').setValue('test');
    expect(wrapper.props('modelValue')).toBe('test');
  });
});
