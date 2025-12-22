import { create } from 'zustand';

import { ApplicantState, ApplicantActions } from './applicant.types';
import { api } from '@/api';
import { message } from 'antd';
import { useAuthStore } from '../auth-store';

export const useApplicantStore = create<ApplicantState & ApplicantActions>(
  (set) => ({
    loading: false,
    applicant: undefined,

    setLoading: (loading) => set({ loading }),
    setApplicant: (applicant) => set({ applicant }),

    updateProfile: (_id, updatedData) => {
      set({ loading: true });

      return new Promise<boolean>((resolve) => {
        api
          .patch(
            `/applicants/${_id}`,
            { ...updatedData, updateFrom: 'website' },
            {
              headers: getTokenHeaders(useAuthStore.getState().accessToken),
            },
          )
          .then((response) => {
            set({ applicant: response.data, loading: false });
            const authState = useAuthStore.getState();
            authState.setShowOnboardingModal(false);
            authState.setOpen(false);
            message.success('Your profile updated successfully');
            authState.setShowSuccessModal(true);
            resolve(true);
          })
          .catch(() => {
            resolve(false);
            message.error('Failed to update applicant profile');
          })
          .finally(() => {
            set({ loading: false });
          });
      });
    },
  }),
);

const getTokenHeaders = (token: string) => ({
  Authorization: `Bearer ${token}`,
});
