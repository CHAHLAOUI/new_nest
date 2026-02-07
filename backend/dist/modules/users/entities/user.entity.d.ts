export declare enum Role {
    Admin = "Admin",
    User = "User"
}
export declare class User {
    id: string;
    userName: string;
    password: string;
    role: Role;
    createdAt: Date;
}
