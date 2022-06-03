export interface KanbanCard {
    id?: string;
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
    listId?: string;
    title?: string;
    cards?: KanbanCard[];
}

export interface Comment {
    id: string;
    name: string;
    image?: string;
    text: string;
}

export interface ListName {
    listId?: string;
    title: string;
}