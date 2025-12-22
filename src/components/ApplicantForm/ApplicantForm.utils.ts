import * as Yup from 'yup';

import { Applicant, JobType } from '@/store';

const jobValidationSchema = Yup.object({
  title: Yup.string().trim().required('Job title is required'),
  company: Yup.string().trim().required('Company is required'),
  location: Yup.string().trim().required('Location is required'),
  startDate: Yup.date()
    .typeError('Start date is required')
    .required('Start date is required'),
  endDate: Yup.date()
    .nullable()
    .when('isCurrent', {
      is: false,
      then: (schema) =>
        schema
          .required('End date is required')
          .min(Yup.ref('startDate'), 'End date cannot be before start date'),
      otherwise: (schema) => schema.notRequired().nullable(),
    }),
  type: Yup.mixed<JobType>()
    .oneOf(Object.values(JobType), 'Invalid job type')
    .required('Job type is required'),
  isCurrent: Yup.boolean(),
  description: Yup.string()
    .trim()
    .required('Description is required')
    .max(200, 'Description cannot exceed 200 characters')
    .min(20, 'Description must be at least 20 characters'),
});

export const validationSchema = Yup.object({
  name: Yup.string().trim().required('Name is required'),
  jobTitle: Yup.string().trim().required('Job title is required'),
  totalYearsOfExperience: Yup.number()
    .typeError('Total experience must be a number')
    .min(2, 'Minimum 2 years required')
    .required('Total experience is required'),
  jobs: Yup.array()
    .min(1, 'At least one job is required')
    .of(jobValidationSchema),
  education: Yup.object({
    school: Yup.string().trim().required('School is required'),
    degree: Yup.string().trim().required('Degree is required'),
    fieldOfStudy: Yup.string().trim().required('Field of study is required'),
    numOfYears: Yup.number()
      .typeError('Number of years must be a number')
      .min(1, 'Must be at least 1 year')
      .max(10, 'Cannot exceed 10 years')
      .required('Number of years is required'),
    graduationYear: Yup.number()
      .typeError('Graduation year must be a number')
      .min(1900, 'Invalid graduation year')
      .max(new Date().getFullYear(), 'Graduation year cannot be in the future')
      .required('Graduation year is required'),
  }),
});

export const getInitialValues = (applicant?: Applicant) => {
  return {
    name: applicant?.name,
    jobTitle: applicant?.jobTitle,
    totalYearsOfExperience: applicant?.totalYearsOfExperience || 2,
    jobs: applicant?.jobs ?? [],

    education: {
      school: applicant?.education?.school ?? '',
      degree: applicant?.education?.degree ?? '',
      fieldOfStudy: applicant?.education?.fieldOfStudy ?? '',
      numOfYears: applicant?.education?.numOfYears ?? 0,
      graduationYear:
        applicant?.education?.graduationYear ?? new Date().getFullYear(),
    },

    portfolioLinks: applicant?.portfolioLinks ?? [],
    languages: applicant?.languages ?? [],
  };
};
