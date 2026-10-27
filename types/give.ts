export type GivingCategory = "general" | "event";

export interface GivingOption {
  id: GivingCategory;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
}

export interface GivingFormData {
  category: GivingCategory;
  fullName: string;
  email: string;
  amount: number | string;
  notes?: string;
}

export interface PresetAmount {
  label: string;
  value: number;
}