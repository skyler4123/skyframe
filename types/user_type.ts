import { AddressType } from "@/types/address_type";
import { CompanyType } from "@/types/company_type";

export type UserType = {
  id: string;
  name: string;
  username: string;
  email: string;
  address: AddressType
  company: CompanyType;
};

// export interface GeoType {
//   lat: string;
//   long: string;
// }

// export interface AddressType {
//   street: string;
//   suite: string;
//   city: string;
//   zipcode: string;
//   geo: GeoType;
// }

// export interface CompanyType {
//   name: string;
//   catchPhrase: string;
//   bs: string;
// }

// export interface UserType {
//   readonly id: string;
//   name: string;
//   username: string;
//   email: string;
//   address: AddressType;
//   company: CompanyType;
// }