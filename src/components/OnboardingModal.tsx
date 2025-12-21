import { Modal } from 'antd';

import ApplicantForm from './ApplicantForm/ApplicantForm';
import { useAuthStore } from '@/store';

export function OnboardingModal() {
  const { showOnboardingModal, setShowOnboardingModal } = useAuthStore();

  return (
    <Modal
      open={showOnboardingModal}
      footer={null}
      width={800}
      onCancel={() => setShowOnboardingModal(false)}
    >
      <ApplicantForm />
    </Modal>
  );
}
