export type ResponseType<T> = {
    [key:string]:T;
} & {
    limit:number,
    skip:number,
    total:number
}