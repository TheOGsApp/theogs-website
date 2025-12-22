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

export enum WorkModes {
  ONSITE = 'onsite',
  REMOTE = 'remote',
  HYBRID = 'hybrid',
}

export enum PayType {
  MONTHLY = 'monthly',
  YEARLY = 'yearly',
}

export enum LanguageProficiency {
  Basic = 'basic',
  Intermediate = 'intermediate',
  Fluent = 'fluent',
  Native = 'native',
}

export interface Language {
  name: string;
  proficiency: LanguageProficiency; // e.g. Basic, Intermediate, Fluent
}

export interface PortfolioLink {
  title: string;
  url: string;
}

export interface Applicant {
  _id: string;
  name: string;
  email: string;
  phoneNumber: string;
  jobTitle: string;
  bio: string; // max 200 characters
  gender: string;
  dateOfBirth: string;
  showDateOfBirth: boolean;
  isOnline: boolean;
  address?: Address;
  reasonForJobChange?: string; // new field
  photos: string[]; // max 3 photos
  totalYearsOfExperience?: number;
  topSkills: string[]; // should be max 3 for basic Applicant / max 5 for premium Applicant
  otherSkills: string[]; // should be max 5 for basic Applicant / max 10 for premium Applicant
  jobs: ApplicantJob[]; // max 2 jobs
  interestedRoles: string[]; // max 3 roles
  education?: Education;
  expectedSalaryCurrency: string;
  minimumExpectedSalary?: number; // in the expected currency
  maximumExpectedSalary?: number; // in the expected currency
  payType: PayType; // e.g. per annum, per month, etc.
  workModes: WorkModes[];
  preferredJobTypes: JobType[];
  noticePeriod: number; // in days, less than 10 means immediate
  portfolioLinks: PortfolioLink[];
  domainExpertise: SelectOption[];

  createdAt: string;
  updatedAt: string;
  lastLoginTime?: string;

  preferredWorkLocations: Address[]; // Todo
  openToRelocation?: boolean;
  workAuthorization: string; // e.g. US Citizen, H1B, etc.
  visaSponsorshipRequired?: boolean; // true if visa sponsorship is required
  languages: Language[];
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
