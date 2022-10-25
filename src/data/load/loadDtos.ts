export interface SuccessMessageDto {
  success: boolean;
  message: string;
}

export interface InsertionDto {
  success: boolean;
  message: string;
  inserted?: object;
}
