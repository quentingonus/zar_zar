// SocialMedia Post Designs
import sm1 from '../../images/SocialMedia Post Designs/christmas.jpg';
import sm2 from '../../images/SocialMedia Post Designs/christmas_2.jpg';
import sm3 from '../../images/SocialMedia Post Designs/happy_new_year_2026.jpg';
import sm4 from '../../images/SocialMedia Post Designs/kasone_day.jpg';
import sm5 from '../../images/SocialMedia Post Designs/labour_day.jpg';
import sm6 from '../../images/SocialMedia Post Designs/martyr_day.jpg';
import sm7 from '../../images/SocialMedia Post Designs/peasants_day.jpg';
import sm8 from '../../images/SocialMedia Post Designs/pyi_daung_su_day.jpg';
import sm9 from '../../images/SocialMedia Post Designs/tazaungmon_day_1.jpg';
import sm10 from '../../images/SocialMedia Post Designs/tazaungmon_day_2.jpg';
import sm11 from '../../images/SocialMedia Post Designs/thadingyut_day.jpg';

// Certificates & Awards Designs
import ca1 from '../../images/Certificates & Awards Designs/award1.jpg';
import ca2 from '../../images/Certificates & Awards Designs/award2.jpg';
import ca3 from '../../images/Certificates & Awards Designs/certificate1.jpg';
import ca4 from '../../images/Certificates & Awards Designs/certificate2.jpg';
import ca5 from '../../images/Certificates & Awards Designs/certificate3.jpg';

// Job Post Designs
import jp1 from '../../images/Job Post Designs/job post 1.jpg';
import jp2 from '../../images/Job Post Designs/job post 2.jpg';
import jp3 from '../../images/Job Post Designs/job post 3.jpg';
import jp4 from '../../images/Job Post Designs/job post 4.jpg';
import jp5 from '../../images/Job Post Designs/job post 5.jpg';

// InClass Assignment Designs
import ia1 from '../../images/InClass Assignment Designs/inclass assignment 1.jpg';
import ia2 from '../../images/InClass Assignment Designs/inclass assignment 2.jpg';
import ia3 from '../../images/InClass Assignment Designs/inclass assignment 3.jpg';
import ia4 from '../../images/InClass Assignment Designs/inclass assignment 4.jpg';
import ia5 from '../../images/InClass Assignment Designs/inclass assignment 5.jpg';

// Vinyl Designs
import vd1 from '../../images/Vinyl Designs/annual_trip.jpg';
import vd2 from '../../images/Vinyl Designs/annual_trip2.jpg';
import vd3 from '../../images/Vinyl Designs/event.jpg';

export interface WorkItem {
    id: number;
    title: string;
    image: string;
}

export interface WorkGroup {
    label: string;
    description: string;
    items: WorkItem[];
}

export const workGroups: WorkGroup[] = [
    {
        label: 'SocialMedia Post Designs',
        description: 'Festive & occasion posts',
        items: [
            { id: 1, title: 'Christmas', image: sm1 },
            { id: 2, title: 'Christmas II', image: sm2 },
            { id: 3, title: 'Happy New Year 2026', image: sm3 },
            { id: 4, title: 'Kasone Day', image: sm4 },
            { id: 5, title: 'Labour Day', image: sm5 },
            { id: 6, title: "Martyr's Day", image: sm6 },
            { id: 7, title: 'Peasants Day', image: sm7 },
            { id: 8, title: 'Pyi Daung Su Day', image: sm8 },
            { id: 9, title: 'Tazaungmon Day I', image: sm9 },
            { id: 10, title: 'Tazaungmon Day II', image: sm10 },
            { id: 11, title: 'Thadingyut Day', image: sm11 },
        ],
    },
    {
        label: 'Certificates & Awards Designs',
        description: 'Certificates and award ceremonies',
        items: [
            { id: 12, title: 'Award Ceremony I', image: ca1 },
            { id: 13, title: 'Award Ceremony II', image: ca2 },
            { id: 14, title: 'Certificate I', image: ca3 },
            { id: 15, title: 'Certificate II', image: ca4 },
            { id: 16, title: 'Certificate III', image: ca5 },
        ],
    },
    {
        label: 'Job Post Designs',
        description: 'Recruitment and job listings',
        items: [
            { id: 17, title: 'Job Post I', image: jp1 },
            { id: 18, title: 'Job Post II', image: jp2 },
            { id: 19, title: 'Job Post III', image: jp3 },
            { id: 20, title: 'Job Post IV', image: jp4 },
            { id: 21, title: 'Job Post V', image: jp5 },
        ],
    },
    {
        label: 'InClass Assignment Designs',
        description: 'Academic design assignments',
        items: [
            { id: 22, title: 'Assignment I', image: ia1 },
            { id: 23, title: 'Assignment II', image: ia2 },
            { id: 24, title: 'Assignment III', image: ia3 },
            { id: 25, title: 'Assignment IV', image: ia4 },
            { id: 26, title: 'Assignment V', image: ia5 },
        ],
    },
    {
        label: 'Vinyl Designs',
        description: 'Event and trip vinyl designs',
        items: [
            { id: 27, title: 'Annual Trip I', image: vd1 },
            { id: 28, title: 'Annual Trip II', image: vd2 },
            { id: 29, title: 'Annual Party', image: vd3 },
        ],
    },
];
