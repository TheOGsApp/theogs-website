import { create } from 'zustand';

import { ApplicantState, ApplicantActions } from './applicant.types';

export const useApplicantStore = create<ApplicantState & ApplicantActions>(
  (set) => ({
    loading: false,
    applicant: undefined,

    setLoading: (loading) => set({ loading }),
    setApplicant: (applicant) => set({ applicant }),
  }),
);
