export interface KanbanCard {
    title?: string;
    description?: string;
    progress?: number;
    assignees?: Object[];
    attachments?: number;
    comments?: Object[];
    startDate?: string;
    dueDate?: string;
    completed?: boolean;
    priority?: Object;
}

export interface KanbanList {
    title?: string;
    content?: KanbanCard[];
}

export interface Comment {
    id: number;
    name: string;
    image?: string;
    text: string;
}