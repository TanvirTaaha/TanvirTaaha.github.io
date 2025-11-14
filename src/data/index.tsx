import { PersonalInfo, Education, Publication, Project, Skill, GalleryItem, NewsItem, ResearchItem, Experience, ExtracurricularActivity } from '@/types';
import { textWithLinks } from '@/utils/text_with_links';

export const personalInfo: PersonalInfo = {
  name: 'MD. TANVIR HOSSAIN TAAHA',
  title: 'Machine Learning Engineer & Robotics Researcher',
  email: 'tanvir.taaha@gmail.com',
  phone: '+8801764223436',
  address: 'Dhaka, Bangladesh',
  location: 'Dhaka, Bangladesh',
  bio: textWithLinks(
    'I am currently working as a Machine Learning Engineer at [ACI PLC](https://www.aci-bd.com). Where I am working on different projects mainly on computer vision as well as scaling up existing projects, making them production grade software.\n\n' +
    "I have worked as Software Team Lead on the [Mars Rover Team](https://buetinterplanetar.com/) at [Bangladesh University of Engineering and Technology](https://www.buet.ac.bd/) during my graduation. I developed much of the components for the rover's software as well as created the arm manipulation and teleop software stack bottom up.\n\n" +
    "I hold a BSc in Mechanical Engineering from [Bangladesh University of Engineering and Technology](https://www.buet.ac.bd/). But despite my degree in mechanical engineering, I have a strong interest in computer science and programming. I have worked on many projects in the field of computer vision, robotics, and machine learning.\n\n" +
    "I am also a strong believer in the power of open source and free software. I am a strong advocate for the use of free software and open source software in all aspects of life."
  ),
  profileImage: '/images/profile.png',
  socialLinks: [
    { platform: 'GitHub', url: 'https://github.com/TanvirTaaha', icon: '💻' },
    { platform: 'LinkedIn', url: 'https://linkedin.com/in/tanvir-taaha', icon: '💼' },
    { platform: 'Website', url: 'https://TanvirTaaha.github.io', icon: '🌐' },
    { platform: 'Email', url: 'mailto:tanvir.taaha@gmail.com', icon: '✉️' },
  ],
};

export const education: Education[] = [
  {
    id: '1',
    degree: 'Bachelor of Science in Mechanical Engineering',
    institution: 'Bangladesh University of Engineering and Technology (BUET)',
    location: 'Dhaka, Bangladesh',
    year: '2019 - 2024',
    description: 'CGPA: 3.02/4.00',
    thesis: {
      title: 'Battery Thermal Management System with the combination of Phase Change Material, Metal Foam and Fin',
      description: 'Improved heat dissipation of Li-ion batteries using a passive thermal management system with phase-change material and metal fins. Carried out a comparative study of different variation of dimensional parameters.',
      technologies: ['ANSYS', 'SolidWorks'],
      supervisor: textWithLinks("[Dr. Md. Ashraful Islam, Professor](https://me.buet.ac.bd/public/old/faculty/prof/ashraful/index.html), [Dept. of Mechanical Engineering, BUET](https://me.buet.ac.bd/)"),
    },
  },
];

export const publications: Publication[] = [
  {
    id: '1',
    title: 'Your Publication Title Here',
    authors: 'Your Name, Co-author Name',
    venue: 'Conference/Journal Name',
    year: 2024,
    pdfUrl: '/publications/paper1.pdf',
    doi: '10.xxxx/xxxxx',
    abstract: 'Brief abstract of your publication...',
  },
  {
    id: '2',
    title: 'Another Publication Title',
    authors: 'Your Name, Another Co-author',
    venue: 'Journal Name',
    year: 2023,
    pdfUrl: '/publications/paper2.pdf',
  },
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'Field-Oriented Control (FOC) for BLDC Motor',
    description: 'Developed a robust real-time communication interface using CAN bus protocol and implemented high-performance FOC algorithm on STM32 microcontroller for precise BLDC motor commutation.',
    technologies: ['STM32Duino', 'C/C++', 'FOC', 'CAN Bus'],
    imageUrl: '/images/projects/stm32_esc_bldc.png',
    githubUrl: 'https://github.com/TanvirTaaha/FOC_stm32_CAN',
  },
  {
    id: '2',
    title: 'Pico PIO-Based Software I2C Expansion',
    description: 'Implemented software I2C communication channels on Raspberry Pi Pico using Programmable I/O (PIO) state machines to expand I2C interfaces beyond hardware limits.',
    technologies: ['Raspberry Pi Pico SDK', 'PIO Assembly', 'I2C'],
    imageUrl: '/images/projects/rpi-pico_i2c_pio.png',
    githubUrl: '',
  },
  {
    id: '3',
    title: 'YOLO Annotator - VSCode Extension',
    description: 'VSCode Extension to annotate images directly as Ultralytics YOLO format with auto-detection of directories and fast loading in remote SSH sessions.',
    technologies: ['TypeScript', 'HTML', 'CSS', 'YOLO'],
    imageUrl: '/images/projects/yolo-annotator-logo.png',
    githubUrl: 'https://github.com/TanvirTaaha/yolo-annotator-vscode',
  },
  {
    id: '4',
    title: 'Serialx: Cross-Platform C++ Serial Library',
    description: 'Modernized a lightweight, cross-platform C++ serial library inspired by PySerial with reliable serial communication support for microcontrollers on Linux and Windows.',
    technologies: ['C++', 'Serial Communication', 'POSIX', 'Windows API'],
    imageUrl: '',
    githubUrl: 'https://github.com/TanvirTaaha/serialx',
  },
  // {
  //   id: '5',
  //   title: 'Deep Learning Based Trash Sorting Robotic Arm',
  //   description: 'Trained YOLOv5 with custom dataset using transfer learning and developed autonomous control for robotic arm using MoveIt for complete trash sorting automation.',
  //   technologies: ['ROS', 'MoveIt', 'PyTorch', 'YOLOv5', 'SolidWorks'],
  //   imageUrl: '',
  //   pdfUrl: '',
  //   presentationPdfUrl: '',
  // },
  // {
  //   id: '6',
  //   title: 'Shell & Tube Heat Exchanger Design',
  //   description: 'Designed and manufactured a Shell and Tube Heat Exchanger to lower Engine Oil temperature with optimization using HTRI Xchanger Suite and comprehensive testing.',
  //   technologies: ['SolidWorks', 'HTRI', 'MATLAB'],
  //   imageUrl: '',
  // },
];

