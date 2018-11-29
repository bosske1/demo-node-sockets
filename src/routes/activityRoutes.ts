import {Request, Response} from "express";
import {ActivityController} from "../controllers/activityController";

export class Routes {
    public activityController: ActivityController = new ActivityController();

    public routes(app): void {
        app.route('/')
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'GET request successfulll!!!!'
                })
            });

        app.route('/activity')
            .get(this.activityController.getActivities.bind(this.activityController))
            .post(this.activityController.addNewActivity.bind(this.activityController));

        app.route('/activity/:activityId')
            .get(this.activityController.getActivity.bind(this.activityController))
            .put(this.activityController.updateActivity.bind(this.activityController))
            .delete(this.activityController.deleteActivity.bind(this.activityController));
    }
}