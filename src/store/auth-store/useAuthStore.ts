import { create } from 'zustand';

import { AuthActions, AuthGetters, AuthState, UserType } from './auth.types';

export const useAuthStore = create<AuthState & AuthGetters & AuthActions>(
  (set, get) => ({
    open: false,
    loading: false,
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
        set({ step: 'otp' });
        resolve();
      });
    },
    verifyOTP: () => {
      return new Promise<void>((resolve) => {});
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
