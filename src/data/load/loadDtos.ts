export interface SuccessMessageDto {
  success: boolean;
  message: string;
}

export interface InsertionDto<TInserted> {
  success: boolean;
  message: string;
  inserted?: TInserted;
}