export const cvUrl = '/cv/CV-Tanvir Hossain Taaha.pdf';

export const skills: Skill[] = [
  { id: '1', name: 'Deep Learning & Computer Vision', level: 90 },
  { id: '2', name: 'Robotics & ROS', level: 88 },
  { id: '3', name: 'Machine Learning', level: 85 },
  { id: '4', name: 'Python Programming', level: 90 },
  { id: '5', name: 'C/C++ & Embedded Systems', level: 85 },
  { id: '6', name: 'Control Theory', level: 80 },
];

export const research: ResearchItem[] = [
  {
    id: '1',
    title: 'Automated Waste Sorting using Deep Learning and Robotic Manipulation: A Comprehensive Approach',
    venue: textWithLinks("Presented at [ICMIME'24](https://icmime-ruet.ac.bd/)"),
    technologies: ['ROS', 'MoveIt', 'Gazebo', 'PyTorch', 'YOLO'],
    description: 'Using computer vision, object localization to classify various waste objects for recycling.\nROS & MoveIt based autonomous pick and place to the correct bin with robotic arm, thoroughly tested in Gazebo.\nSuccessfully categorizing waste objects and successfully sorting them with the prototype.',
    imageUrl: '/images/cobot_paper/Figure_4.png',
    link: 'files/cobot_paper/cobot_paper_final.pdf',
  },
];

export const news: NewsItem[] = [
  {
    id: '1',
    title: 'Paper Accepted at ICMIME\'24',
    description: 'Our research on "Automated Waste Sorting using Deep Learning and Robotic Manipulation" has been accepted and presented at ICMIME\'24 conference.',
    date: '2024-01-15',
    category: 'Publication',
  },
  {
    id: '2',
    title: 'Started as Machine Learning Engineer at ACI PLC',
    description: 'Joined ACI PLC as Machine Learning Engineer, working on real-time video inference systems and IoT devices with AI backend.',
    date: '2024-12-01',
    category: 'Career',
  },
  {
    id: '3',
    title: 'European Rover Challenge 2023 - 13th Position Worldwide',
    description: 'Secured 13th position worldwide in European Rover Challenge Remote Formula 2023 as Software Team Lead of Team Interplanetar.',
    date: '2023-09-01',
    category: 'Achievement',
  },
  {
    id: '4',
    title: 'Anatolian Rover Challenge 2024 - 2nd Place',
    description: 'Secured 2nd place in the final round of Anatolian Rover Challenge 2024 held at İstanbul Technical University as Software Team Lead.',
    date: '2024-07-01',
    category: 'Achievement',
  },
  {
    id: '5',
    title: 'Released YOLO Annotator - VSCode Extension',
    description: 'Released my first open source project, YOLO Annotator - VSCode Extension. It is a VSCode extension that allows you to annotate images directly as Ultralyots YOLO format with auto-detection of directories and fast loading in remote SSH sessions.',
    date: '2025-06-14',
    category: 'Open Source',
  },
];

