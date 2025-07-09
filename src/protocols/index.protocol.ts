export type signUpProtocol = {
    id: number;
    name: string;
    email: string;
    password: string
}

export type signInProtocol = 
    Omit<signUpProtocol, "id" | "email">;

    

