'use client';

import { useFormik, FormikErrors } from 'formik';
import { useState } from 'react';
import {
  Form,
  Input,
  Button,
  Select,
  DatePicker,
  Checkbox,
  Divider,
  Card,
  Tabs,
  Typography,
  Empty,
  message,
  Collapse,
} from 'antd';
import { Trash2, Plus } from 'lucide-react';
import dayjs from 'dayjs';

import { getInitialValues, validationSchema } from './ApplicantForm.utils';
import { Applicant, JobType, useApplicantStore } from '@/store';

const { Title, Text } = Typography;

/* ---------- Type Guards ---------- */

function isJobErrorObject(
  error: unknown,
): error is FormikErrors<Applicant['jobs'][number]> {
  return typeof error === 'object' && error !== null;
}

/* ---------- Component ---------- */

export default function ApplicantForm() {
  const { applicant, updateProfile } = useApplicantStore();
  const [activeTab, setActiveTab] = useState('1');

  const formik = useFormik({
    initialValues: getInitialValues(applicant),
    validationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit(values) {
      const sortedJobs = [...values.jobs].sort(
        (a, b) =>
          new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
      );

      updateProfile(applicant!._id, {
        ...values,
        jobs: sortedJobs,
      }).then((success) => {
        if (success) {
          formik.resetForm();
        }
      });
    },
  });

  const hasIncompleteJob = formik.values.jobs.some(
    (job) =>
      !job.title || !job.company || !job.startDate || !job.endDate || !job.type,
  );

  const addJob = () => {
    if (hasIncompleteJob) {
      message.warning('Please complete the current job before adding another');
      return;
    }

    formik.setFieldValue('jobs', [
      ...formik.values.jobs,
      {
        title: '',
        company: '',
        description: '',
        startDate: '',
        endDate: '',
        isCurrent: false,
        type: JobType.FULL_TIME,
        address: {},
      },
    ]);
  };

  const removeJob = (index: number) => {
    if (formik.values.jobs.length === 1) {
      message.error('You must have at least one job entry');
      return;
    }
    const jobs = formik.values.jobs.filter((_, i) => i !== index);
    formik.setFieldValue('jobs', jobs);
  };

  const getFieldError = (fieldName: string) => {
    const error = formik.getFieldMeta(fieldName).error;
    const touched = formik.getFieldMeta(fieldName).touched;
    return touched && error ? error : '';
  };

  const onSubmit = () => {
    formik.submitForm();

    if (formik.submitCount > 0) {
      const personalErrors = [
        'name',
        'jobTitle',
        'totalYearsOfExperience',
        'email',
      ];
      const educationErrors = [
        'education.school',
        'education.degree',
        'education.fieldOfStudy',
        'education.numOfYears',
        'education.graduationYear',
      ];

      const hasPersonalError = personalErrors.some((field) =>
        getFieldError(field),
      );
      const hasEducationError = educationErrors.some((field) =>
        getFieldError(field),
      );
      const hasJobError = formik.errors.jobs && formik.errors.jobs.length > 0;

      if (hasPersonalError) {
        setActiveTab('1');
      } else if (hasJobError) {
        setActiveTab('2');
      } else if (hasEducationError) {
        setActiveTab('3');
      }
    }
  };

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '24px' }}>
      <Tabs
        activeKey={activeTab}
        onTabClick={setActiveTab}
        defaultActiveKey="1"
        items={[
          {
            key: '1',
            label: 'Personal Info',
            children: (
              <Card style={{ borderRadius: 12 }}>
                <Title level={4}>Personal Information</Title>

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
                    label="Your Total Years of Experience"
                    validateStatus={
                      getFieldError('totalYearsOfExperience') ? 'error' : ''
                    }
                    help={getFieldError('totalYearsOfExperience')}
                  >
                    <Input
                      type="number"
                      placeholder="Total Years of Experience"
                      variant="filled"
                      min={2}
                      {...formik.getFieldProps('totalYearsOfExperience')}
                    />
                  </Form.Item>
                </Form>
              </Card>
            ),
          },
          {
            key: '2',
            label: 'Work Experience',
            children: (
              <Card style={{ borderRadius: 12 }}>
                <Title level={4}>Work Experience</Title>
                <Text type="secondary">Add your work history</Text>
                <Divider />

                {formik.values.jobs.length === 0 ? (
                  <>
                    <Empty
                      description="No jobs added"
                      style={{ margin: '20px 0' }}
                    />
                    <Form.Item
                      validateStatus={
                        formik.touched.jobs && formik.errors.jobs ? 'error' : ''
                      }
                      help={
                        formik.touched.jobs &&
                        typeof formik.errors.jobs === 'string'
                          ? formik.errors.jobs
                          : ''
                      }
                    />
                  </>
                ) : (
                  <Collapse accordion>
                    {formik.values.jobs.map((job, index) => {
                      const base = `jobs.${index}`;
                      const touched = formik.touched.jobs?.[index];
                      const errorRaw = formik.errors.jobs?.[index];
                      const errors = isJobErrorObject(errorRaw)
                        ? errorRaw
                        : undefined;

                      return (
                        <Collapse.Panel
                          key={index}
                          header={
                            <div
                              style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                width: '100%',
                              }}
                            >
                              <Title level={5} style={{ margin: 0 }}>
                                {job.title || `Position ${index + 1}`}
                                {job.company ? ` @ ${job.company}` : ''}
                              </Title>

                              <Button
                                danger
                                type="text"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  removeJob(index);
                                }}
                                style={{ padding: '4px 8px' }}
                              >
                                <Trash2 size={16} />
                              </Button>
                            </div>
                          }
                        >
                          <Form.Item
                            label="Job Title"
                            required
                            layout="vertical"
                            validateStatus={
                              touched?.title && errors?.title ? 'error' : ''
                            }
                            help={touched?.title && errors?.title}
                          >
                            <Input
                              placeholder="Software Engineer"
                              variant="filled"
                              value={job.title}
                              onChange={(e) =>
                                formik.setFieldValue(
                                  `${base}.title`,
                                  e.target.value,
                                )
                              }
                            />
                          </Form.Item>

                          <Form.Item
                            label="Company"
                            required
                            layout="vertical"
                            validateStatus={
                              touched?.company && errors?.company ? 'error' : ''
                            }
                            help={touched?.company && errors?.company}
                          >
                            <Input
                              placeholder="Tech Company Inc."
                              variant="filled"
                              value={job.company}
                              onChange={(e) =>
                                formik.setFieldValue(
                                  `${base}.company`,
                                  e.target.value,
                                )
                              }
                            />
                          </Form.Item>

                          <Form.Item
                            label="Location"
                            required
                            layout="vertical"
                            validateStatus={
                              touched?.location && errors?.location
                                ? 'error'
                                : ''
                            }
                            help={touched?.location && errors?.location}
                          >
                            <Input
                              placeholder="Silicon Valley, CA, USA"
                              variant="filled"
                              value={job.location}
                              onChange={(e) =>
                                formik.setFieldValue(
                                  `${base}.location`,
                                  e.target.value,
                                )
                              }
                            />
                          </Form.Item>

                          <Form.Item
                            required
                            layout="vertical"
                            label="Job Type"
                            validateStatus={
                              touched?.type && errors?.type ? 'error' : ''
                            }
                            help={touched?.type && errors?.type}
                          >
                            <Select
                              value={job.type}
                              onChange={(value) =>
                                formik.setFieldValue(`${base}.type`, value)
                              }
                              options={[
                                {
                                  label: 'Full Time',
                                  value: JobType.FULL_TIME,
                                },
                                { label: 'Contract', value: JobType.CONTRACT },
                              ]}
                            />
                          </Form.Item>

                          <div
                            style={{
                              display: 'grid',
                              gridTemplateColumns: '1fr 1fr',
                              gap: '16px',
                            }}
                          >
                            <Form.Item
                              label="Start Date"
                              required
                              layout="vertical"
                              validateStatus={
                                touched?.startDate && errors?.startDate
                                  ? 'error'
                                  : ''
                              }
                              help={touched?.startDate && errors?.startDate}
                            >
                              <DatePicker
                                style={{ width: '100%' }}
                                value={
                                  job.startDate ? dayjs(job.startDate) : null
                                }
                                maxDate={dayjs()}
                                onChange={(date) =>
                                  formik.setFieldValue(
                                    `${base}.startDate`,
                                    date?.toISOString() || '',
                                  )
                                }
                              />
                            </Form.Item>

                            <Form.Item
                              label="End Date"
                              layout="vertical"
                              required={!job.isCurrent}
                              validateStatus={
                                touched?.endDate && errors?.endDate
                                  ? 'error'
                                  : ''
                              }
                              help={touched?.endDate && errors?.endDate}
                            >
                              <DatePicker
                                style={{ width: '100%' }}
                                value={job.endDate ? dayjs(job.endDate) : null}
                                maxDate={dayjs()}
                                disabled={job.isCurrent}
                                onChange={(date) =>
                                  formik.setFieldValue(
                                    `${base}.endDate`,
                                    date?.toISOString() || '',
                                  )
                                }
                              />
                            </Form.Item>
                          </div>

                          <Form.Item>
                            <Checkbox
                              checked={job.isCurrent}
                              onChange={(e) => {
                                formik.setFieldValue(
                                  `${base}.isCurrent`,
                                  e.target.checked,
                                );
                                if (e.target.checked) {
                                  formik.setFieldValue(`${base}.endDate`, '');
                                }
                              }}
                            >
                              Currently working here
                            </Checkbox>
                          </Form.Item>

                          <Form.Item
                            label="Description"
                            layout="vertical"
                            validateStatus={
                              touched?.description && errors?.description
                                ? 'error'
                                : ''
                            }
                            help={touched?.description && errors?.description}
                          >
                            <Input.TextArea
                              rows={3}
                              maxLength={200}
                              showCount
                              value={job.description || ''}
                              onChange={(e) =>
                                formik.setFieldValue(
                                  `${base}.description`,
                                  e.target.value,
                                )
                              }
                            />
                          </Form.Item>
                        </Collapse.Panel>
                      );
                    })}
                  </Collapse>
                )}

                <Divider />

                <Button
                  type="dashed"
                  block
                  disabled={hasIncompleteJob}
                  onClick={addJob}
                  size="large"
                >
                  <Plus size={16} style={{ marginRight: 8 }} />
                  Add Another Job
                </Button>
              </Card>
            ),
          },
          {
            key: '3',
            label: 'Education',
            children: (
              <Card style={{ borderRadius: 12 }}>
                <Title level={4}>Education</Title>

                <div className="flex flex-col gap-2">
                  <Form.Item
                    required
                    layout="vertical"
                    label="School/University"
                    validateStatus={
                      getFieldError('education.school') ? 'error' : ''
                    }
                    help={getFieldError('education.school')}
                  >
                    <Input
                      placeholder="School/University"
                      variant="filled"
                      {...formik.getFieldProps('education.school')}
                    />
                  </Form.Item>

                  <Form.Item
                    required
                    layout="vertical"
                    label="Degree"
                    validateStatus={
                      getFieldError('education.degree') ? 'error' : ''
                    }
                    help={getFieldError('education.degree')}
                  >
                    <Input
                      placeholder="Degree"
                      variant="filled"
                      {...formik.getFieldProps('education.degree')}
                    />
                  </Form.Item>

                  <Form.Item
                    required
                    layout="vertical"
                    label="Field of Study"
                    validateStatus={
                      getFieldError('education.fieldOfStudy') ? 'error' : ''
                    }
                    help={getFieldError('education.fieldOfStudy')}
                  >
                    <Input
                      placeholder="Field of Study"
                      variant="filled"
                      {...formik.getFieldProps('education.fieldOfStudy')}
                    />
                  </Form.Item>

                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '16px',
                    }}
                  >
                    <Form.Item
                      required
                      layout="vertical"
                      label="Number of Years Studied"
                      validateStatus={
                        getFieldError('education.numOfYears') ? 'error' : ''
                      }
                      help={getFieldError('education.numOfYears')}
                    >
                      <Input
                        type="number"
                        placeholder="Years Studied"
                        variant="filled"
                        maxLength={2}
                        {...formik.getFieldProps('education.numOfYears')}
                      />
                    </Form.Item>

                    <Form.Item
                      required
                      layout="vertical"
                      label="Graduation Year"
                      validateStatus={
                        getFieldError('education.graduationYear') ? 'error' : ''
                      }
                      help={getFieldError('education.graduationYear')}
                    >
                      <Input
                        type="number"
                        maxLength={4}
                        placeholder="Graduation Year"
                        variant="filled"
                        {...formik.getFieldProps('education.graduationYear')}
                      />
                    </Form.Item>
                  </div>
                </div>
              </Card>
            ),
          },
        ]}
      />

      <Divider />

      <Button type="primary" onClick={onSubmit} size="large" block>
        Update Profile
      </Button>
    </div>
  );
}