export const experience: Experience[] = [
  {
    id: '1',
    title: 'Machine Learning Engineer',
    company: 'ACI PLC',
    location: 'Tejgaon, Dhaka',
    period: 'Dec 2024 – Present',
    description: [
      'Developed a monitoring system with real time video inference, developed architecture which is highly optimized and scalable with minimum resources.',
      'Developed IoT devices with AI backend, developed the whole messaging pipeline using MQTT.',
      'Implemented a custom data labeling pipeline using Dockerized Label Studio with ML backend for pre-annotation supporting images, audio and text for training and testing for the whole team.',
      'Administered and troubleshot development and production Linux servers, ensuring system security and operational robustness.',
    ],
  },
  {
    id: '2',
    title: 'Junior Software Engineer (Part-time)',
    company: 'Bydo Academy',
    location: 'Lalbagh, Dhaka',
    period: 'Dec 2020 – Oct 2024',
    description: [
      'Worked on several android apps for clients featuring live audio-video chat, public posts, telemedicine and various govt. projects.',
      'Gained experience in team work, agile development strategies, managing large codebase, designing complex UI and handling database.',
    ],
  },
];

export const galleryItems: GalleryItem[] = [
  {
    id: '1',
    imageUrl: '/gallery/rover_pics/Renaissance_V1.0_yolo_rag_corner.jpg',
    filename: 'Renaissance_V1.0_yolo_rag_corner.jpg',
    title: 'Renaissance V1.0',
    alt: 'Rover Renaissance V1.0',
    caption: 'Rover Renaissance V1.0',
    subCaption: 'Team Interplanetar - BUET Mars Rover Team',
    category: 'Events',
  },
  {
    id: '2',
    imageUrl: '/gallery/rover_pics/Prochesta_V1.0_URC-2023_getting_ready.jpg',
    filename: 'Prochesta_V1.0_URC-2023_getting_ready.jpg',
    title: 'Getting Ready for URC-2023',
    alt: 'Getting Ready for URC-2023',
    caption: 'Getting Ready for URC-2023',
    subCaption: 'Team Interplanetar - BUET Mars Rover Team',
    category: 'Team',
  },
  {
    id: '3',
    imageUrl: '/gallery/rover_pics/Prochesta_V1.0_URC-2023.jpg',
    filename: 'Prochesta_V1.0_URC-2023.jpg',
    title: 'Prochesta V1.0 at Mars Research Society, Utah, USA',
    alt: 'Prochesta V1.0 at Mars Research Society, Utah, USA',
    caption: 'Prochesta V1.0 at Mars Research Society, Utah, USA',
    subCaption: 'Team Interplanetar - BUET Mars Rover Team',
    category: 'Events',
  },
  {
    id: '4',
    imageUrl: '/gallery/rover_pics/Prochesta_V1.0_URC-2023_test_run.jpg',
    filename: 'Prochesta_V1.0_URC-2023_test_run.jpg',
    title: 'Team Interplanetar',
    alt: 'Team Interplanetar test run of Prochesta V1.0 rover',
    caption: 'Team Interplanetar test run of Prochesta V1.0 rover',
    subCaption: 'Team Interplanetar - BUET Mars Rover Team',
    category: 'Team',
  },
  {
    id: '5',
    imageUrl: '/gallery/rover_pics/me_with_rover.jpg',
    filename: 'me_with_rover.jpg',
    title: 'Me with Renaissance V1.0',
    alt: 'Me with Renaissance V1.0',
    caption: 'Me with Renaissance V1.0',
    subCaption: 'Team Interplanetar - BUET Mars Rover Team',
    category: 'Team',
  },
  // {
  //   id: '6',
  //   imageUrl: '/gallery/image6.jpg',
  //   filename: 'image6.jpg',
  //   title: 'Workshop Session',
  //   alt: 'Conducting workshop for students',
  //   caption: 'Teaching and mentoring session',
  //   subCaption: 'Educational Workshop',
  //   category: 'Events',
  // },
];

export const extracurricularActivities: ExtracurricularActivity[] = [
  {
    id: '1',
    title: 'Team Interplanetar - BUET Mars Rover Team',
    organization: 'Bangladesh University of Engineering and Technology (BUET)',
    role: 'Software Team Lead',
    period: '2022 – 2024',
    location: 'Dhaka, Bangladesh',
    description: 'Led the software development team for the Mars Rover project, developing critical components for the rover\'s software stack and creating the arm manipulation and teleoperation software from the ground up.',
    technologies: ['ROS', 'C++', 'Python', 'Robotics', 'Control Systems', 'Computer Vision'],
    achievements: [
      'Secured 13th position worldwide in European Rover Challenge Remote Formula 2023',
      'Secured 2nd place in Anatolian Rover Challenge 2024 held at İstanbul Technical University',
      'Developed much of the components for the rover\'s software stack',
      'Created the arm manipulation and teleop software stack bottom up',
    ],
    link: 'https://buetinterplanetar.com/',
  },
];

