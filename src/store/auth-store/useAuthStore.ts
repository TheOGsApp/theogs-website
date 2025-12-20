import { create } from 'zustand';
import { message } from 'antd';

import {
  AuthActions,
  AuthGetters,
  AuthState,
  SendOTPResponse,
  UserType,
  VerifyOTPResponse,
} from './auth.types';
import { api } from '@/api';
import { useApplicantStore } from '../applicant';
import { useRecruiterStore } from '../recruiter';

export const useAuthStore = create<AuthState & AuthGetters & AuthActions>(
  (set, get) => ({
    open: false,
    loading: false,
    accessToken: '',
    step: 'email',
    email: '',
    otp: '',
    userType: UserType.Applicant,

    isApplicant: () => {
      return get().userType === UserType.Applicant;
    },

    isRecruiter: () => {
      return get().userType === UserType.Recruiter;
    },

    setOTP: (otp) => set({ otp }),
    setLoading: (loading) => set({ loading }),
    setOpen: (open) => set({ open }),
    setStep: (step) => set({ step }),
    setUserType: (userType) => set({ userType }),
    setEmail: (email) => set({ email }),

    sendOTP: () => {
      return new Promise<void>((resolve) => {
        set({ loading: true });

        const { isApplicant, email } = get();

        const path = isApplicant() ? '/applicants/login' : '/recruiters/login';

        api
          .post<SendOTPResponse>(path, {
            email,
            loginFrom: 'website',
          })
          .then((response) => {
            if (response.data.userDoesNotExist) {
              message.warning(
                `No account found for ${email}. Please create a profile.`,
              );
              return;
            }
            if (response.data.accessToken) {
              set({ accessToken: response.data.accessToken });
              set({ step: 'otp' });
              message.success(`OTP sent to ${email}`);
            }
          })
          .catch(() => {
            message.error(`Error sending OTP to ${email}`);
          })
          .finally(() => {
            set({ loading: false });
            resolve();
          });
      });
    },
    verifyOTP: () => {
      return new Promise<void>((resolve) => {
        set({ loading: true });

        const { isApplicant, email, otp } = get();

        const path = isApplicant()
          ? '/applicants/verify-otp'
          : '/recruiters/verify-otp';

        api
          .post<VerifyOTPResponse>(path, {
            email,
            otp,
          })
          .then((response) => {
            if (response.data.accessToken) {
              set({ accessToken: response.data.accessToken, open: false });
              message.success('OTP verified successfully');

              if (response.data.applicant) {
                useApplicantStore
                  .getState()
                  .setApplicant(response.data.applicant);
              }

              if (response.data.recruiter) {
                useRecruiterStore
                  .getState()
                  .setRecruiter(response.data.recruiter);
              }
            }
          })
          .catch((error) => {
            console.error('Error verifying OTP:', error);
            // Handle error as needed
          })
          .finally(() => {
            set({ loading: false });
            resolve();
          });
      });
    },
    createProfile: () => {
      return new Promise<void>((resolve) => {});
    },
    closeModal: () => {
      set({
        open: false,
        step: 'email',
        email: '',
        userType: UserType.Applicant,
      });
    },
  }),
);
