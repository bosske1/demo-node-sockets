import {Request, Response} from 'express';
import {ActivityModel} from "../models/activityModel";
import {ActivityService} from "../models/service/activityService/activityService";

export class ActivityController{
    public activityService: ActivityService = new ActivityService();

    public addNewActivity (req: Request, res: Response) {
        const newActivity = <ActivityModel>req.body;
        this.activityService.addActivity(newActivity);
        res.json(newActivity);
    }

    public getActivities (req: Request, res: Response) {
        res.json(this.activityService.getActivities());
    }

    public getActivity (req: Request, res: Response) {
        res.json(this.activityService.getActivity(req.params.activityId));
    }

    public updateActivity (req: Request, res: Response) {

    }

    public deleteActivity (req: Request, res: Response) {

    }

}