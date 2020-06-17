export interface PeriodicRole {
    name: string;
    description: string;
    id: string;
}

export const SAMPLE_ROLES: PeriodicRole[] = [
    { name: 'Developer', description: '$(role_Developer)', id: '1' },
    { name: 'Master', description: '$(role_Developer)', id: '2' },
    { name: 'Create-Groups', description: '$(role_Developer)', id: '3' },
    { name: 'Create-Users', description: '$(role_Developer)', id: '4' },
    { name: 'Create-Role', description: '$(role_Developer)', id: '5' },
];