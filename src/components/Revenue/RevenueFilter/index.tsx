import { DatePickerInput } from '@mantine/dates'
import { RevenueFiltersProps } from './RevenueFilter.types'
import { Group } from '@mantine/core'
import { IconCalendarEvent } from '@tabler/icons-react'

const RevenueFilter: React.FC<RevenueFiltersProps> = ({ form }) => {
  return (
    <Group spacing="xl" position="left">
      <DatePickerInput
        aria-label="Data inicial"
        placeholder="Data inicial"
        icon={<IconCalendarEvent />}
        clearable
        locale="pt-br"
        {...form.getInputProps('initialDate')}
      />

      <DatePickerInput
        aria-label="Data final"
        placeholder="Data final"
        icon={<IconCalendarEvent />}
        clearable
        {...form.getInputProps('finalDate')}
      />
    </Group>
  )
}
export default RevenueFilter
