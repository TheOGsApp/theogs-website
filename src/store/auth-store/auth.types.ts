import { Applicant } from '../applicant';
import { Recruiter } from '../recruiter';

export enum UserType {
  Recruiter = 'Recruiter',
  Applicant = 'Applicant',
}

export interface SendOTPResponse {
  accessToken: string;
  otp: string;
  isNewUser: boolean;
  userDoesNotExist: boolean;
  deactivated: boolean;
  banned: boolean;
}

export interface VerifyOTPResponse {
  accessToken: string;
  applicant: Applicant;
  recruiter: Recruiter;
}

export interface AuthState {
  open: boolean;
  showRequirementsModal: boolean;
  showOnboardingModal: boolean;
  accessToken: string;
  loading: boolean;
  step: 'email' | 'otp';
  userType: UserType;
  email: string;
  otp: string;
}

export interface AuthGetters {
  isRecruiter: () => boolean;
  isApplicant: () => boolean;
}

export interface AuthActions {
  setOpen: (open: boolean) => void;
  setStep: (step: 'email' | 'otp') => void;
  setUserType: (userType: UserType) => void;
  setEmail: (email: string) => void;
  setOTP: (otp: string) => void;
  setLoading: (loading: boolean) => void;
  setShowRequirementsModal: (show: boolean) => void;
  setShowOnboardingModal: (showOnboardingModal: boolean) => void;

  sendOTP: () => Promise<void>;
  verifyOTP: (otp: string) => Promise<void>;
  createProfile: () => Promise<void>;
  closeModal: () => void;
}
