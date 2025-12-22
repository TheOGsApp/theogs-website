import { create } from 'zustand';
import { message } from 'antd';

import { RecruiterActions, RecruiterState } from './recruiter.types';
import { api } from '@/api';
import { useAuthStore } from '../auth-store';

export const useRecruiterStore = create<RecruiterState & RecruiterActions>(
  (set) => ({
    loading: false,
    recruiter: undefined,

    setRecruiter: (recruiter) => set({ recruiter }),
    setLoading: (loading) => set({ loading }),

    updateProfile: async (_id, data) => {
      set({ loading: true });

      return new Promise<boolean>((resolve) => {
        api
          .patch(
            `/recruiters/${_id}`,
            { ...data, updateFrom: 'website' },
            {
              headers: getTokenHeaders(useAuthStore.getState().accessToken),
            },
          )
          .then((response) => {
            set({ recruiter: response.data.recruiter, loading: false });

            const authState = useAuthStore.getState();
            authState.setShowOnboardingModal(false);
            authState.setOpen(false);
            message.success('Your profile updated successfully');
            authState.setShowSuccessModal(true);
            resolve(true);
          })
          .catch(() => {
            set({ loading: false });
            resolve(false);
          });
      });
    },
  }),
);

const getTokenHeaders = (token: string) => ({
  Authorization: `Bearer ${token}`,
});
