'use client';

if (process.env.NEXT_PUBLIC_MSW_STATUS === 'enabled') {
  require('@test/mocks');
}

export default function SetupMswWorker() {
  return null;
}
