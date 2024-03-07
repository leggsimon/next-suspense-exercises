import React from 'react';

import LibraryGameCardSkeleton from '@/components/LibraryGameCardSkeleton';
import { range } from '@/utils';
import LibraryHeader from '@/components/LibraryHeader';

export const dynamic = 'force-dynamic';

async function VaporExerciseLoading() {
  return (
    <section className='max-width-wrapper'>
      <LibraryHeader>
        <h1>My games</h1>
      </LibraryHeader>
      <div className='game-grid'>
        {range(12).map((index) => (
          <LibraryGameCardSkeleton key={index} />
        ))}
      </div>
    </section>
  );
}

export default VaporExerciseLoading;
