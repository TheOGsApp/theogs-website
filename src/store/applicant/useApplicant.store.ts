import { create } from 'zustand';

import { ApplicantState, ApplicantActions } from './applicant.types';

export const useApplicantStore = create<ApplicantState & ApplicantActions>(
  (set) => ({
    applicant: undefined,

    setApplicant: (applicant) => set({ applicant }),
  }),
);
