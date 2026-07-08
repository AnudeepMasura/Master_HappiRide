// ==========================================================
// Login Types
// ==========================================================

export interface LoginCredentials {
    username: string;
    password: string;
}

export interface LoginResponse {
    success: boolean;
    message: string;
    token?: string;
    role?: "admin" | "support" | "kyc";
}
