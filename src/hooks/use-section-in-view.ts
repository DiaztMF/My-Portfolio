import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { useActiveSection } from '@/components/active-section-provider';
import type { SectionName } from '@/lib/types';

export const useSectionInView = (sectionName: SectionName, threshold = 0.5) => {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSection();

  useEffect(() => {
    // Only update active section if element is in view and user hasn't clicked recently
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
};
