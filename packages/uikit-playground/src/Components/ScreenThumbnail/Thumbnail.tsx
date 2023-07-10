import { css } from '@rocket.chat/css-in-js';
import { Box } from '@rocket.chat/fuselage';
import type { ReactNode, ComponentProps } from 'react';
import React, { useRef, useMemo, useState, useEffect } from 'react';

interface ThumbnailProps {
  of: ReactNode;
}

const Thumbnail: React.FC<ThumbnailProps & ComponentProps<typeof Box>> = ({
  of,
  ...props
}) => {
  const parentRef = useRef<HTMLDivElement | null>(null);
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const pw = parentRef.current?.parentElement?.offsetWidth || 0;

    const width = elementRef.current?.offsetWidth || 0;

    setScale(pw / width);
  }, [of]);

  return (
    <Box overflow="hidden" position="relative" ref={parentRef} {...props}>
      <Box
        w={'max-content'}
        className={css`
          transform: scale(${scale});
          transform-origin: 0% 0%;
          pointer-events: none;
        `}
        ref={elementRef}
      >
        {of}
      </Box>
    </Box>
  );
};

export default Thumbnail;
