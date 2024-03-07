import React from 'react';

import LibraryGameCardSkeleton from '@/components/LibraryGameCardSkeleton';
import { range } from '@/utils';
import LibraryHeader from '@/components/LibraryHeader';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';

export const dynamic = 'force-dynamic';

async function VaporExerciseLoading() {
  return (
    <MaxWidthWrapper>
      <LibraryHeader>
        <h1>My games</h1>
      </LibraryHeader>
      <div className='game-grid'>
        {range(12).map((index) => (
          <LibraryGameCardSkeleton key={index} />
        ))}
      </div>
    </MaxWidthWrapper>
  );
}

export default VaporExerciseLoading;
