import * as Yup from 'yup';

import { Recruiter } from '@/store';

export const validationSchema = Yup.object({
  name: Yup.string().trim().required('Name is required'),
  jobTitle: Yup.string().trim().required('Job title is required'),
  bio: Yup.string()
    .trim()
    .required('Bio is required')
    .max(200, 'Bio cannot exceed 200 characters')
    .min(10, 'Bio must be at least 10 characters'),
});

export const getInitialValues = (recruiter?: Recruiter) => {
  return {
    name: recruiter?.name,
    jobTitle: recruiter?.jobTitle,
    bio: recruiter?.bio,
  };
};
