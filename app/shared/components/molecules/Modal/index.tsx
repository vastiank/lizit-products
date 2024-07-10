import React from "react";
import { Modal } from "@/app/shared/models/Modal";
import Button from "@/app/shared/components/atoms/Button";

type Props = {
  config: Modal;
  onCancel: () => void;
  onConfirm: () => void;
};

const ModalComponent = (props: Props) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50 bg-black backdrop-blur-md">
      <div className="w-90 md:w-1/3 flex flex-col justify-center items-center bg-white p-10 rounded-lg">
        <h1 className="text-center"> {props.config.title} </h1>
        <div className="w-full flex justify-center mt-4">
          <Button
            onClick={() => props.onCancel()}
            variant={props.config.cancel.variant}
            text={props.config.cancel.text}
            isValid
          />

          <Button
            onClick={() => props.onConfirm()}
            variant={props.config.confirm.variant}
            text={props.config.confirm.text}
            isValid
          />
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
