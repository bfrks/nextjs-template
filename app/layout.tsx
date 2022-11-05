import '@styles/global.scss';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  if (process.env.NEXT_PUBLIC_MSW_STATUS === 'enabled') {
    require('@test/mocks');
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const SetupMswWorker = require('@test/mocks/SetupMswWorker');
    return (
      <html lang="en">
        <SetupMswWorker.default />
        <head />
        <body>{children}</body>
      </html>
    );
  }
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}
