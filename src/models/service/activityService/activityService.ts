import {ActivityModel} from "../../activityModel";

export class ActivityService {
    private activities = [
        {
            id: 1,
            name: 'Activity1',
            createdDate: new Date(),
            user: {
                id: 1,
                username: 'user1',
                avatar: 'https://somepic.somewhere'
            },
            seen: false
        },
        {
            id: 2,
            name: 'Activity2',
            createdDate: new Date(),
            user: {
                id: 2,
                username: 'user2',
                avatar: 'https://somepic.somewhere'
            },
            seen: true
        },
        {
            id: 3,
            name: 'Activity3',
            createdDate: new Date(),
            user: {
                id: 1,
                username: 'user1',
                avatar: 'https://somepic.somewhere'
            },
            seen: true
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
}