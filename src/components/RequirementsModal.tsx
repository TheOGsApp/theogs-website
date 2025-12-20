'use client';

import React from 'react';
import { Modal, Button, Typography, Space, Alert, Divider } from 'antd';
import {
  CheckCircleFilled,
  ExclamationCircleOutlined,
} from '@ant-design/icons';
import { UserType } from '@/store';

const requirements = {
  applicant: {
    title: 'Requirements to Create an Applicant Profile',
    items: [
      'Provide accurate personal information',
      'Complete your profile with real experience and skills',
      'Use a valid email address',
      'Agree to the platform terms and conditions',
    ],
    warning:
      'Providing false or misleading information may result in account suspension.',
  },
  recruiter: {
    title: 'Requirements to Create a Recruiter Profile',
    items: [
      'Register with a legitimate company name',
      'Provide valid contact and business information',
      'Post only real and legal job opportunities',
      'Comply with hiring and labor regulations',
    ],
    warning:
      'Any violation of our policies may lead to permanent account removal.',
  },
};

const { Title, Text } = Typography;

interface RequirementsModalProps {
  open: boolean;
  loading?: boolean;
  onClose: () => void;
  onCreateProfile?: () => void;
  userType: UserType;
}

export function RequirementsModal({
  open,
  loading = false,
  onClose,
  onCreateProfile,
  userType,
}: RequirementsModalProps) {
  const isApplicant = userType === UserType.Applicant;
  const current = isApplicant ? requirements.applicant : requirements.recruiter;

  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      centered
      width={520}
      destroyOnHidden
    >
      {/* Header */}
      <Title level={4} style={{ marginBottom: 4 }}>
        Welcome to TheOGs 👋
      </Title>

      <Text type="secondary">
        *Before you get started, please create your profile to continue.
      </Text>

      <Divider />

      {/* Section title */}
      <Title level={5}>{current.title}</Title>

      {/* Requirements list */}
      <Space orientation="vertical" size={12} style={{ width: '100%' }}>
        {current.items.map((item, index) => (
          <Space key={index} align="start">
            <CheckCircleFilled style={{ color: '#1677ff', marginTop: 4 }} />
            <Text>{item}</Text>
          </Space>
        ))}
      </Space>

      {/* Warning */}
      <Alert
        style={{ marginTop: 24 }}
        type="warning"
        icon={<ExclamationCircleOutlined />}
        title={current.warning}
        showIcon
      />

      {/* Actions */}
      <Space
        className="mt-4 !flex justify-end"
        orientation="horizontal"
        size={12}
      >
        <Button block onClick={onClose}>
          Cancel
        </Button>

        <Button
          type="primary"
          block
          loading={loading}
          onClick={onCreateProfile}
        >
          Create Profile
        </Button>
      </Space>

      {/* Footer note */}
      <Text
        type="secondary"
        style={{ display: 'block', marginTop: 16, textAlign: 'center' }}
      >
        *By creating a profile, you agree to our terms and policies.
      </Text>
    </Modal>
  );
}
