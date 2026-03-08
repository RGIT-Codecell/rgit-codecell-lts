import { report } from "process";

interface Event {
    id: number;
    title: string;
    paragraph: string;
    img: string;
    year: number;
    report?: string | null;
}

export const eventsData = [
    {
        id: 1,
        title: "Codertine 2020",
        paragraph: "RGIT Codecell along with CESS conducted an online inter-college coding competition - CODERTINE on Codechef, where students were provided with problem statements that will revolve around the concepts of Competitive Programming on 31st of October 2020. The event was conducted on CodeChef for a duration of 1.5hrs.  ",
        img: "https://res.cloudinary.com/devdemo/image/upload/v1631820570/codecell%20website%20gallery%20images/codertine_i3og4p.jpg",
        year: 2020
    },
    {
        id: 2,
        title: "Career Counselling - Webinar",
        paragraph: "RGIT Codecell in collaboration with CESS successfully organized a Career Counselling program with the leading Education Consultants of the Learning Edge. There were 2 professional speakers from learning edge, Mr.Pankaj Mehta and Mr.Manoj Kansara. The students gained knowledge about the Career opportunities after studies and All the doubts regarding the further studies were cleared by excellent consultants of Learning Edge. The session was an Hour long and was divided into 2 sub-sessions, the first 20-30 min was given to Admission, Exams, Visa process and the remaining was the QnA Session where any individual can get their doubts cleared. ",
        img: "https://res.cloudinary.com/devdemo/image/upload/v1631820570/codecell%20website%20gallery%20images/careercounselling_xt8rf3.jpg",
        year: 2020
    },
    {
        id: 3,
        title: "Google Cloud Platform(GCP) - Webinar",
        paragraph: "CodeCell in collaboration with Cess organised a webinar on Google Cloud Platform. This webinar helped students understand how to use and deploy infrastructure components such as networks,virtual machines, containers and application services on Google Cloud. The webinar was conducted on 4 October through google meet and was also streamed on youtube by code for cause. There were more than 80 students that participated in this session. The speakers for this were Mr. Anuj Garg and Mr. Akhil Joshi . Anuj is a Google Summer of Code Mentor under the JBoss community of Red Hat Middleware for Servers and IoT monitoring. They elaborated on many other components of GCP like setting and using Virtual Machines.  ",
        img: "https://res.cloudinary.com/devdemo/image/upload/v1631820570/codecell%20website%20gallery%20images/GCP_zupvux.jpg",
        year: 2020
    },
    {
        id: 4,
        title: "Introduction to Deep Learning - Reach & Teach",
        paragraph: "A workshop on Introduction to Deep learning, under the Reach and Teach program. It helped all the students to get familiar with what exactly deep learning is all about , covering from basics to the concepts required to start deep learning. The workshop took place on 29th September, 2020. From the importance of deep learning to the reason behind it to gaining importance in today's world , everything was covered in this session. Various problems were taken and explained in detail by them covering the logic and implementation.  ",
        img: "https://res.cloudinary.com/devdemo/image/upload/v1631820570/codecell%20website%20gallery%20images/deeplearning_jsnjrw.jpg",
        year: 2020
    },
    {
        id: 5,
        title: "Hackathon: RECURSION 2.0",
        paragraph: "Recursion 2020 marked the first ever hackathon to be held in Rajiv Gandhi Institute of Technology. It was a 30 hour Hackathon held on the 13th and 14th of March, 2020 .The domains included- Web development, App development, Machine Learning, IoT and Blockchain. More than 80 teams registered for the event out of which 50 teams were shortlisted to participate. The judges for the event were Ms.Priyanka Pacheria, Mr. Harsh Vitra, Dr. Gautam Borkar and Dr. Dhananjay Dakhane. The hackathon saw many participants enthusiastically finding solutions to the problem statements presented to them. The event was a great learning experience for everyone. ",
        img: "https://res.cloudinary.com/devdemo/image/upload/v1631819700/codecell%20website%20gallery%20images/Hackathon-8-min_un6fql.jpg",
        year: 2020
    },
    {
        id: 6,
        title: "Python Workshop - Reach & Teach",
        paragraph: "This workshop covered the basics of python followed by topics such as data types, data sets, lists, tuples, and dictionaries. Participants got to learn about automation, web scraping and also got to test using python. The workshop helped the partipants get a good understanding of the topic.  ",
        img: "https://res.cloudinary.com/devdemo/image/upload/v1631819690/codecell%20website%20gallery%20images/Python_Workshop-7-min_skcbgq.jpg",
        year: 2020
    },
    {
        id: 7,
        title: "Django Workshop - Reach & Teach",
        paragraph: "The workshop emphasises on Django's utility in the real world. After the brief introduction about its origin, they helped the students create a virtual environment and proceeded to show various implementations of it. The workshop helped the students understand the reason behind Django being preferred for making a web application.",
        img: "https://res.cloudinary.com/devdemo/image/upload/v1631819690/codecell%20website%20gallery%20images/Python_Workshop-3-min_porlno.jpg",
        year: 2020
    },
    {
        id: 8,
        title: "Inauguration Rgit-Codecell",
        paragraph: "The inauguration of RGIT Codecell and CSI Chapter was done by our Principal Dr.Sanjay Bokade and Head of Department Dr.Satish Ket Sir on 12th February 2020. The Computer Engineering and IT department started the CSI Student Chapter with a total of 100 students. RGIT CodeCell is an initiative by the final year students of the Computer Engineering department (2019-20), a platform where students share their love for coding.",
        img: "https://res.cloudinary.com/devdemo/image/upload/v1631819680/codecell%20website%20gallery%20images/CodeCell_inauguration-6-min_bw3ila.jpg",
        year: 2020
    },
    {
        id: 9,
        title: "Applied Statistics for Data Science - Webinar",
        paragraph: "TThis webinar, presented by CESS, focused on essential techniques and concepts of applied statistics for data science. The speaker was Parth Sharma. Participants learned about the basics of data analysis, frequencies and summary statistics, implementing inferential statistics, using problem-based analysis, and interpreting statistical results.",
        img: "https://res.cloudinary.com/dbsohsdkz/image/upload/v1753437458/AppliedStatistic_volmhn.jpg",
        year: 2021
    },
    {
        id: 10,
        title: "Webinar on Cyber Security",
        paragraph: "Presented by CESS, Department of Computer Engineering, RGIT Mumbai, this webinar featured Saikumar M from VMware. It aimed to provide a deeper understanding of cyber security concepts and real-world practices.",
        img: "https://res.cloudinary.com/dbsohsdkz/image/upload/v1753437457/CyberSecurity_bxxnow.jpg",
        year: 2021
    },
    {
        id: 11,
        title: "Awaken the Entrepreneur in You!",
        paragraph: "An entrepreneurship webinar by RGIT CESS with alumnus Niket Sarvaiya, Co-founder of Picostone. It covered startup basics, dos and don'ts, fundraising, online marketing, product management, and featured a Q&A session.",
        img: "https://res.cloudinary.com/dbsohsdkz/image/upload/v1753437456/AwakenEntrepreneur_dpcs4e.jpg",
        year: 2021
    },
    {
        id: 12,
        title: "Free Webinar on Machine Learning",
        paragraph: "Organized by RGIT's IT and Computer Engineering departments in association with ATS Learning Solutions, this free webinar on Machine Learning highlighted Microsoft certification and internship opportunities.",
        img: "https://res.cloudinary.com/dbsohsdkz/image/upload/v1753437455/MachineLearning_ilcpzt.jpg",
        year: 2021
    },
    {
        id: 13,
        title: "Clear All Your Queries With Us! (Study Abroad/GRE)",
        paragraph: "CESS collaborated with Endeavor to guide students aiming for admissions in prestigious universities. The session clarified doubts regarding entrance exams and university applications.",
        img: "https://res.cloudinary.com/dbsohsdkz/image/upload/v1753437454/AbroadStudyGRE_pxxfiz.jpg",
        year: 2021
    },
    {
        id: 14,
        title: "Codertine 2.0",
        paragraph: "Codertine 2.0, co-organized by RGIT Codecell and CESS, was a coding competition with cash prizes, vouchers, and certificates. It encouraged coding culture among students.",
        img: "https://res.cloudinary.com/dbsohsdkz/image/upload/v1753437454/Codertine_vbecnr.jpg",
        year: 2021
    },
    {
        id: 15,
        title: "Google Cloud Career Readiness Program – RGIT",
        paragraph: "This two-phase program was for third-year Computer Engineering students. Organized by CESS, Codecell, and CSI in collaboration with Google Cloud, it offered a platform for skill-building and real-world learning.",
        img: "https://res.cloudinary.com/dbsohsdkz/image/upload/v1753437453/GoogleCloud_czwoaj.jpg",
        year: 2021
    },
    {
        id: 16,
        title: "DSA Webinar: Road Map to Dream Company",
        paragraph: "A DSA-focused webinar by RGIT CESS and CODECELL featuring Kirti Gera from GeeksforGeeks. It provided a placement roadmap, dos and don’ts, and a doubt-solving session.",
        img: "https://res.cloudinary.com/dbsohsdkz/image/upload/v1753437451/DSAWebinar_ngbymk.jpg",
        year: 2021
    },
    {
        id: 17,
        title: "Webinar on Foreign Exchange",
        paragraph: "Organized by CESS and CSI RGIT, the webinar featured experts from OTI and Xflowmarkets. It explained foreign exchange concepts and trading strategies with real incentives for participants.",
        img: "https://res.cloudinary.com/dbsohsdkz/image/upload/v1753438748/ForeignExchange_g1ow17.jpg",
        year: 2022
    },
    {
        id: 18,
        title: "Introduction to Flutter",
        paragraph: "A virtual workshop by RGIT Codecell introducing students to Flutter, Google's UI toolkit for cross-platform mobile development. Over 100 students participated on Zoom.",
        img: "https://res.cloudinary.com/dbsohsdkz/image/upload/v1753438746/flutter_hbqfo3.jpg",
        year: 2022
    },
    {
        id: 19,
        title: "Recursion 3.0 – Offline Hackathon",
        paragraph: "An offline hackathon by RGIT Codecell that welcomed 2–4 member teams to work on domains like Web/App Development, IoT, AI/ML, etc., with prizes worth ₹90,000.",
        img: "https://res.cloudinary.com/dbsohsdkz/image/upload/v1753438746/Recursion_f0io6o.jpg",
        year: 2022
    },
    {
        id: 20,
        title: "Seminar on Data Analysis",
        paragraph: "Cess and Computer Engineering Alumni Committee is happy to announce an expert talk on Data Analytics by Mr. Rakesh Raut. Mr. Rakesh Raut is an alumni and is currently the Practice Delivery Lead in the South East Asia Region at Wipro.",
        img: "https://res.cloudinary.com/dbsohsdkz/image/upload/v1753439526/DataAnalytics_isyn4f.jpg",
        year: 2022
    },
    {
        id: 21,
        title: "Abroad Studies Seminar",
        paragraph: "Successfully conducted our first seminar based on 'Abroad Studies' dated 12th August 2022.",
        img: "https://res.cloudinary.com/dbsohsdkz/image/upload/v1753439526/AbroadStudies_eaw5gr.png",
        year: 2022
    },
    {
        id: 22,
        title: "Motivational Session on Life After Engineering",
        paragraph: "Expert talk on Life after Engineering, specially curated for the students of RGIT. Expert: Mrs. Deepali Shinde — a software engineer with 4 years of experience looking for impactful and challenging projects to grow professionally and add value to businesses. Get expert guidance on MTech in India, Masters in foreign country, Package breakdown, Techno-Management opportunities, Software Engineering jobs, Content Creation World, Key things to make a difference, Skill boats, and a lot more interesting things.",
        img: "https://res.cloudinary.com/dbsohsdkz/image/upload/v1753439523/LifeAfterEngineering_ongnll.jpg",
        year: 2022
    },
    {
        id: 23,
        title: "Workshop on Cybersecurity",
        paragraph: "Successfully conducted a workshop on 'Cyber Security' dated 28th September, 2022. Sincere thanks to @mrwebsecure_india Classes for conducting this informative workshop. It was a great, interactive session with around 200 participants.",
        img: "https://res.cloudinary.com/dbsohsdkz/image/upload/v1753439523/CyberSecurity22_ythh7k.png",
        year: 2022
    },
    {
        id: 24,
        title: "FE Orientation Program",
        paragraph: "'Induction is the process of taking things within our experience to be a representative of the world outside our experience.' CESS & CODECELL successfully conducted an FE Induction Program to welcome our newly members of the Computer Engineering Department! We warm-heartedly welcome you all!",
        img: "https://res.cloudinary.com/dbsohsdkz/image/upload/v1753439521/FeOrientation_mygqzq.jpg",
        year: 2022
    },
    {
        id: 25,
        title: "Overseas Education Seminar",
        paragraph: "We bring you a seminar on Abroad Studies with Global Opportunities - Leading Overseas Education Consultants. About Speaker: Gunjan Arora. She has completed her MBA in HR & Finance, she has worked in the Education Sector for the past 8 years. Prior to entering the education sector, she worked for KPMG. She helps in guiding, counselling, and placing hundreds of students at the best universities around the world. Countries of specialization include UK, Canada, Europe, USA & Australia.",
        img: "https://res.cloudinary.com/dbsohsdkz/image/upload/v1753439674/AbroadStudies23_wzzylb.png",
        year: 2023
    },
    {
        id: 26,
        title: "Study Abroad Seminar",
        paragraph: "Ready to take your education to the next level? Join us at the Study Abroad Seminar on 16th February 2023 at Rajiv Gandhi Institute of Technology and discover the world of global opportunities! Learn about the best study abroad programs and take the first step towards realizing your dreams. Don't miss out on this once-in-a-lifetime experience.",
        img: "https://res.cloudinary.com/dbsohsdkz/image/upload/v1753439673/StudyAbroad23_wrq9hq.png",
        year: 2023
    },
    {
        id: 27,
        title:"Recursion 4.0 Hackathon",
        paragraph: "We are excited to announce that we are back with RECURSION 4.0. Yes! You heard it right! RECURSION 4.0 is back. What is RECURSION 4.0? Recursion is a Hackathon organised by the Computer Department of Rajiv Gandhi Institute of Technology (affiliated with Mumbai University). In Recursion we see more than 500 teams registering from colleges all over India and only the best ones are selected that participate in our 24-hour hackathon. Team of 2–4 members. Domains for RECURSION 4.0 are as follows: BLOCKCHAIN, WEB/APP DEVELOPMENT, AI/ML. PRIZES: 525K cash + 10K worth vouchers, 15K cash + 5K worth vouchers, 5K worth vouchers.",
        img: "https://res.cloudinary.com/dbsohsdkz/image/upload/v1753439672/Recursion23_tp9cuk.png",
        year: 2023
    },
    {
        id: 28,
        title: "Valedictory",
        paragraph: "The Valedictory event was held on 31st July 2023 at 2 PM onwards in the Seminar Hall. It served as a formal conclusion to the previous academic year's student activities and achievements.",
        img: "https://res.cloudinary.com/dbsohsdkz/image/upload/v1753440837/Valedictory_f5mknb.jpg",
        year: 2023
    },
    {
        id: 29,
        title: "NASA AI Seminar",
        paragraph: "Organized on 9th August 2023 at the Seminar Hall, the NASA AI Seminar offered insights into artificial intelligence, space-tech, and real-world applications, fostering curiosity among tech enthusiasts.",
        img: "https://res.cloudinary.com/dbsohsdkz/image/upload/v1753440836/NasaAI_vwnzvi.jpg",
        year: 2023
    },
    {
        id: 30,
        title: "Independence Day Floor Decoration",
        paragraph: "On 14th August 2023 from 9:00 AM onwards, students gathered on the 3rd floor to creatively celebrate Independence Day through themed floor decorations symbolizing patriotism and unity.",
        img: "https://res.cloudinary.com/dbsohsdkz/image/upload/v1753440836/IndependenceDay_mh0vwc.jpg",
        year: 2023
    },
    {
        id: 31,
        title: "C Programming Bootcamp R&T",
        paragraph: "The C programming bootcamp organized by the R&T cell took place on 11th August 2023 in the classroom. It aimed at providing hands-on coding experience and improving C language fundamentals for students.",
        img: "https://res.cloudinary.com/dbsohsdkz/image/upload/v1753440836/C_Bootcamp_ndz1k4.jpg",
        year: 2023
    },
    {
        id: 32,
        title: "Python Bootcamp R&T",
        paragraph: "Held on 31st August 2023 from 10:00 AM onwards in the Seminar Hall, the Python bootcamp helped students gain essential programming skills in Python, focusing on practical applications and logic building.",
        img: "https://res.cloudinary.com/dbsohsdkz/image/upload/v1753440836/PythonBootcamp_gsacf1.jpg",
        year: 2023
    },
    {
        id: 33,
        title: "Teachers Day Celebration",
        paragraph: "On 5th September 2023, the Teachers Day celebration took place at B-34 classroom starting 12:30 PM. Students honored their faculty members with thoughtful events, appreciation, and joy.",
        img: "https://res.cloudinary.com/dbsohsdkz/image/upload/v1753440835/Teachersday_afx4mo.jpg",
        year: 2023
    },
    {
        id: 34,
        title: "Data Science Seminar",
        paragraph: "Conducted on 12th September 2023 at 8:30 AM in the Seminar Hall, the Data Science Seminar delved into modern trends, tools, and career insights in the field of data science for aspiring analysts.",
        img: "https://res.cloudinary.com/dbsohsdkz/image/upload/v1753440835/DataScience_rqlbqg.jpg",
        year: 2023
    },
    {
        id: 35,
        title: "Career Guidance Seminar",
        paragraph: "Held on 14th September 2023 at 9:00 AM in the Seminar Hall, this seminar guided students on academic and professional pathways post-graduation, including career choices and preparation tips.",
        img: "https://res.cloudinary.com/dbsohsdkz/image/upload/v1753440834/CareerGuidance_tgdmgg.jpg",
        year: 2023
    },
    {
        id: 36,
        title: "LinkedIn & Resume Mastery",
        paragraph: "This session took place on 4th October 2023 at 1:30 PM in the classroom, helping students build strong LinkedIn profiles and write professional resumes to boost job readiness and personal branding.",
        img: "https://res.cloudinary.com/dbsohsdkz/image/upload/v1753440837/Linkedin_Resume_b5uvyb.png",
        year: 2023
    },
    {
        id: 37,
        title: "Unexplored Secret of Ethical Hacking",
        paragraph: "On 12th October 2023 from 1:00 to 3:00 PM in the Seminar Hall, this seminar explored ethical hacking fundamentals, real-world use cases, and cybersecurity awareness, empowering students with digital defense knowledge.",
        img: "https://res.cloudinary.com/dbsohsdkz/image/upload/v1753440836/EthicalHacking_l86tan.png",
        year: 2023
    },
    {
        id: 38,
        title: "Genius Creation Study Abroad Webinar",
        paragraph: "Organized online on 14th October 2023 from 11:00 AM to 1:00 PM, this webinar guided students on international education opportunities, processes, and top destinations for pursuing higher studies abroad.",
        img: "https://res.cloudinary.com/dbsohsdkz/image/upload/v1753440836/StudyAbroad_qurkxw.png",
        year: 2023
    },
    {
        id: 39,
        title: "Diving into Data Science",
        paragraph: "Held on 17th October 2023 in the Seminar Hall, this session provided a deep dive into the data science domain, covering analytics, tools, case studies, and career advice for students interested in the field.",
        img: "https://res.cloudinary.com/dbsohsdkz/image/upload/v1753440835/DivingIntoDataScience_li61ls.png",
        year: 2023
    },
    {
        id: 40,
        title: "Migrant Masters Study Abroad Seminar",
        paragraph: "Conducted on 24th January 2024 at 2 PM in the Seminar Hall, the seminar by Migrant Masters offered valuable insights on study abroad options, admissions, and visa procedures for international education aspirants.",
        img: "https://res.cloudinary.com/dbsohsdkz/image/upload/v1753442293/StudyAbroad_zl8pal.jpg",
        year: 2024
    },
    {
        id: 41,
        title: "Codertine’24",
        paragraph: "Held on 10th February 2024 at 12:15 PM via Google Meet, Codertine’24 was an online coding competition hosted by CESS and CodeCell to foster algorithmic thinking and hands-on programming practice.",
        img: "https://res.cloudinary.com/dbsohsdkz/image/upload/v1753442297/Codertine24_qnxaov.png",
        year: 2024
    },
    {
        id: 42,
        title: "Alumni Unplugged",
        paragraph: "On 16th February 2024 from 1:00 PM onwards in the Seminar Hall, Alumni Unplugged connected current students with RGIT alumni who shared experiences, industry journeys, and motivational insights.",
        img: "https://res.cloudinary.com/dbsohsdkz/image/upload/v1753442293/Entrepreneurship_colzqk.png",
        year: 2024
    },
    {
        id: 43,
        title: "Ideathon’24",
        paragraph: "Ideathon’24 was conducted on 28th and 29th February 2024 in the RGIT auditorium. It provided a platform for students to brainstorm innovative solutions to real-world challenges across tech and business domains.",
        img: "https://res.cloudinary.com/dbsohsdkz/image/upload/v1753442293/Ideathon24_pxqtac.png",
        year: 2024
    },
    {
        id: 44,
        title: "Recursion 5.0",
        paragraph: "Held on 13th and 14th March 2024 from 8:00 AM onwards across RGIT’s ground floor hall and auditorium, Recursion 5.0 was a 24-hour hackathon attracting tech-savvy students to solve domain-specific challenges through teamwork and innovation.",
        img: "https://res.cloudinary.com/dbsohsdkz/image/upload/v1753442292/Recursion5_qxhmux.png",
        year: 2024
    },
    {
        id: 45,
        title: "Independence Day Floor Decoration",
        paragraph: "For the celebration of the 78th Independence Day, floor decorations were put together with great enthusiasm and creativity by the members of CESS and Codecell along with other computer department students.",
        img: "https://res.cloudinary.com/dbsohsdkz/image/upload/v1753443045/Independenceday_ndz4xt.jpg",
        year: 2024,
        report: "https://drive.google.com/file/d/1LFolJnH1vzsdksV-9sMPgE5xfCsnG742/view"
    },
    {
        id: 46,
        title: "Decoding Hackathon",
        paragraph: "The Computer Engineering Student Society (CESS) and Codecell of Rajiv Gandhi Institute of Technology (RGIT) hosted the 'Decoding Hackathon,' featuring an engaging panel discussion with winners and semifinalists from the Smart India Hackathon. They shared practical advice on team dynamics, problem-solving, and effective presentations, highlighting the importance of participating for experience and growth.",
        img: "https://res.cloudinary.com/dbsohsdkz/image/upload/v1753443044/DecodingHackathon_ckbmzz.jpg",
        year: 2024,
        report: "https://drive.google.com/file/d/1FVebCI206IzOeESgtc-VQgme93klvvP9/view"
    },
    {
        id: 47,
        title: "Valedictory",
        paragraph: "The Computer Engineering Students Society (CESS) and CODECELL of Rajiv Gandhi Institute of Technology hosted their Valedictory Ceremony on 2nd September at 1:15 pm in the Seminar Hall, celebrating the accomplishments of the 2023–2024 core teams.",
        img: "https://res.cloudinary.com/dbsohsdkz/image/upload/v1753443044/Valedictory_z6yfzh.jpg",
        year: 2024,
        report: "https://drive.google.com/file/d/1PmZ7fCWIG_cRKPPuoc7flguqb6fzqJh1/view"
    },
    {
        id: 48,
        title: "Cyber Security Awareness Seminar",
        paragraph: "An informative seminar was organized by RGIT CESS and CODE CELL for RGIT students, to expand their knowledge and insight into the field of Cyber Security and Ethical Hacking with the objective to build up their hacking skills. The speaker, Azhad Shaikh brought years of experience in providing comprehensive cybersecurity solutions and training, ensuring that the students gained invaluable skills to protect their digital assets.",
        img: "https://res.cloudinary.com/dbsohsdkz/image/upload/v1753443042/CyberSecurity_fv1ayi.jpg",
        year: 2024,
        report: "https://drive.google.com/file/d/1R0-7lOKK8VMJU-BGZIXzGgZMKIuqkzRJ/view"
    },
    {
        id: 49,
        title: "Teachers Day Celebration",
        paragraph: "The Computer Engineering Student Society (CESS) and Codecell of Rajiv Gandhi Institute of Technology (RGIT) hosted the Teachers’ Day celebration on 5th of September. Team members put in great effort to design beautiful, personalized cards and handmade badges for Teachers' Day.",
        img: "https://res.cloudinary.com/dbsohsdkz/image/upload/v1753443041/Teachers_day_pq7e0g.jpg",
        year: 2024,
        report: "https://drive.google.com/file/d/13aQaImNL0vJPR7Ut-RkyhHCWEYxOmPJU/view"
    },
    {
        id: 50,
        title: "Web Development Bootcamp",
        paragraph: "The Computer Engineering Student Society (CESS) and Codecell of Rajiv Gandhi Institute of Technology (RGIT) conducted a highly interactive and informative 2-day Web Development Bootcamp starting on September 19th, which continued on 20th September, 2024. The Bootcamp was held in the classroom, B-34 on 3rd floor, with a huge participation. The speaker, CESS’ very own Web Secretary, Dhirendra Lohar, provided invaluable insights on using HTML, CSS, and JavaScript, elucidating their applications and significance.",
        img: "https://res.cloudinary.com/dbsohsdkz/image/upload/v1753443040/WebDevelopment_oj1xn6.jpg",
        year: 2024,
        report: "https://drive.google.com/file/d/1DEBcZZCkgjBKaYxCCXCytpCvO2gwq4jO/view"
    },
    {
        id: 51,
        title: "Accenture Innovation Challenge (Hiring) Bootcamp",
        paragraph: "The Computer Engineering Student Society (CESS) and Codecell of Rajiv Gandhi Institute of Technology (RGIT) hosted an engaging and insightful Accenture Innovation Challenge Bootcamp on September 21st, 2024, conducted in an online format with strong participation.",
        img: "https://res.cloudinary.com/dbsohsdkz/image/upload/v1753443041/Accenture_ks8xzx.jpg",
        year: 2024,
        report: "https://drive.google.com/file/d/1EK9eO-B4yplFKJrTJThX5qQYb_trwfGe/view"
    },
    {
        id: 52,
        title: "Satguru Overseas Education Seminar",
        paragraph: "RGIT CESS, in collaboration with Satguru Overseas Education, held an impactful seminar on Abroad Studies on September 23, 2024, in the seminar hall. Led by Ms. Krupa Vora, a knowledgeable SOE Manager, the event offered students valuable insights into global education opportunities.",
        img: "https://res.cloudinary.com/dbsohsdkz/image/upload/v1753443040/SatguruAbroad_j61jzu.jpg",
        year: 2024,
        report: "https://drive.google.com/file/d/1UboGvfFD_fNYrsC-hK10_RsD6pJQ7eFn/view"
    },
    {
        id: 53,
        title: "Satguru Overseas Global Edu Fair Visit",
        paragraph: "The Satguru Overseas Education Seminar, held at Orchid Hotel, was the biggest global education fair for students looking to study abroad. The event started with personalized counseling, where Satguru’s counselors gave each attendee tailored university recommendations based on their study plans.",
        img: "https://res.cloudinary.com/dbsohsdkz/image/upload/v1753443040/SatguruEduFair_bxakwf.jpg",
        year: 2024,
        report: "https://drive.google.com/file/d/1-CNw33WMxDCMUjnwvuay0RzRrO3Nv3nA/view"
    },
    {
        id: 54,
        title: "Seminar on Abroad Studies",
        paragraph: "In partnership with The ABIT Committee, CESS hosted an informative seminar on international education, led by Ms. Megha Dhawankar, which proved to be both engaging and insightful. Ms. Dhawankar, the founder of MS Venturi, guided students through education pathways abroad.",
        img: "https://res.cloudinary.com/dbsohsdkz/image/upload/v1753443039/AbroadStudies_k0eeuu.jpg",
        year: 2024,
        report: "https://drive.google.com/file/d/1CZ5RLUteCizW0-svvWCkOmMiyEu-abEm/view"
    },
    {
        id: 55,
        title: "IELTS Demo Sessions",
        paragraph: "The IELTS Demo Session at Rajiv Gandhi Institute of Technology (RGIT) was an informative seminar organized by CESS on the 10th of October, led by Ms. Pronati Siriah, who aimed to guide students through the intricacies of the IELTS exam.",
        img: "https://res.cloudinary.com/dbsohsdkz/image/upload/v1753443039/IELTSDemo_umnfiy.jpg",
        year: 2024,
        report: "https://drive.google.com/file/d/1U0IQpSbm26fsMkTHcwFwXNOWcNQD3xtQ/view"
    },
    {
        id: 56,
        title: "C & DS Bootcamp",
        paragraph: "This C Programming and Data Structures Bootcamp was designed for beginners and intermediate learners who want to master the fundamentals of C programming and gain in-depth knowledge of data structures. The bootcamp covered essential programming concepts, problem-solving techniques, and efficient data handling methods that are crucial for software development, competitive programming, and technical interviews.",
        img: "https://res.cloudinary.com/dbsohsdkz/image/upload/v1753443533/C_DS_uya1uk.jpg",
        year: 2025,
        report: "https://drive.google.com/file/d/1XbRidF7SWfzNsGe0_WLkHO1mDYSYuXYN/view"
    },
    {
        id: 57,
        title: "AI & ML Seminar",
        paragraph: "The seminar on 'AI Prosperity and Global Opportunities' focused on the increasing demand for AI professionals and the various career opportunities available in this domain. Dr. Mohit Raina discussed the rapid advancements in AI, its applications across industries like healthcare, finance, and automation, and the growing need for AI-driven solutions.",
        img: "https://res.cloudinary.com/dbsohsdkz/image/upload/v1753443533/AI_ML_apsztl.jpg",
        year: 2025,
        report: "https://drive.google.com/file/d/11A-MxNkVBwnW5_qr_nKF9yybbLyfhu-I/view"
    },
    {
        id: 58,
        title: "Codertine’25",
        paragraph: "Codertine’25, an exhilarating online intercollegiate hackathon, was hosted by the Computer Engineering Students’ Society (CESS) and Codecell of Rajiv Gandhi Institute of Technology (RGIT). Designed to challenge and inspire the brightest coding enthusiasts, the event provided a dynamic platform for participants to showcase their problem-solving skills, creativity, and technical expertise.",
        img: "https://res.cloudinary.com/dbsohsdkz/image/upload/v1753443532/Codertine25_lx2ejm.jpg",
        year: 2025,
        report: "https://drive.google.com/file/d/11A-MxNkVBwnW5_qr_nKF9yybbLyfhu-I/view"
    },
    {
        id: 59,
        title: "TC Global Education Expo Visit",
        paragraph: "The Education Expo held at The Lalit Hotel, Vile Parle, on 9th March 2025, was a vibrant and informative event for students aspiring to pursue higher education abroad, with 25 students attending the event. The expo featured opportunities to engage with top education counselors from international universities, offering insights into overseas study options, scholarships, and admission processes.",
        img: "https://res.cloudinary.com/dbsohsdkz/image/upload/v1753443532/TCVisit_pp8ovu.jpg",
        year: 2025,
        report: "https://drive.google.com/file/d/1Uzv6M-PAXdhQLvko8mpAn-SjZFhmi3TA/view"
    },
    {
        id: 60,
        title: "Saksham: Ideathon’25",
        paragraph: "Ideathon, conducted as part of Saksham in collaboration with E-Cell, CESS, and Codecell, was a flagship two-day event aimed at fostering innovation and entrepreneurship. The first day featured a keynote by an experienced entrepreneur, guiding participants through startup essentials. Teams then engaged in an intensive ideation session to craft startup concepts. On the final day, students pitched their refined ideas to a panel of judges following a seminar on sustainability and incubation opportunities.",
        img: "https://res.cloudinary.com/dbsohsdkz/image/upload/v1753443532/Saksham25_c623jk.jpg",
        year: 2025,
        report: "https://drive.google.com/drive/u/0/folders/120KA2Z62ULLuy_HIssZIRZwxO6kF_hT1"
    },
    {
        id: 61,
        title: "Recursion 6.0",
        paragraph: "Recursion 6.0 is a premier 24-hour hackathon organized by CESS and CodeCell, the tech committees under the Department of Computer Engineering at MCT's Rajiv Gandhi Institute of Technology. This year, Recursion received over 800+ registrations from across the country, of which 30 teams were shortlisted after an intense screening. The event spanned two floors of the college, accommodating the eager participating teams.",
        img: "https://res.cloudinary.com/dbsohsdkz/image/upload/v1753443531/Recursion6_z0l8hc.jpg",
        year: 2025,
        report: "https://drive.google.com/drive/folders/13T5SD1zW-2YYS_dewl59Xa92QFp5xpGw"
    },
    {
        id: 62,
        title: "Capture the Flag (CTF)",
        paragraph: "The Capture The Flag (CTF) event at ICARUS 2025 was a cybersecurity-based challenge aimed at testing participants’ problem-solving skills, logical thinking, and knowledge of computer security. The event was conducted in collaboration between the Computer Department Committees—CESS, CodeCell—and the Student Council of RGIT.",
        img: "https://res.cloudinary.com/dbsohsdkz/image/upload/v1753443531/CaptureTheFlag_pxrlpf.jpg",
        year: 2025,
        report: "https://drive.google.com/file/d/1WYkHU6-5yxH_hGu74Pi-e0617-KXlR1Z/view"
    }
]