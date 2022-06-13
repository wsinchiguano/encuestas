export interface Blog {
    image?: string;
    profile?: string;
    title?: string;
    description?: string;
    comment?: number;
    share?: number;
    day?: string;
    month?: string;
    tags: string[];
    images?: string[];
    status?: string;
}