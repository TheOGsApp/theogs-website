export interface Address {
  street?: string;
  city?: string;
  state: string;
  country: string;
  zipCode?: string;
}

export interface SelectOption {
  label: string;
  value?: string | number;
  disabled?: boolean;
  icon?: React.ReactNode;
}

export enum JobType {
  FULL_TIME = 'fulltime',
  CONTRACT = 'contract',
}

export interface ApplicantJob {
  title: string;
  description: string;
  company: string;
  startDate: string;
  endDate?: string;
  location: string;
  isCurrent?: boolean;
  verified?: boolean;
  type: JobType;
}

export interface Education {
  school: string;
  degree: string;
  fieldOfStudy: string;
  numOfYears: number;
  graduationYear: number;
}

export interface PortfolioLink {
  title: string;
  url: string;
}

export interface Applicant {
  _id: string;
  name: string;
  email: string;
  jobTitle: string;
  bio: string;
  totalYearsOfExperience?: number;
  jobs: ApplicantJob[];
  education?: Education;
  portfolioLinks: PortfolioLink[];
  isActivelyLooking: boolean;
}

export interface ApplicantState {
  applicant?: Applicant;
  loading: boolean;
}

export interface ApplicantActions {
  setApplicant: (applicant: Applicant) => void;
  setLoading: (loading: boolean) => void;

  updateProfile: (
    id: string,
    updatedData: Partial<Applicant>,
  ) => Promise<boolean>;
}
