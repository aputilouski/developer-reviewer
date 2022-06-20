import { Dialog } from '@mui/material';

const DialogComponent = ({ children, open, setOpen }) => {
  return (
    <Dialog open={open} onClose={() => setOpen(false)} maxWidth={'xl'}>
      {children}
    </Dialog>
  );
};
export default DialogComponent;
