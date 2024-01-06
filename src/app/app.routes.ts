import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Page1Component } from './page1/page1.component';
import path from 'path';
import { Page2Component } from './page2/page2.component';
import { PostComponent } from '../components/post/post.component';
import { TodoComponent } from '../components/todo/todo.component';
import { UserComponent } from '../components/user/user.component';

export const routes: Routes = [
    {path:"", component:HomeComponent },
    {path:"page1", component:Page1Component},
    {path:"page2", component:Page2Component},
    {path:"posts", component:PostComponent},
    {path:"todos", component:TodoComponent},
    {path:"users", component:UserComponent}
];
