import mongoose, { Schema, Document, Model } from "mongoose";

export interface IRegistration extends Document {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  year: number;
  attendance: number[];
  unsubscribed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const RegistrationSchema = new Schema<IRegistration>(
  {
    firstName: {
      type: String,
      required: [true, "First name is required"],
      trim: true
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
      trim: true
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true
    },
    email: {
      type: String,
      required: [true, "Email address is required"],
      trim: true,
      lowercase: true
    },
    address: {
      type: String,
      required: [true, "Address is required"],
      trim: true
    },
    year: {
      type: Number,
      default: () => new Date().getFullYear(),
      required: true
    },
    attendance: {
      type: [Number],
      default: [] // Never posted directly by user
    },
    unsubscribed: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

// Compound index on email and year (ensures 1 registration per attendee per year)
RegistrationSchema.index({ email: 1, year: 1 }, { unique: true });

export const Registration: Model<IRegistration> =
  mongoose.models.Registration ||
  mongoose.model<IRegistration>("Registration", RegistrationSchema);