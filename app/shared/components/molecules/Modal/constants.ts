import { Modal } from "@/app/shared/models/Modal";

export const DeleteModal: Modal = {
  title: "¿Está seguro que desea eliminar el producto?",
  confirm: {
    text: "Confirmar",
    variant: "danger",
  },
  cancel: {
    text: "Cancelar",
    variant: "terciary",
  },
};
