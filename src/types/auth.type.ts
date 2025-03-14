export type TAuthState = {
  user: { email: string; role: string } | null;
  token: string | null;
};
