export interface UserProfile {
    firstName: string,
    lastName: string,
    team: string,
    department: string,
    email: string,
    avatarUrl: string,
}

export interface UserMetadata extends UserProfile {}

export const user: UserMetadata = {
    firstName: "Anthony",
    lastName: "Flores",
    team: "Integration Engineering",
    department: "Technology",
    email: "anthony.flores@rygen.com",
    avatarUrl: "/user.jpeg",
}