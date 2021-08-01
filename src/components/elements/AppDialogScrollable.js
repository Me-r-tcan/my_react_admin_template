import React, { useEffect, useRef } from "react";
import DialogContentText from "@material-ui/core/DialogContentText";

import AppDialog from "./AppDialog";

function AppDialogScrollable({
  open,
  setOpen,
  title,
  children,
  footer,
  ...others
}) {
  const descriptionElementRef = useRef(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <AppDialog
      open={open}
      onClose={() => setOpen(false)}
      scroll='paper'
      title={title}
      footer={footer}
      {...others}
    >
      <DialogContentText
        id='scroll-dialog-description'
        ref={descriptionElementRef}
        tabIndex={-1}
      >
        {children}
      </DialogContentText>
    </AppDialog>
  );
}

export default AppDialogScrollable;
