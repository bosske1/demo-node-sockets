import {ActivityModel, ActivityType} from "../../activityModel";

export class ActivityService {
    private activities: ActivityModel[] = [
        {
            id: 1,
            name: 'Activity1',
            type: ActivityType.UPLOAD_PICTURE,
            createdDate: new Date(),
            params: {
                route: 'test1'
            },
            user: {
                id: 1,
                userName: 'user1',
                profileImgUrl: 'https://placeimg.com/100/100/people'
            },
            viewed: false
        },
        {
            id: 2,
            name: 'Activity2',
            type: ActivityType.UPLOAD_PICTURE,
            createdDate: new Date(),
            params: {
                route: 'test2'
            },
            user: {
                id: 2,
                userName: 'user2',
                profileImgUrl: 'https://placeimg.com/100/100/people'
            },
            viewed: true
        },
        {
            id: 3,
            name: 'Activity3',
            type: ActivityType.UPLOAD_VIDEO,
            createdDate: new Date(),
            params: {
                route: 'test3'
            },
            user: {
                id: 1,
                userName: 'user1',
                profileImgUrl: 'https://placeimg.com/100/100/people'
            },
            viewed: true
        }
    ];

    public addActivity(activity: ActivityModel): ActivityModel {
        this.activities.push(activity);
        return activity;
    }

    public getActivities(): ActivityModel[] {
        return this.activities;
    }

    public getActivity(activityId: number): ActivityModel|null {
        return this.activities.find(function(activity: ActivityModel) {
            return activity.id === activityId;
        });
    }

    public getRandomActivity(): ActivityModel {
        return this.activities[Math.floor(Math.random() * this.activities.length)];
    }
}