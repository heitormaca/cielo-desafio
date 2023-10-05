import { Table } from '@/components/_commons'
import { TableColumn } from '@/components/_commons/Table/Table.types'
import { useTransactionList } from '@/core/domains/transactions/transactions.hooks'
import { Transaction } from '@/core/domains/transactions/transactions.types'
import useQueryParams from '@/core/hooks/useQueryParams'
import { RevenueListProps } from './RevenueList.types'

const RevenueList: React.FC<RevenueListProps> = ({ filters }) => {
  const [params, setParams] = useQueryParams(filters)

  const { data, isLoading } = useTransactionList({ ...params, pageSize: 25 })

  const columns: TableColumn<Transaction>[] = [
    {
      key: 'merchantId',
      title: 'Comerciante',
    },
    {
      key: 'status',
      title: 'Status',
    },
    {
      key: 'channel',
      title: 'Canal',
    },
    {
      key: 'paymentType',
      title: 'Tipo de pagamento',
    },
    {
      key: 'terminal',
      title: 'Terminal',
    },
  ]

  return (
    <Table<Transaction>
      width={700}
      loading={isLoading}
      data={data?.items || []}
      columns={columns}
      pagination={{
        total: data?.pagination.numPages || 1,
        value: data?.pagination.pageNumber || 1,
        onChange: (page) => setParams({ pageNumber: page }),
      }}
    />
  )
}
export default RevenueList
