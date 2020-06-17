export interface PeriodicGroup {
    name: string;
    id: string;
    children?: PeriodicGroup[];
}

export const SAMPLE_GROUPS: PeriodicGroup[] = [
    {
        name: 'Dev',
        id: '1',
        children: [
            {
                name: 'keppo',
                id: '11'
            }, {
                name: 'dev2',
                id: '12'
            }
        ]
    }, {
        name: 'Neonesia',
        id: '2',
        children: [
            {
                name: 'manage',
                id: '21',
                children: [
                    {
                        name: 'admin1',
                        id: '221'
                    }
                ]
            }
        ]
    }
];