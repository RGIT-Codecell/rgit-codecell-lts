export interface FounderCardProps {
    image: string;
    name: string;
    college: string;
    description: string;
    reverse?: boolean;
}

const founders: FounderCardProps[] = [
    {
        image: "/founders/saad-ghojaria.jpeg", // Replace with actual image URL
        name: "Saad Ghojaria",
        college: "Northeastern University - MSIS Program",
        description: "RGIT CodeCell started with a mindset of expanding knowledge. I believe one can be successful by gaining knowledge as much as they can, but it won't make justice until it has been passed on. RGIT CodeCell was started with the same vision, and I think this is what success will look like. It's great to see the chain of passing on knowledge is still going on after us. CodeCell roots were started with too much effort of people who were working behind the scenes too. My wishes will always be with the current and future teams, and RGIT CodeCell still has our hearts. We are always there whenever CodeCell will need it.",
        reverse: false, // Image on left
    },
    {
        image: "/founders/aayush-singh.jpeg", // Replace with actual image URL
        name: "Aayush Singh",
        college: "North Carolina State University - CS Program",
        description: "RGIT CodeCell was established as a tool to enhance collaboration between like-minded students. The motivation was to create a platform to share and learn with coders irrespective of their class, division, or year. It started with Coding Pandas and transformed into a community, which collectively hosted the first-ever hackathon. Extremely proud of how we have developed and wish it continues!",
        reverse: true, // Image on right
    },
    {
        image: "/founders/nitish-talekar.jpeg", // Replace with actual image URL
        name: "Nitish Talekar",
        college: "North Carolina State University - CS Program",
        description: "As someone who has seen CodeCell grow from an idea to a plan and eventually the community it is now, I am extremely grateful for all the factors that brought us here. We started CodeCell in an attempt to rally all like-minded coding enthusiasts so that they could be part of something greater than themselves. This community is a stepping stone for everyone who wants to explore technology outside the curriculum. Our main objectives were to create an environment of interaction between people with a love for coding and give everyone the chance to participate in coding challenges, project drives, and other events that help them experience new and coming technologies. I am truly proud to see the level of impact this community has had in such a short span of time.",
        reverse: false, // Image on left
    },
    {
        image: "/founders/sagar-ambilpure.jpg", // Replace with actual image URL
        name: "Sagar Surendra Ambilpure",
        college: "University College Dublin - MS in Information Systems",
        description: "RGIT CodeCell was established as a space for innovation and collaboration, and I take great pride in being part of this journey. The idea was to create a platform where students could come together, share knowledge, and push each other to grow as coders and technologists. From organizing workshops to hackathons, CodeCell was always about building a community that transcends classrooms. I believe this legacy of learning and growing together will continue to shape the future of RGIT CodeCell. My best wishes are with the current and future teams, and I’ll always be there whenever CodeCell needs support.",
        reverse: true, // Image on right
    },
];

export default founders;
