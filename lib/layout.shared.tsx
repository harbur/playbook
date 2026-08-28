import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <img src="/logo.png" alt="Harbur Logo" width={24} height={24} />
          <span>Harbur Playbook</span>
        </>
      ),
      url: 'https://harbur.io/',
    },
  };
}
