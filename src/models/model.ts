export interface Todo {
    id:number,
    todo:string,
    completed:string,
    userId:number,
}

export interface Post {
    id:number,
    userId:number,
    title:string,
    body:string,
    tags:string[],
    reactions:number,
}

export interface User {
    id:number,
    firstName:string,
    lastName: string,
    maidenName: string,
    age: number,
    gender: string,
    email: string,
    phone: string,
    username: string,
    password: string,
    birthDate: string,
    bloodGroup: string,
    height: number,
    weight: number,
    eyeColor: string,
}