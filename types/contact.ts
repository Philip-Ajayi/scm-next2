export interface ContactFormData {
    fullName: string;
    email: string;
    phone: string;
    reason: string;
    message: string;
  }
  
  export interface ContactReasonOption {
    value: string;
    label: string;
  }
  
  export interface ContactChannel {
    label: string;
    value: string;
    href?: string;
    icon: "phone" | "mail" | "map";
    note?: string;
  }