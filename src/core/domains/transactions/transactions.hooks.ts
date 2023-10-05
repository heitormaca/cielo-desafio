import { AxiosResponseError, RequestPagination } from '@/core/types/api.service'
import { useQuery } from 'react-query'
import { TransactionListResponse } from './transactions.types'
import transactionsService from './transactions.service'
import showNotificationError from '@/core/utils/notification/showNotificationError'

export function useTransactionList(params?: RequestPagination) {
  return useQuery<TransactionListResponse, AxiosResponseError>(
    ['transactions', params],
    () => transactionsService.list(params),
    {
      onError(error) {
        showNotificationError(error, 'Listagem de transações')
      },
    }
  )
}
