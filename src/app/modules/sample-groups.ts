export interface PeriodicGroup {
    name: string;
    id: string;
    children?: PeriodicGroup[];
}

export const SAMPLE_GROUPS: PeriodicGroup[] = [
    {
        name: 'Dev',
        id: '1'
    }, {
        name: 'Neonesia',
        id: '2',
        children: [
            {
                name: 'manage',
                id: '22'
            }
        ]
    }
];