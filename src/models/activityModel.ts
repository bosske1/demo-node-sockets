import {UserModel} from "./userModel";

export enum ActivityType {
    UPLOAD_PICTURE = 'uploadPicture',
    UPLOAD_VIDEO   = 'uploadVideo',
    UPLOAD_PICTURE_IN_THE_STORE = 'uploadPictureInTheStore',
    UPLOAD_VIDEO_IN_THE_STORE = 'uploadVideoInTheStore',
    UPLOAD_FILE_IN_THE_STORE = 'uploadFileInTheStore',
    WRITE_NEW_WALL_POST = 'writeNewWallPost',
    STORY = 'story'
}

export class ActivityModel {
    public id: number;
    public name: string;
    public type: ActivityType;
    public user: UserModel;
    public params: { route?: string };
    public createdDate: Date;
    public viewed: boolean;
}