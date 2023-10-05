import axiosInstance from '@/core/configs/axios'
import { RequestPagination } from '@/core/types/api.service'
import { TransactionListResponse } from './transactions.types'

const URL_CONTROLLER = '/api/transaction'

export default {
  async list(params?: RequestPagination) {
    const result = await axiosInstance.get<TransactionListResponse>(
      URL_CONTROLLER,
      { params }
    )

    return result.data
  },
}
