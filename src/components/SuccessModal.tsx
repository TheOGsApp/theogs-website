import React from 'react';
import { Modal, Result, Button, Space } from 'antd';
import { AppleFilled, AndroidFilled } from '@ant-design/icons';
import { appLinks } from '@/constants';

export function SuccessModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <Modal open={open} onCancel={onClose} footer={null} centered>
      <Result
        status="success"
        title="You're all done here!"
        subTitle="Now you can visit the app and fill the remaining details."
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
    </Modal>
  );
}
