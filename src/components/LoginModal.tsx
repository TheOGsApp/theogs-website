import { Modal, Radio, Input, Button, Form, Typography } from 'antd';
import { useAuthStore, UserType } from '@/store';

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
    setEmail,
    verifyOTP,
    sendOTP,
    isRecruiter,
    closeModal,
  } = useAuthStore();

  return (
    <Modal
      open={open}
      destroyOnHidden
      onCancel={closeModal}
      footer={null}
      loading={loading}
    >
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

                    if (value && /@(gmail|yahoo|outlook)\.com$/i.test(value)) {
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

            <Button className="mt-1" type="primary" htmlType="submit" block>
              Get OTP
            </Button>
          </Form>
        </>
      )}

      {/* OTP STEP */}
      {step === 'otp' && (
        <Form layout="vertical" onFinish={verifyOTP}>
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

          <Button className="mt-1" type="primary" htmlType="submit" block>
            Verify OTP
          </Button>
        </Form>
      )}
    </Modal>
  );
};
