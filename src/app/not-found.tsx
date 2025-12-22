import Link from 'next/link';

import { Result } from 'antd';

export default function NotFound() {
  return (
    <Result
      className="bg-white"
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Link href="/">Return Home</Link>}
    />
  );
}
