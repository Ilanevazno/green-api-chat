export interface IPaginationRequest {
  page?: number;
}

export interface IPagination {
  count: number;
  next: string;
  previous: string;
}
