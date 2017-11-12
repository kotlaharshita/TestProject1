import { userItem } from '../Model/userItem';


export interface shoppingCart {
    Id: number;
    userId: number;
    userItemList: userItem[];
    
}