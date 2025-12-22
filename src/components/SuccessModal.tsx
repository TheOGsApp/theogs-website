import React from 'react';
import { Modal, Result, Button, Space } from 'antd';
import { AppleFilled, AndroidFilled } from '@ant-design/icons';
import { appLinks } from '@/constants';
import { useApplicantStore } from '@/store';

export function SuccessModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { applicant } = useApplicantStore();
  return (
    <Modal open={open} onCancel={onClose} footer={null} centered>
      <Result
        status="success"
        title="You're all done here!"
        subTitle={
          applicant?.isActivelyLooking
            ? "You can only make changes if you turn off 'Actively Looking' in the mobile app."
            : 'Now you can visit the app and fill the remaining details.'
        }
        extra={
          <Space>
            <Button
              type="primary"
              icon={<AppleFilled />}
              href={appLinks[0].href}
              target="_blank"
            >
              iOS App
            </Button>

            <Button
              icon={<AndroidFilled />}
              href={appLinks[1].href}
              target="_blank"
            >
              Android App
            </Button>
          </Space>
        }
      />
      {applicant?.isActivelyLooking && (
        <p style={{ textAlign: 'center', marginTop: '20px' }}>
          Please open the app, go to settings, and turn off &quot;Actively
          Looking&quot; to make changes.
        </p>
      )}
    </Modal>
  );
}
