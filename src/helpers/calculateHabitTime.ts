import { IHabit } from "../models/IHabit";

export const calculateProgressToEnd = (habit: IHabit): number => {
  const now = new Date();

  if (habit.dateStart > now) {
    return 0;
  }

  const totalDuration = habit.dateEnd.getTime() - habit.dateStart.getTime();
  const timeElapsed = now.getTime() - habit.dateStart.getTime();

  if (timeElapsed >= totalDuration) {
    return 100;
  }

  const elapsedPercentage = (timeElapsed / totalDuration) * 100;
  const remainingPercentage = Math.round(100 - elapsedPercentage);

  return remainingPercentage;
};

export const calculateFullDaysPassed = (habit: IHabit): number => {
  const now = new Date();

  if (habit.dateStart > now) {
    return 0;
  }
  const timeElapsed = now.getTime() - habit.dateStart.getTime();

  const fullDaysPassed = Math.floor(timeElapsed / (1000 * 60 * 60 * 24));

  return fullDaysPassed;
};
