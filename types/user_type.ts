export type GeoType = {
  lat: string;
  long: string;
};

export type AddressType = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoType;
};

export type CompanyType = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export type UserType = {
  id: string;
  name: string;
  username: string;
  email: string;
  address: AddressType;
  company: CompanyType;
};