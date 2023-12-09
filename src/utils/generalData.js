const birthDate = new Date('01/05/2002');
const todayDate = new Date();

export const totalYears = Math.floor(
  (todayDate.getTime() - birthDate.getTime()) / (1000 * 60 * 60 * 24 * 365)
);
