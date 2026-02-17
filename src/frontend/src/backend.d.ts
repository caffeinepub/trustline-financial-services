import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface backendInterface {
    getAllContacts(): Promise<Array<{
        name: string;
        email: string;
        message: string;
        phone?: string;
    }>>;
    submitContactForm(name: string, email: string, phone: string | null, message: string): Promise<boolean>;
}
