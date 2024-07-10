import React from "react";
import Image from "next/image";
import plus from "@/app/shared/assets/images/plus-folder.svg";
import { buttonStyles } from "./constants";

interface Props {
  onClick?: () => void;
  variant: string;
  icon?: boolean;
  text: string;
  width?: string;
  isValid: boolean;
}

const Button = (props: Props) => {
  return (
    <button
      disabled={!props.isValid}
      onClick={props.onClick}
      className={
        !props.isValid
          ? buttonStyles.disabled
          : props.variant === "primary"
          ? buttonStyles.primary
          : props.variant === "secondary"
          ? buttonStyles.secondary
          : props.variant === "terciary"
          ? buttonStyles.terciary
          : props.variant === "danger"
          ? buttonStyles.danger
          : ""
      }
    >
      <div className="flex justify-center">
        {props.icon ? (
          <Image width={20} height={20} src={plus} alt="new_product" />
        ) : null}
        <p className={`text-md text-center ${props.icon && "ml-2"}`}>
          {props.text}
        </p>
      </div>
    </button>
  );
};

export default Button;
