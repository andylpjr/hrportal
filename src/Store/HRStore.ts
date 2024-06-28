import { observable, makeObservable } from "mobx";
import { IHRStore } from "../Interfaces/IHRStore";
import { IOverview, IOverviewPayroll } from "../Interfaces/IOverview";
import {
  members,
  overviewPayrolls,
  overviews,
  schedules,
  tasks,
} from "../Mock/Mock";
import { IMember } from "../Interfaces/IMember";
import { ITask } from "../Interfaces/ITask";
import { ISchedule } from "../Interfaces/ISchedule";

export class HRStore implements IHRStore {
  @observable overviews: IOverview[];
  @observable members: IMember[];
  @observable tasks: ITask[];
  @observable schedules: ISchedule[];
  @observable overviewPayrolls: IOverviewPayroll[];

  constructor() {
    makeObservable(this);

    this.overviews = overviews;
    this.members = members;
    this.tasks = tasks;
    this.schedules = schedules;
    this.overviewPayrolls = overviewPayrolls;
  }
}
