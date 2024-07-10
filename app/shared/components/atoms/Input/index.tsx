import React from "react";
import Image from "next/image";
import search from "@/app/shared/assets/images/search.svg";
import { inputStyles } from "./constants";

interface Props {
  type?: string;
  placeholder?: string;
  width?: string;
  label?: string;
  required?: boolean;
  disabled?: boolean;
  value?: string;
  name: string;
  onEmit: Function;
}

const Input = (props: Props) => {
  return (
    <div className="">
      <div className="">
        {props.type === "text" ? (
          <div className="flex flex-col">
            <p
              className={
                props.disabled
                  ? "text-inputDisabled mb-2"
                  : "text-base text-blue mb-2"
              }
            >
              {props.label}
              {props.required ? (
                <span
                  className={
                    props.disabled ? "text-inputDisabled" : "text-blue"
                  }
                >
                  *
                </span>
              ) : null}
            </p>
            <input
              name={props.name}
              onChange={(e) => props.onEmit(e)}
              value={props.value}
              disabled={props.disabled}
              type="text"
              className={
                props.disabled ? inputStyles.onlyRead : inputStyles.primary
              }
            />
          </div>
        ) : props.type === "search" ? (
          <div className="flex justify-between  border-1 border-blue p-2 rounded-lg w-1/3">
            <input
              name={props.name}
              onChange={(e) => props.onEmit(e)}
              type="text"
              placeholder="Buscar"
              className={inputStyles.search}
            />
            <button type="submit" className="bg-blue-500 text-white rounded-md">
              <Image width={20} height={20} src={search} alt="search" />
            </button>
          </div>
        ) : props.type === "textarea" ? (
          <div className="flex flex-col">
            <p
              className={
                props.disabled
                  ? "text-inputDisabled mb-2"
                  : "text-base text-blue mb-2"
              }
            >
              {props.label}
              {props.required ? (
                <span
                  className={
                    props.disabled ? "text-inputDisabled" : "text-blue"
                  }
                >
                  *
                </span>
              ) : null}
            </p>
            <textarea
              name={props.name}
              onChange={(e) => props.onEmit(e)}
              value={props.value}
              rows={3}
              cols={3}
              disabled={props.disabled}
              className={
                props.disabled
                  ? `${inputStyles.onlyReadTextArea} no-resize`
                  : `${inputStyles.primaryTextArea} no-resize`
              }
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Input;
