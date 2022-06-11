import React from 'react';
import { CircularProgress } from '@mui/material';
import clsx from 'clsx';

const Spin = ({ spinning = false, children }) => {
  const [_spinning, setSpinning] = React.useState(spinning);

  React.useEffect(() => {
    setTimeout(() => setSpinning(spinning), 200);
  }, [spinning]);

  return _spinning ? (
    <div className={clsx('flex justify-center items-center transition', spinning ? 'opacity-1' : 'opacity-0')}>
      <CircularProgress disableShrink />
    </div>
  ) : (
    children
  );
};

export default Spin;
