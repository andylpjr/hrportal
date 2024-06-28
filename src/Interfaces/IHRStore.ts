import { IMember } from "./IMember";
import { IOverview, IOverviewPayroll } from "./IOverview";
import { ISchedule } from "./ISchedule";
import { ITask } from "./ITask";

export interface IHRStore {
  overviews: IOverview[];
  members: IMember[];
  tasks: ITask[];
  schedules: ISchedule[];
  overviewPayrolls: IOverviewPayroll[];
}
