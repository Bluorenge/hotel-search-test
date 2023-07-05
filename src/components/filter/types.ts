import { FilterData } from '../../store/HotelsStoreProvider';

export type FilterProps<T extends keyof FilterData> = {
    value: FilterData[T];
    onFilterChange: (name: T, value: FilterData[T]) => void;
};
