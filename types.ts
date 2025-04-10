export type Author = {
    name: string,
    bio: string,
}

export type Books = {
    entries: {
        key:string,
        title:string,
        covers?: string[],
    }[];
}

export type Book_1 = {
    key:string,
    title: string,
    author_name: string,
    cover_i: string,
    authors:{
        author:{
            key:string,
        }
    }[];
}

export type Book_2 = {
    title:string,
    description:string,
    covers?:string[];
    created: {
        value: string
    }
    authors:{
        author:{
            key:string,
        }
    }[];
}