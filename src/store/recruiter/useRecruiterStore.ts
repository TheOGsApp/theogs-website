import { create } from 'zustand';

import { RecruiterActions, RecruiterState } from './recruiter.types';

export const useRecruiterStore = create<RecruiterState & RecruiterActions>(
  (set) => ({
    loading: false,
    recruiter: undefined,

    setRecruiter: (recruiter) => set({ recruiter }),
    setLoading: (loading) => set({ loading }),
  }),
);
