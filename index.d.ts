import { User } from './model/users.model';

declare module 'restify' {
    export interface Request {
        authenticated: User
    }
}