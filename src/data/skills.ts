export interface SkillCategory {
    title: string
    icon: string
    skills: string[]
}

export const skillCategories: SkillCategory[] = [
    {
        title: 'Engineering Leadership',
        icon: 'fa-compass',
        skills: [
            'AI Engineering Management',
            'Release Train Engineering',
            'Agile/Scrum Coaching',
            'Stakeholder Management',
            'Engineering Governance',
            'Delivery Frameworks',
            'Talent Development',
            'Cross-Functional Leadership',
        ],
    },
    {
        title: 'AI & Machine Learning',
        icon: 'fa-brain',
        skills: [
            'NLP & LLMs',
            'Deep Learning',
            'Predictive Analytics',
            'Computer Vision',
            'Ontology Engineering',
            'ML System Architecture',
            'AI Strategy',
            'Intelligent Automation',
        ],
    },
    {
        title: 'Enterprise Architecture',
        icon: 'fa-building',
        skills: [
            'Systems Engineering (MBSE)',
            'Cloud Architecture (AWS)',
            'Microservices',
            'RESTful APIs & GraphQL',
            'Software Systems Engineering',
            'Platform Engineering',
            'Enterprise Integration',
            'Solution Architecture',
        ],
    },
    {
        title: 'Automation & DevSecOps',
        icon: 'fa-terminal',
        skills: [
            'CI/CD Pipelines',
            'Docker & Kubernetes',
            'Infrastructure as Code',
            'ETL Automation',
            'GitLab CI/CD',
            'Process Automation',
            'Container Orchestration',
            'DevSecOps Practices',
        ],
    },
    {
        title: 'Data Science & Analytics',
        icon: 'fa-chart-bar',
        skills: [
            'Python / NumPy / Pandas',
            'Tableau / Power BI',
            'Statistical Analysis',
            'Data Visualization',
            'Big Data Processing',
            'Data Warehousing',
            'SQL / PostgreSQL / MongoDB',
            'MATLAB',
        ],
    },
]

export const certifications = [
    'AI Software Developer (ASEP)',
    'Scrum: Advanced',
    'Systems Engineering (Cornell)',
    'Communicating Across Cultures',
]
