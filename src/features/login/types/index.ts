export interface Users {
  _id: string;
  deletedAt: null | string;
  isDeleted: boolean;
  dateOfBirth: string;
  dateOfEmployment: string;
  homeAddress: {
    addressLine1: string;
    addressLine2: string;
    ZIPCode: string;
    city: string;
    _id: string;
  };
  phoneNumber: string;
  email: string;
  name: string;
  __v: number;
}

export interface UsersResponse {
  employees: Users[];
  count: number;
}

export interface UsersQueryArgsData {
  page?: number;
  limit?: number;
  searchText?: string;
}

export interface FormValues {
  name: string;
  email: string;
  phoneNumber: string;
  homeAddress: {
    city: string;
    ZIPCode: string;
    addressLine1: string;
    addressLine2: string;
  };
  dateOfEmployment: string;
  dateOfBirth: string;
}
