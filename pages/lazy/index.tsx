import dynamic from 'next/dynamic';
import { lazy, Suspense, useState } from 'react';

const LazyViaReactLazy = lazy(
  () =>
    new Promise<{ default: React.ComponentType }>((resolve) => {
      setTimeout(() => resolve(import('../../components/Lazy')), 2000);
    }),
);

const LazyViaNextDynamic = dynamic(
  () =>
    new Promise<{ default: React.ComponentType }>((resolve) => {
      setTimeout(() => resolve(import('../../components/Lazy')), 2000);
    }),
  {
    ssr: true,
    loading: () => <p>Loading via Next Dynamic...</p>,
  },
);

const LazyPage = () => {
  const [showLazy, setShowLazy] = useState(false);

  return (
    <div className="w-[940px] mx-auto py-[50px]">
      <label>
        <input
          type="checkbox"
          checked={showLazy}
          onChange={(e) => setShowLazy(e.target.checked)}
        />
        Show Lazy
      </label>
      <hr />
      {showLazy && (
        <>
          <Suspense fallback={<p>Loading via React Lazy...</p>}>
            <LazyViaReactLazy />
          </Suspense>
          <LazyViaNextDynamic />
        </>
      )}
    </div>
  );
};

export default LazyPage;
