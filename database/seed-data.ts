
interface SeedData {
    entries: SeedEntry[]
}

interface SeedEntry {
    description: string,
    status: string,
    createdAt: number
}

export const seedData: SeedData = {
    entries: [
        {
            description: 'Pending: This is a description 1',
            status: 'pending',
            createdAt: Date.now(),
         },
         {
            description: 'In-Progress: This is a description 2',
            status: 'in-progress',
            createdAt: Date.now() - 1000000,
         },
         {
            description: 'Finished: This is a description 3',
            status: 'finished',
            createdAt: Date.now() - 100000,
         }
    ]
}