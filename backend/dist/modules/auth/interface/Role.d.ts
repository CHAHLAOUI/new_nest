export declare enum Role {
    Admin = "admin",
    user = "user"
}
type User = {
    id: string;
    userName: string;
    password: string;
    role: Role;
};
export interface IAuthenticate {
    user: User;
    token: string;
}
export {};
