'use client';

import { useFormik } from 'formik';
import { Form, Input, Button, Divider, Card, Typography } from 'antd';
import { getInitialValues, validationSchema } from './RecruiterForm.utils';
import { useRecruiterStore } from '@/store';

const { Title } = Typography;

export function RecruiterForm() {
  const { recruiter, updateProfile } = useRecruiterStore();

  const formik = useFormik({
    initialValues: getInitialValues(recruiter),
    validationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit(values) {
      updateProfile(recruiter!._id, {
        ...values,
      }).then((success) => {
        if (success) {
          formik.resetForm();
        }
      });
    },
  });

  const getFieldError = (fieldName: string) => {
    const error = formik.getFieldMeta(fieldName).error;
    const touched = formik.getFieldMeta(fieldName).touched;
    return touched && error ? error : '';
  };

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '24px' }}>
      <Card style={{ borderRadius: 12 }}>
        <Title level={4}>Your profile</Title>

        <Form layout="vertical" className="flex flex-col gap-2">
          <Form.Item
            required
            label="Full Name"
            validateStatus={getFieldError('name') ? 'error' : ''}
            help={getFieldError('name')}
          >
            <Input
              placeholder="Full Name"
              variant="filled"
              disabled={!!recruiter?.name} // Disable if name is already set
              {...formik.getFieldProps('name')}
            />
          </Form.Item>

          <Form.Item
            required
            label="Your Job Title"
            validateStatus={getFieldError('jobTitle') ? 'error' : ''}
            help={getFieldError('jobTitle')}
          >
            <Input
              placeholder="Enter your job title"
              variant="filled"
              {...formik.getFieldProps('jobTitle')}
            />
          </Form.Item>

          <Form.Item
            required
            label="Bio / About You"
            validateStatus={getFieldError('bio') ? 'error' : ''}
            help={getFieldError('bio')}
          >
            <Input.TextArea
              placeholder="A short bio about you"
              variant="filled"
              minLength={10}
              maxLength={200}
              {...formik.getFieldProps('bio')}
            />
          </Form.Item>
        </Form>
      </Card>

      <Divider />

      <Button type="primary" onClick={formik.submitForm} size="large" block>
        Update Profile
      </Button>
    </div>
  );
}
