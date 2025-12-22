import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { Loading } from '@/components';
import { gotoLogin, useAuth } from '@/features/auth';
import { NextPageWithLayout } from '@/types/next';


const Page: NextPageWithLayout = () => {
  const { authenticated } = useAuth();
  const { replace } = useRouter();

  /**
   * If the user is authenticated we redirect him to the index page (grid).
   */
  useEffect(() => {
    if (authenticated) {
      void replace('/');
    } else {
      // If not authenticated, go to login page
      gotoLogin();
    }
  }, [authenticated, replace]);

  return <Loading $height="100vh" $width="100vw" />;
};

export default Page;
