import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import router from '../../router/index';
import type { UserEntity } from '@/store/models';
import FormUser from '@/views/users/FormUser.vue';

describe('Form users', () => {
  const user: UserEntity = {
    id: '123',
    name: 'Nguyễn Phúc Ân',
    dateOfBirth: '2022-10-15',
    email: 'phucan332000@gmail.com',
    phone: '0345222577',
  };
  const wrapper = mount(FormUser, {
    global: {
      plugins: [router],
    },
  });

  const triggerSubmit = wrapper.find('form').trigger('submit.prevent');
  const getErrors = () => wrapper.findAll('.input-group-error');

  test('Submit form without value', async () => {
    expect(FormUser).toBeTruthy();
    await triggerSubmit;
    const errors = getErrors();

    expect(errors).toHaveLength(4);
    expect(errors[0].text()).equal('Name is required');
    expect(errors[1].text()).equal('Date of Birth is required');
    expect(errors[2].text()).equal('Email is required');
    expect(errors[3].text()).equal('Phone is required');
  });

  test('Invalid phone', async () => {
    await wrapper.find('input[name="phone"]').setValue('abc');
    await triggerSubmit;
    const errors = getErrors();
    expect(errors[3].text()).equal('Phone must be number');
  });

  test('Invalid email', async () => {
    await wrapper.find('input[name="email"]').setValue('abc');
    await triggerSubmit;
    const errors = getErrors();
    expect(errors[2].text()).equal('Email must be valid');
  });

  test('Set form value', () => {
    expect(FormUser).toBeTruthy();
    console.log(wrapper.html());

    expect(wrapper.find('input[name="name"]').setValue(user.name));
    expect(wrapper.find('input[name="dateOfBirth"]').setValue(user.dateOfBirth));
    expect(wrapper.find('input[name="email"]').setValue(user.email));
    expect(wrapper.find('input[name="phone"]').setValue(user.phone));
  });
});
