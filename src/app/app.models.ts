export interface Annotator {
    id: string,
    name: string,
    email: string,
    gender: string,
    articles: Article[]
}

export interface Article {
    id: string,
    title: string,
    abstract: string,
}

export interface Link {
    name: string,
    href: string
}
