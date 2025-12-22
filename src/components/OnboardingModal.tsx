import { Modal } from 'antd';

import ApplicantForm from './ApplicantForm/ApplicantForm';
import { useAuthStore } from '@/store';
import { RecruiterForm } from './RecruiterForm/RecruiterForm';

export function OnboardingModal() {
  const { showOnboardingModal, setShowOnboardingModal, isApplicant } =
    useAuthStore();

  return (
    <Modal
      open={showOnboardingModal}
      footer={null}
      width={800}
      onCancel={() => setShowOnboardingModal(false)}
    >
      {isApplicant() ? <ApplicantForm /> : <RecruiterForm />}
    </Modal>
  );
}
