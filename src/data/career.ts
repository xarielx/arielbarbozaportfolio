export interface Milestone {
    period: string
    title: string
    company?: string
    description: string
    achievements?: string[]
    icon: string
    type: 'work' | 'education' | 'military' | 'early'
}

export const milestones: Milestone[] = [
    {
        period: 'Nov 2025 — Present',
        title: 'Associate Manager, AI & ML Engineering',
        company: 'Lockheed Martin',
        description:
            'Leading AI/ML engineering teams supporting enterprise modernization through intelligent data solutions.',
        achievements: [
            'Technical and people leadership for AI-focused engineering teams',
            'Drives enterprise AI strategy with senior leadership',
            'Establishes engineering standards, governance, and delivery frameworks',
            'Mentors technical talent and fosters high-performance culture',
        ],
        icon: 'fa-star',
        type: 'work',
    },
    {
        period: 'Jun 2024 — Nov 2025',
        title: 'Staff Full Stack Software Engineer',
        company: 'Lockheed Martin',
        description:
            'Enterprise transformation at the intersection of automation and AI within the Automation Center of Excellence.',
        achievements: [
            'Architect of AgilePulse AI — processes 88K+ issues daily for risk assessment',
            'Release Train Engineer for 50+ developers, 18-22% velocity improvements',
            'Delivered ETL pipeline replacing 500+ manual reports, $100K+ annual savings',
            'Mentored 10 developers across 10+ concurrent AI initiatives',
        ],
        icon: 'fa-code',
        type: 'work',
    },
    {
        period: '2025',
        title: 'MBA, Executive Business Administration',
        company: 'University of Florida',
        description:
            'Warrington College of Business. Combining technical depth with executive leadership.',
        icon: 'fa-graduation-cap',
        type: 'education',
    },
    {
        period: 'Aug 2023 — Jun 2024',
        title: 'Staff Software & Project Engineer',
        company: 'Lockheed Martin',
        description:
            'Release Train Engineer and Scrum Master for Automation Center of Excellence.',
        achievements: [
            'Led 10 Agile Teams and Release Trains across multiple products',
            'Facilitated ART planning, backlog management, and roadmap creation',
            'Coached teams and stakeholders on agile principles',
        ],
        icon: 'fa-diagram-project',
        type: 'work',
    },
    {
        period: 'Jul 2022 — Aug 2023',
        title: 'Senior Project Engineer',
        company: 'Lockheed Martin',
        description:
            'Product Orchestrator for Enterprise FOSS, Secure Infrastructure, and META teams.',
        achievements: [
            '20% decrease in time-to-delivery through improved story writing',
            '6 successful consecutive release cycles, 25% content increase',
            'Coached teams on agile best practices and accountability',
        ],
        icon: 'fa-sitemap',
        type: 'work',
    },
    {
        period: '2021',
        title: 'M.Eng, Systems Engineering',
        company: 'Cornell University',
        description:
            'Master of Engineering in Systems Engineering.',
        icon: 'fa-graduation-cap',
        type: 'education',
    },
    {
        period: 'Aug 2021 — Jul 2022',
        title: 'Software Engineer, Leadership Development Program',
        company: 'Lockheed Martin',
        description:
            'Vetted $13.7M in Digital Transformation business value. Product Orchestrator for Software Factory.',
        achievements: [
            '145 Eye Suite engagements — $11.6M in reportable business value',
            '174 merge requests delivering features and bug fixes',
            'Improved story completion ratio by 80% within 3 sprints',
        ],
        icon: 'fa-laptop-code',
        type: 'work',
    },
    {
        period: 'Jan 2020 — Aug 2021',
        title: 'Software Engineer Associate, LDP',
        company: 'Lockheed Martin',
        description:
            'Lead developer of Django application automating Digital Transformation processes for 200+ programs.',
        achievements: [
            'Led Agile Scrum team of 15 developers',
            '220+ software solutions across SSIS, SQL Server, Oracle, Tableau',
            'Reduced DWH load time by 40%, punt rate by 78%',
        ],
        icon: 'fa-code-branch',
        type: 'work',
    },
    {
        period: 'May 2019 — Jan 2020',
        title: 'Software & Systems Engineering Intern',
        company: 'Lockheed Martin',
        description:
            'Developed 90+ software fixes, tested 35 report transitions, and managed intern development project.',
        icon: 'fa-seedling',
        type: 'work',
    },
    {
        period: 'B.S. Computer Science',
        title: 'University of Florida',
        company: undefined,
        description: 'Bachelor of Science in Computer Science.',
        icon: 'fa-graduation-cap',
        type: 'education',
    },
    {
        period: 'Sep 2012 — Sep 2016',
        title: '19K M1 Armor Crewman',
        company: 'United States Army',
        description:
            'Tank Gunner at Fort Bliss, Texas. Served as second in command with responsibility for $6.2M in equipment.',
        achievements: [
            'General George S. Patton Jr. Award',
            'Excellence in Armor Award',
            'Army Achievement Medal',
            'President, Better Opportunities for Single Soldiers — 500+ soldiers',
        ],
        icon: 'fa-shield',
        type: 'military',
    },
    {
        period: '2009 — 2012',
        title: 'IT Support — Amazon & Motif Inc.',
        company: undefined,
        description:
            'IT Help Desk roles supporting enterprise operations. Resolved 70+ issues weekly, authored 45+ knowledge base articles.',
        icon: 'fa-headset',
        type: 'early',
    },
]
