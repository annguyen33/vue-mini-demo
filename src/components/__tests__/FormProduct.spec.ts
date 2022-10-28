import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import router from '../../router/index';
import type { ProductEntity } from '@/store/models';
import FormProduct from '@/views/products/FormProduct.vue';

describe('Form product', () => {
  const product: ProductEntity = {
    id: '123',
    name: 'Headphone123',
    price: '100',
    description: 'EXTRA BASS™ for powerful, deep and noise-canceling sound',
  };
  const wrapper = mount(FormProduct, {
    global: {
      plugins: [router],
    },
  });

  const triggerSubmit = wrapper.find('form').trigger('submit.prevent');
  const getErrors = () => wrapper.findAll('.input-group-error');

  test.skip('Set form value', () => {
    expect(FormProduct).toBeTruthy();

    expect(wrapper.find('input[name="name"]').setValue(product.name));
    expect(wrapper.find('input[name="description"]').setValue(product.description));
    expect(wrapper.find('input[name="price"]').setValue(product.price));
  });

  test('Submit form without value', async () => {
    expect(FormProduct).toBeTruthy();
    await triggerSubmit;
    const errors = getErrors();

    expect(errors).toHaveLength(3);
    expect(errors[0].text()).equal('Name is required');
    expect(errors[1].text()).equal('Description is required');
    expect(errors[2].text()).equal('Price is required');
  });
});
