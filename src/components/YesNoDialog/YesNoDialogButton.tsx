import React, { useState } from 'react';
import { Button, ButtonProps } from '@mui/material';
import { SuccessMessageDto } from '../../data/load/loadDtos';
import YesNoDialog from './YesNoDialog';

interface YesNoDialogButtonProps {
  title: string;
  yesText?: string;
  noText?: string;
  onCloseYes: () => Promise<SuccessMessageDto>;
  buttonProps?: ButtonProps; //TODO: change on child
}

const YesNoDialogButton = ({
  title,
  yesText,
  noText,
  onCloseYes,
  buttonProps,
}: YesNoDialogButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState<SuccessMessageDto | undefined>(undefined);
  const open = () => {
    setMessage(undefined);
    setIsOpen(true);
  };
  const close = (yes: boolean | undefined) => {
    if (yes !== undefined && yes) {
      onCloseYes().then((m) => (m.success ? setIsOpen(false) : setMessage(m)));
    } else setIsOpen(false);
  };

  const resultProps = { ...buttonProps, onClick: open };
  return (
    <>
      <Button {...resultProps}>Hello</Button>
      <YesNoDialog
        title={title}
        yesText={yesText}
        noText={noText}
        message={message}
        open={isOpen}
        onClose={close}
      />
    </>
  );
};

export default YesNoDialogButton;
