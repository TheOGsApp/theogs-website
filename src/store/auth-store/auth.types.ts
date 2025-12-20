export enum UserType {
  Recruiter = 'Recruiter',
  Applicant = 'Applicant',
}

export interface AuthState {
  open: boolean;
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

  sendOTP: () => Promise<void>;
  verifyOTP: (otp: string) => Promise<void>;
  createProfile: () => Promise<void>;
  closeModal: () => void;
}
