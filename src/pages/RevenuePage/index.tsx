import RevenueFilter from '@/components/Revenue/RevenueFilter'
import RevenueList from '@/components/Revenue/RevenueList'
import { RequestPagination } from '@/core/types/api.service'
import { Stack } from '@mantine/core'
import { useForm } from '@mantine/form'

const RevenuePage: React.FC = () => {
  const form = useForm<RequestPagination>({
    initialValues: {},
  })

  return (
    <Stack p="xl">
      <RevenueFilter form={form} />
      <RevenueList filters={form.values} />
    </Stack>
  )
}
export default RevenuePage
