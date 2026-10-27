export interface RegistrationInput {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    address: string;
    year?: number;
    attendance: number[];
    unsubscribed?: boolean;
  }
  
  export interface AttendanceSessionOption {
    id: number;
    day: string;
    time: string;
    title: string;
  }
  
  export interface RegistrationResponse {
    success: boolean;
    message: string;
    registrationId?: string;
    alreadyRegistered?: boolean;
  }