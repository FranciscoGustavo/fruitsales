import { useState } from 'react';

export const useHandleData = () => {
  const [modal, setModal] = useState(false);
  const [data, setData] = useState();

  const handleOpen = (data) => {
    setData(data);
    setModal(true);
  }

  const handleClose = () => {
    setModal(false);
    setData(false);
  }

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  }

  return {
    modal,
    data,
    handleOpen,
    handleClose,
    handleChange
  }
}