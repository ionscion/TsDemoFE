export interface User {
  id: number;
  first_name: string;
  last_name: string;
  middle_name: string | null;
  created_at: string;  // or `Date` if you parse it
  updated_at: string;
}