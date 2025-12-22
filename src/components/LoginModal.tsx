import { Modal, Radio, Input, Button, Form, Typography } from 'antd';
import { useAuthStore, UserType } from '@/store';
import { RequirementsModal } from './RequirementsModal';
import { OnboardingModal } from './OnboardingModal';
import { SuccessModal } from './SuccessModal';

export const LoginModal = () => {
  const {
    open,
    email,
    loading,
    userType,
    setUserType,
    step,
    otp,
    setOTP,
    resendTimer,
    isResendDisabled,
    setEmail,
    verifyOTP,
    sendOTP,
    isRecruiter,
    createProfile,
    closeModal,
    showOnboardingModal,
    showRequirementsModal,
    setShowRequirementsModal,
    showSuccessModal,
    setShowSuccessModal,
  } = useAuthStore();

  return (
    <>
      {showRequirementsModal && (
        <RequirementsModal
          loading={loading}
          open={showRequirementsModal}
          onCreateProfile={createProfile}
          onClose={() => setShowRequirementsModal(false)}
          userType={userType}
        />
      )}

      {showOnboardingModal && <OnboardingModal />}

      {showSuccessModal && (
        <SuccessModal
          open={showSuccessModal}
          onClose={() => setShowSuccessModal(false)}
        />
      )}

      <Modal open={open} destroyOnHidden onCancel={closeModal} footer={null}>
        <Typography.Title level={4} className="pb-4">
          Welcome To TheOGs!
        </Typography.Title>

        {/* EMAIL STEP */}
        {step === 'email' && (
          <>
            <Radio.Group
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              style={{ marginBottom: 16 }}
            >
              <Radio value={UserType.Applicant}>Applicant</Radio>
              <Radio value={UserType.Recruiter}>Recruiter</Radio>
            </Radio.Group>

            <Form layout="vertical" onFinish={sendOTP}>
              <Form.Item
                label={isRecruiter() ? 'Work Email' : 'Email'}
                name="email"
                rules={[
                  { required: true, message: 'Email is required' },
                  {
                    type: 'email',
                    message: 'Enter a valid email address',
                  },
                  {
                    validator: (_, value) => {
                      if (!isRecruiter()) return Promise.resolve();

                      if (
                        value &&
                        /@(gmail|yahoo|outlook|hotmail|live|icloud|zoho|aol|msn|protonmail|gmx|fastmail|tutanota|mail)\.com$/i.test(
                          value,
                        )
                      ) {
                        return Promise.reject(
                          new Error('Please use your work email'),
                        );
                      }

                      return Promise.resolve();
                    },
                  },
                ]}
              >
                <Input
                  type="email"
                  placeholder={
                    isRecruiter() ? 'you@company.com' : 'you@example.com'
                  }
                  inputMode="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Item>

              <Button
                className="mt-1"
                type="primary"
                htmlType="submit"
                block
                loading={loading}
              >
                Get OTP
              </Button>
            </Form>
          </>
        )}

        {/* OTP STEP */}
        {step === 'otp' && (
          <Form
            className="flex flex-col items-end"
            layout="vertical"
            onFinish={verifyOTP}
          >
            <Form.Item
              label="Enter OTP"
              name="otp"
              rules={[
                { required: true, message: 'OTP is required' },
                {
                  pattern: /^\d{4}$/,
                  message: 'OTP must be exactly 4 digits',
                },
              ]}
            >
              <Input.OTP
                length={4}
                type="number"
                inputMode="numeric"
                value={otp}
                onChange={(value) => {
                  // allow only numbers
                  const numericValue = value.replace(/\D/g, '');
                  setOTP(numericValue);
                }}
                size="middle"
              />
            </Form.Item>

            <Button
              className="mt-1"
              type="primary"
              htmlType="submit"
              disabled={loading}
              block
            >
              Verify OTP
            </Button>

            <Button
              className="mt-2 text-right"
              type="link"
              variant="link"
              disabled={isResendDisabled}
              onClick={sendOTP}
              loading={loading}
            >
              Resend OTP {isResendDisabled && `in ${resendTimer}s`}
            </Button>
          </Form>
        )}
      </Modal>
    </>
  );
};
