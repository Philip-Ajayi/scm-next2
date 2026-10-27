export interface RegistrationFormData {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    address: string;
  }
  
  export interface RegistrationResponse {
    success: boolean;
    message: string;
    alreadyRegistered?: boolean;
    registrationId?: string;
    year?: number;
  }