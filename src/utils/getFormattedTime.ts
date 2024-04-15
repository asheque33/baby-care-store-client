export const getFormattedTime = (milliseconds: number) => {
  let total_seconds = Math.floor(milliseconds / 1000);
  let total_minutes = Math.floor(total_seconds / 60);
  let total_hours = Math.floor(total_minutes / 60);
  let days = Math.floor(total_hours / 24);
  let seconds = (total_seconds % 60).toString().padStart(2, "0");
  let minutes = (total_minutes % 60).toString().padStart(2, "0");
  let hours = (total_hours % 24).toString().padStart(2, "0");

  return `${days}:${hours}:${minutes}:${seconds}`;
};
