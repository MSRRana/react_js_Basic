import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

const Child = (props, ref) => {
  const [openModal, setOpenModal] = useState(false);

  useImperativeHandle(ref, () => ({
    openModal: (value) => {
      setOpenModal(value);
    },
  }));

  if (!openModal) {
    return null;
  } else {
    return (
      <div ref={ref}>
        <p>This is Modal</p>
        <button onClick={() => setOpenModal(false)}>Close</button>
      </div>
    );
  }
};

export default forwardRef(Child);
