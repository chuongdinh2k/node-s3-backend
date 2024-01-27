export interface ILoginInput{
    email: string;
    password: string;
}

export interface IRegisterInput{
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    address?: string;
}