export interface TeamPerson {
    name: string;
    image: string;
    position: string;
}

export interface Team {
    year: string;
    members: TeamPerson[];
}

export const TEAM_YEARS = [
    "2020-2021",
    "2021-2022",
    "2022-2023",
    "2023-2024",
    "2024-2025",
]

export const FACULTY: TeamPerson[] = [
    {
        name: "Prof. Sunil Khachane",
        image: "https://rgitcess.netlify.app/static/media/1.85290cd6157655290710.jpeg",
        position: "HOD of Computer Engineering Department",
    },
    {
        name: "Prof. Dilip Dalgade",
        image: "https://res.cloudinary.com/dbsohsdkz/image/upload/v1750068735/dilipSir_ghp6tp.jpg",
        position: "Convener of CESS & CodeCell",
    },
]
