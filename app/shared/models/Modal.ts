export interface Modal {
  title: string;
  confirm: BtnConfig;
  cancel: BtnConfig;
}

interface BtnConfig {
  text: string;
  variant: string;
}
