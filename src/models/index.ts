export interface ItemInterface {
  id?: number;
  fullName?: string;
  image?: string;
  country?: string;
  birthday?: string;
  gender?: string;
  views?: number;
  likes?: number;
  created?: string;
}

export type ItemsType = {
  cardData?: ItemInterface[];
};

export interface FormState {
  errors: {
    fullNameInput: string;
    birthdayInput: string;
    countryInput: string;
    genderInput: string;
    imageInput: string;
    confirmationInput: string;
  };
  buttonDisabled: boolean;
  cardSaved: boolean;
}

export type FormProps = {
  addCard?: (cardData: ItemInterface) => void;
};

export interface IResult {
  id?: number;
  name?: string;
  image?: string;
  origin?: { name: string };
  created?: string;
  gender?: string;
  views?: number;
  likes?: number;
}

export interface ISearch {
  searchValue: string;
  setSearchValue: (searchValue: string) => void;
  setSubmission: (value: boolean) => void;
}

export interface IHomeState {
  cardData: object[];
  searchValue: string;
  errorMessage: string;
  isLoading: boolean;
  isSubmitted: boolean;
}
