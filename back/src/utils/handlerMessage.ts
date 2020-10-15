import { Response } from "express";

export function handleFailedMessage(res: Response, message: string) {
  return res.status(401).json({
    message,
    error: message || "Email and password don't match",
  });
}

export function handleMessage(res: Response, message: string) {
  return res.status(400).json({
    ok: false,
    message,
  });
}

export function handleServerError(res: Response, message: string, error: any) {
  return res.status(500).json({
    ok: false,
    message,
    error,
  });
}
