import { AxiosError } from 'axios'

export interface PaginationData {
  totalElements: number
  numPages: number
  pageSize: number
  pageNumber: number
  lastPage: boolean
  firstPage: boolean
}

export interface Summary {
  totalQuantity: number
  totalAmount: number
  totalNetAmount: number
  totalAverageAmount: number
  initialData: string
  finalDate: string
}

export interface ResponsePagination<T> {
  summary: Summary
  pagination: PaginationData
  items: T[]
}

export interface ResponseError {
  name: string
  description: string
  fiedsErrors: {
    key: string
    value: string[]
  }[]
}

export type AxiosResponseError = AxiosError<ResponseError>

export interface RequestPagination {
  pageNumber?: number
  pageSize?: number
  initialDate?: string
  finalDate?: string
}
