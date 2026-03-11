import photo1 from '../../showcases/christmas.jpg';
import photo2 from '../../showcases/tazaungdai.jpg';
import photo4 from '../../showcases/kasone.jpg';
import photo5 from '../../showcases/annual_trip.jpg';
import photo6 from '../../showcases/annual_trip2.jpg';
import photo7 from '../../showcases/event.jpg';
import photo8 from '../../showcases/worker.jpg';
import photo9 from '../../showcases/award1.jpg';
import photo10 from '../../showcases/certificate1.jpg';
import photo11 from '../../showcases/certificate2.jpg';
import photo12 from '../../showcases/happy_new_year.jpg';
import photo13 from '../../showcases/martyrday.jpg';
import photo14 from '../../showcases/award2.jpg';
import photo15 from '../../showcases/certificate3.jpg';
import photo16 from '../../showcases/christmas2.jpg';
import photo17 from '../../showcases/pyi_daung_su_day.jpg';
import photo18 from '../../showcases/tazaungmon_day.jpg';
import photo19 from '../../showcases/thadingyut_day.jpg';

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
        label: 'Social Media',
        description: 'Festive & occasion posts',
        items: [
            { id: 12, title: 'Happy New Year', image: photo12 },
            { id: 1, title: 'Merry Christmas', image: photo1 },
            { id: 16, title: 'Christmas II', image: photo16 },
            { id: 13, title: "Martyr's Day", image: photo13 },
            { id: 17, title: 'Pyi Daung Su Day', image: photo17 },
            { id: 8, title: 'Peasants Day', image: photo8 },
            { id: 4, title: 'Kason Festival', image: photo4 },
            { id: 19, title: 'Thadingyut Day', image: photo19 },
            { id: 18, title: 'Tazaungmon Day', image: photo18 },
            { id: 2, title: 'Tazaungdaing Festival', image: photo2 },
        ],
    },
    {
        label: 'Event Posters',
        description: 'Corporate & company events',
        items: [
            { id: 9, title: 'Award Ceremony I', image: photo9 },
            { id: 14, title: 'Award Ceremony II', image: photo14 },
            { id: 11, title: 'Certificate I', image: photo11 },
            { id: 10, title: 'Certificate II', image: photo10 },
            { id: 15, title: 'Certificate III', image: photo15 },
            { id: 5, title: 'Annual Trip I', image: photo5 },
            { id: 6, title: 'Annual Trip II', image: photo6 },
            { id: 7, title: 'Annual Party', image: photo7 },
        ],
    },
];
