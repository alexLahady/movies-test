declare namespace Express {
  interface Request {
    auth?: {
      userId: number;
      userName: string;
    };
  }
}
