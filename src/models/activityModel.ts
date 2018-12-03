import {UserModel} from "./userModel";

export class ActivityModel {
    public id: number;
    public name: string;
    public user: UserModel;
    public createdDate: Date;
    public viewed: boolean;
}