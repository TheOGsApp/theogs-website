export interface Recruiter {
  _id: string;
  name: string;
  email: string;
  jobTitle: string;
  bio: string;
}

export interface RecruiterState {
  recruiter?: Recruiter;
  loading: boolean;
}

export interface RecruiterActions {
  setRecruiter: (recruiter: Recruiter) => void;
  setLoading: (loading: boolean) => void;
}
