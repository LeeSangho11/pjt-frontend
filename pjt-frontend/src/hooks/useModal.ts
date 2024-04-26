import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const useModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const open = useCallback(() => {
    setIsOpen(() => true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(() => false);
  }, []);

  return {
    open,
    close,
    isOpen,
  };
};

export { useModal };
