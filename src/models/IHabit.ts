type THabitStatus = "completed" | "not_completed" | "canceled";

export interface IHabit {
  id: number;
  name: string;
  dateStart: Date;
  dateEnd: Date;
  status: THabitStatus;
}
