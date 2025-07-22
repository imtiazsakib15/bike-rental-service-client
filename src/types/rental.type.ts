import { TBike } from "./bike.type";
import { TUser } from "./user.type";

export type TRental = {
  _id: string;
  userId: TUser;
  bikeId: TBike;
  startTime: Date;
  returnTime?: Date | null;
  totalCost?: number;
  isReturned?: boolean;
  serviceCharge?: TPayment;
  rent?: TPayment;
  createdAt?: Date;
  updatedAt?: Date;
};

type TPayment = {
  transactionId?: string | null;
  isPaid?: boolean;
};
