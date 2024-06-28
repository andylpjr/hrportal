export interface ISchedule {
  time: string;
  mon20?: IScheduleActivity;
  tue21?: IScheduleActivity;
  wed22?: IScheduleActivity;
  thu23?: IScheduleActivity;
  fri24?: IScheduleActivity;
}

export interface IScheduleActivity {
  id: string;
  label: string;
  level: number;
}
