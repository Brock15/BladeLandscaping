export const serviceCards = [
  { title: 'Patios & Hardscaping', description: 'Stone and paver spaces for everyday outdoor living.', slug: 'hardscaping-outdoor-living', image: '/media/ready/service-patios.webp', alt: 'Service illustration of Blade uniforms and paver installation' },
  { title: 'Rock & Stone Landscaping', description: 'Natural texture, defined borders, and clean transitions.', slug: 'rock-stone-landscaping', image: '/media/ready/service-stone.webp', alt: 'Service illustration of Blade uniforms and a stone garden path' },
  { title: 'Sod Installation', description: 'Fresh lawn areas, from ground preparation to new sod.', slug: 'landscape-installation', image: '/media/ready/service-sod.webp', alt: 'Service illustration of Blade uniforms and sod installation' },
];

export type ProjectImage = { src: string; alt: string; width: number; height: number };
export type Project = {
  id: string;
  title: string;
  category: 'Patios & Stone' | 'Landscapes' | 'Preparation' | 'Commercial';
  caption: string;
  images: ProjectImage[];
  video?: string;
};
const projectRecords: Project[] = [
  { id: 'stone-garden-path', title: 'Stone garden pathway', category: 'Patios & Stone', caption: 'A natural-stone path through an established garden, with decorative rock beside the tree.', images: [{ src: '/reviews/fed-bread-3.png', alt: 'Natural-stone garden pathway beside a tree and planting', width: 250, height: 250 }, { src: '/reviews/fed-bread-2.png', alt: 'White decorative rock around a tree beside the stone pathway', width: 250, height: 250 }] },
  { id: 'poolside-landscape', title: 'Poolside landscape refresh', category: 'Landscapes', caption: 'Planting and fresh mulch around a poolside outdoor area. Watch two views of the finished beds.', images: [{ src: '/media/video-cuts/poolside-landscape-poster.webp', alt: 'Fresh mulch and ornamental planting beside a swimming pool', width: 720, height: 1280 }], video: '/media/video-cuts/poolside-landscape.mp4' },
  { id: 'covered-stone-patio', title: 'Covered stone patio', category: 'Patios & Stone', caption: 'Natural flagstone laid beside a covered outdoor area.', images: [{ src: '/media/ready/covered-stone-patio.webp', alt: 'Natural flagstone surface beneath a covered patio', width: 1200, height: 1600 }] },
  { id: 'flagstone-walkway', title: 'Flagstone walkway', category: 'Patios & Stone', caption: 'A stone path connecting the front entrance and side of the home.', images: [{ src: '/media/ready/flagstone-walkway.webp', alt: 'Flagstone path along a white house leading to the entrance steps', width: 1520, height: 1011 }] },
  { id: 'back-door-patio', title: 'Back-door patio', category: 'Patios & Stone', caption: 'A flagstone surface extending the space beside a home entrance.', images: [{ src: '/media/ready/back-door-patio.webp', alt: 'Flagstone patio beside a back door and flowering plants', width: 1200, height: 1600 }] },
  { id: 'patio-extension', title: 'Patio extension', category: 'Patios & Stone', caption: 'A curved stone patio with the surrounding ground still being finished.', images: [{ src: '/media/ready/patio-extension.webp', alt: 'Curved flagstone patio extension with exposed soil around its perimeter', width: 1280, height: 1600 }] },
  { id: 'flagstone-patio', title: 'Flagstone patio', category: 'Patios & Stone', caption: 'A natural-stone patio surrounding a fire-pit ring.', images: [{ src: '/media/ready/flagstone-patio.webp', alt: 'Flagstone patio beside a covered porch with a circular fire-pit ring', width: 768, height: 1024 }] },
  { id: 'rock-beds', title: 'Residential rock beds', category: 'Landscapes', caption: 'Decorative rock and defined beds beside a residential driveway.', images: [{ src: '/media/optimized/landscape-hero.webp', alt: 'Decorative rock beds around a tree beside a driveway', width: 1080, height: 1494 }] },
  { id: 'sod', title: 'Fresh sod installation', category: 'Landscapes', caption: 'A closer look at a lawn installation from our existing project footage.', images: [{ src: '/media/optimized/sod.webp', alt: 'Freshly installed sod across a residential lawn', width: 899, height: 1600 }], video: '/media/homepage/videos/sodding.mp4' },
  { id: 'patio-installation', title: 'Stonework in progress', category: 'Patios & Stone', caption: 'Fitting stone, working the joints, and placing material. Four views from the same installation.', images: [
    { src: '/media/ready/patio-in-progress.webp', alt: 'Stone patio installation in progress beside a mature tree', width: 820, height: 1024 },
    { src: '/media/ready/stone-fitting.webp', alt: 'Crew member fitting stone on the patio surface', width: 820, height: 1024 },
    { src: '/media/ready/stone-joints.webp', alt: 'Close view of work along the stone joints', width: 820, height: 1024 },
    { src: '/media/ready/patio-installation.webp', alt: 'Crew member moving material by wheelbarrow beside the stone surface', width: 820, height: 1024 },
  ] },
  { id: 'soil-preparation', title: 'Soil preparation', category: 'Preparation', caption: 'Groundwork with a compact loader before landscape installation.', images: [{ src: '/media/ready/soil-preparation.webp', alt: 'Compact loader preparing soil in a residential yard', width: 820, height: 1024 }] },
  { id: 'commercial', title: 'Commercial landscape installation', category: 'Commercial', caption: 'Planting beds and landscape materials alongside a commercial walkway.', images: [{ src: '/media/optimized/commercial.webp', alt: 'Commercial planting beds beside a property walkway', width: 720, height: 1280 }], video: '/media/homepage/videos/commercial-jobs.mp4' },
  { id: 'gravel-preparation', title: 'Gravel area preparation', category: 'Preparation', caption: 'Material placed beside a covered porch, with compaction work in progress.', images: [{ src: '/media/ready/gravel-preparation.webp', alt: 'Gravel surface beside a covered porch with a plate compactor in the foreground', width: 768, height: 1024 }] },
  { id: 'site-access', title: 'Working around an existing landscape', category: 'Preparation', caption: 'Material handling beside an established home and planting beds.', images: [{ src: '/media/ready/site-access.webp', alt: 'Compact loader alongside an existing home and planting bed', width: 768, height: 1024 }] },
  { id: 'landscape-preparation', title: 'Landscape preparation', category: 'Preparation', caption: 'An outdoor area being prepared for the next stage of work.', images: [{ src: '/media/ready/landscape-preparation.webp', alt: 'Crew member working in an excavated landscape area beside a walkway', width: 768, height: 1024 }] },
  { id: 'planting', title: 'Planting beds', category: 'Landscapes', caption: 'Ornamental planting with a defined stone border.', images: [{ src: '/media/optimized/planting.webp', alt: 'Ornamental planting in a stone-edged garden bed', width: 1000, height: 1564 }] },
];
const projectOrder = ['flagstone-patio', 'flagstone-walkway', 'back-door-patio', 'stone-garden-path', 'poolside-landscape', 'rock-beds', 'sod'];
export const projects = [...projectRecords].sort((first, second) => {
  const firstRank = projectOrder.indexOf(first.id);
  const secondRank = projectOrder.indexOf(second.id);
  return (firstRank < 0 ? projectOrder.length : firstRank) - (secondRank < 0 ? projectOrder.length : secondRank);
});
export const featuredProjects = ['flagstone-patio', 'flagstone-walkway', 'back-door-patio'].map((id) => projects.find((project) => project.id === id)!);
