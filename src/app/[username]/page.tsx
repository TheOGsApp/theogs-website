import axios from 'axios';
import { Card, Tag, Image } from 'antd';
import { notFound } from 'next/navigation';
import {
  UserOutlined,
  MailOutlined,
  BookOutlined,
  SolutionOutlined,
} from '@ant-design/icons';
import { appConfig } from '@/config';

interface Job {
  title: string;
  description: string;
  company: string;
  isCurrent: boolean;
  startDate: string;
  location: string;
  type: string;
}

interface Education {
  school: string;
  degree: string;
  fieldOfStudy: string;
  graduationYear: number;
}

interface Applicant {
  _id: string;
  name: string;
  photos: string[];
  username: string;
  email: string;
  bio: string;
  jobTitle: string;
  education: Education;
  jobs: Job[];
  totalYearsOfExperience: number;
  topSkills: string[];
  otherSkills: string[];
  isActivelyLooking: boolean;
}

const maskEmail = (email: string): string => {
  const [localPart, domain] = email.split('@');
  const visibleChars = Math.ceil(localPart.length / 3);
  const masked =
    localPart.substring(0, visibleChars) +
    '*'.repeat(localPart.length - visibleChars);
  return `${masked}@${domain}`;
};

export default async function PublicProfilePage({
  params,
}: {
  params: { username: string };
}) {
  const { username } = await params;
  if (!username) {
    return notFound();
  }

  const { applicant, notFound: empty } = await getApplicant(username);

  if (empty || !applicant) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-10 px-4">
      <div className="max-w-3xl mx-auto flex flex-col gap-4">
        {/* Header */}
        <Card className="border border-gray-100 rounded-xl">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              {applicant.photos?.length ? (
                <Image
                  src={`${appConfig.cloudFrontUrl}/${applicant.photos[0]}`}
                  alt={applicant.name}
                  width={96}
                  height={96}
                  className="rounded-full object-cover ring-2 ring-blue-100 hover:rounded-full"
                />
              ) : (
                <div className="w-24 h-24 rounded-full bg-blue-500 flex items-center justify-center text-white">
                  <UserOutlined style={{ fontSize: 32 }} />
                </div>
              )}
            </div>

            <div className="flex-1 text-center sm:text-left">
              <h1 className="text-2xl font-semibold text-gray-900">
                {applicant.name}
              </h1>
              <p className="text-sm text-gray-500">@{applicant.username}</p>

              <p className="mt-2 text-blue-600 font-medium">
                {applicant.jobTitle}
              </p>

              <p className="mt-3 text-sm text-gray-600 leading-relaxed max-w-xl">
                {applicant.bio}
              </p>

              <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-4">
                <Tag color="blue">
                  {applicant.totalYearsOfExperience} yrs experience
                </Tag>
                {applicant.isActivelyLooking && (
                  <Tag color="green">Actively Looking</Tag>
                )}
              </div>
            </div>
          </div>
        </Card>

        {/* Contact */}
        <Card className="border border-gray-100 rounded-xl">
          <h2 className="text-lg font-semibold flex items-center gap-2 mb-2">
            <MailOutlined /> Contact
          </h2>
          <p className="text-sm text-gray-700 font-mono">
            {maskEmail(applicant.email)}
          </p>
        </Card>

        {/* Skills */}
        <Card className="border border-gray-100 rounded-xl">
          <h2 className="text-lg font-semibold mb-3">Skills</h2>

          {applicant.topSkills?.length > 0 && (
            <div className="mb-4">
              <p className="text-xs font-semibold text-gray-500 mb-2">
                Top Skills
              </p>
              <div className="flex flex-wrap gap-2">
                {applicant.topSkills.map((skill) => (
                  <Tag key={skill} color="blue" className="text-xs">
                    {skill}
                  </Tag>
                ))}
              </div>
            </div>
          )}

          {applicant.otherSkills?.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-gray-500 mb-2">
                Other Skills
              </p>
              <div className="flex flex-wrap gap-2">
                {applicant.otherSkills.map((skill) => (
                  <Tag key={skill} className="text-xs">
                    {skill}
                  </Tag>
                ))}
              </div>
            </div>
          )}
        </Card>

        {/* Experience */}
        {applicant.jobs?.length > 0 && (
          <Card className="border border-gray-100 rounded-xl">
            <h2 className="text-lg font-semibold flex items-center gap-2 mb-4">
              <SolutionOutlined /> Experience
            </h2>
            <div className="space-y-4">
              {applicant.jobs.map((job, idx) => (
                <div key={idx} className="border-l-2 border-blue-200 pl-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900">{job.title}</h3>
                      <p className="text-sm text-blue-600">{job.company}</p>
                    </div>
                    {job.isCurrent && <Tag color="green">Current</Tag>}
                  </div>
                  <p className="text-xs text-gray-500">{job.location}</p>
                  <p className="text-sm text-gray-700 mt-1">
                    {job.description}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        )}

        {/* Education */}
        {applicant.education && (
          <Card className="border border-gray-100 rounded-xl">
            <h2 className="text-lg font-semibold flex items-center gap-2 mb-3">
              <BookOutlined /> Education
            </h2>
            <div className="border-l-2 border-purple-200 pl-4">
              <h3 className="font-medium text-gray-900">
                {applicant.education.degree} in{' '}
                {applicant.education.fieldOfStudy}
              </h3>
              <p className="text-sm text-purple-600">
                {applicant.education.school}
              </p>
              <p className="text-xs text-gray-500">
                Graduated {applicant.education.graduationYear}
              </p>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}

async function getApplicant(username: string) {
  try {
    const response = await axios.get(
      `${appConfig.apiUrl}/applicants/username/${username}`,
    );

    const applicant = response.data;

    const publicFields: (keyof Applicant)[] = [
      'name',
      'photos',
      'username',
      'email',
      'bio',
      'jobTitle',
      'education',
      'jobs',
      'totalYearsOfExperience',
      'topSkills',
      'otherSkills',
      'isActivelyLooking',
    ];

    const filteredApplicant = publicFields.reduce((acc, field) => {
      acc[field] = applicant[field];
      return acc;
    }, {} as Partial<Applicant>) as Pick<
      Applicant,
      (typeof publicFields)[number]
    >;

    return {
      applicant: filteredApplicant,
    };
  } catch {
    return {
      notFound: true,
    };
  }
}
