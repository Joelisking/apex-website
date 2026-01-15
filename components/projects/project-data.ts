export interface Project {
  location: string;
  title: string;
  description: string;
  image: string;
  servicesCompleted: string[];
}

export const projects: Project[] = [
  {
    location: 'Garrett, Indiana',
    title: 'CR 15 Roadway Reconstruction',
    description:
      'This project consisted of a complete reconstruction and widening of the existing road from SR 8 to the city limits in Garrett, IN. This stretch of CR 15 is used by semi-trucks to access the Wal-Mart distribution center. The existing asphalt had deteriorated badly due to the heavy truck traffic and as a result, complete reconstruction was needed.',
    image: '/projects/cr15.webp',
    servicesCompleted: [
      'Topographic Survey',
      'Design & Engineering',
      'Bidding',
      'Construction Inspection',
    ],
  },
  {
    location: 'North Manchester, Indiana',
    title: 'Market Street Reconstruction',
    description:
      'Full depth asphalt pavement reconstruction of Market Street from Main Street to 2nd Street. This project consisted of improvements to the roadway subgrade, new full depth asphalt pavement replacement, ADA pedestrian facility upgrades, and on-street parking improvements.',
    image: '/projects/market-street.webp',
    servicesCompleted: [
      'Topographic Survey',
      'Design & Engineering',
      'Bidding',
      'Construction Inspection',
    ],
  },
  {
    location: 'North Manchester, Indiana',
    title: 'Chester Heights Trail',
    description:
      'A 1.6-mile, 8 ft. wide, asphalt trail located in the northwest section of the Town. The trail was designed to follow along a section of Clear Creek and adjacent to the existing railroad corridor. The project also included a trail head parking lot, ADA ramps, and other incidental improvements. ',
    image: '/projects/chester-heights.png',
    servicesCompleted: [
      'Topographic Survey',
      'Trail Design & Engineering',
      'Bidding',
      'Construction Inspection',
    ],
  },
];
