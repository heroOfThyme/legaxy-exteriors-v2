// src/data/projects.ts
import type { ImageMetadata } from 'astro';

// Import all project images
import basementWalkoutFinished from '~/assets/images/projects/basement-walkout-finished.png';
import basementWalkoutPatioExtentionComplete from '~/assets/images/projects/basement-walkout-patio-extention-complete.png';
import basementWalkoutPatioExtention from '~/assets/images/projects/basement-walkout-patio-extention.png';
import basementWalkoutProgressConcretePath from '~/assets/images/projects/basement-walkout-progress-concrete-path.png';
import basementWalkoutProgressConcretePouring from '~/assets/images/projects/basement-walkout-progress-concrete-pouring.png';
import basementWalkoutProgressFinishedSteps from '~/assets/images/projects/basement-walkout-progress-finished-steps.png';
import basementWalkoutProgressPreSteps from '~/assets/images/projects/basement-walkout-progress-pre-steps.png';
import basementWalkoutProgressStoneBrick from '~/assets/images/projects/basement-walkout-progress-stone-brick.png';
import basementWalkoutProgressStoneRetainerWall from '~/assets/images/projects/basement-walkout-progress-stone-retainer-wall.png';
import basementWalkoutProgressWalkway from '~/assets/images/projects/basement-walkout-progress-walkway.png';
import basementWalkoutProgressWoodFrame from '~/assets/images/projects/basement-walkout-progress-wood-frame.png';
import bobcatGradingJobsite from '~/assets/images/projects/bobcat-grading-jobsite.png';
import completedConcreteDrivewayCornerView from '~/assets/images/projects/completed-concrete-driveway-corner-view-windsor-2024.png';
import completedConcreteDrivewayWindsor from '~/assets/images/projects/completed-concrete-driveway-windsor-2024.png';
import concreteFoundationHomeExcavation from '~/assets/images/projects/concrete-foundation-home-excavation.png';
import concreteWalkwayDrivewayWindsor from '~/assets/images/projects/concrete-walkway-driveway-windsor-2024.png';
import concreteWalkwayWindsor from '~/assets/images/projects/concrete-walkway-windsor-2024.png';
import dugUpTurfWindsorSodInstallation from '~/assets/images/projects/dug-up-turf-widsor-sod-installation.png';
import etHouseDrivewayWork from '~/assets/images/projects/et-house-driveway-work.png';
import excavatorMovingStone from '~/assets/images/projects/excavator-moving-stone.png';
import installedSodWindsor from '~/assets/images/projects/installed-sod-windsor-2024.png';
import levelledGravelDrivewayWindsor from '~/assets/images/projects/levelled-gravel-driveway-windsor-2024.png';
import ourEquipmentLiftingBigRock from '~/assets/images/projects/our-equipment-lifting-big-rock.png';
import posingWithTheTruck from '~/assets/images/projects/posing-with-the-truck.png';
import soddedLawnComplete from '~/assets/images/projects/sodded-lawn-complete.png';
import soddedLawnFrontYardWindsor from '~/assets/images/projects/sodded-lawn-front-yard-windsor.png';
import soilGradedAndLevelledWindsorSod from '~/assets/images/projects/soil-graded-and-levelled-windsor-sod.png';
import yardClearingWindsor from '~/assets/images/projects/yard-clearing-windsor-2024.png';

// Project gallery type
export interface Project {
  image: ImageMetadata;
  alt: string;
  category: string;
  featured?: boolean;
}

// Project gallery data with real images
export const projectGallery: Project[] = [
  { 
    image: basementWalkoutFinished,
    alt: 'Completed basement walkout with landscaping',
    category: 'Landscaping',
    featured: true
  },
  { 
    image: basementWalkoutPatioExtentionComplete,
    alt: 'Basement walkout with extended patio area completed',
    category: 'Landscaping'
  },
  { 
    image: basementWalkoutPatioExtention,
    alt: 'In-progress basement walkout with patio extension',
    category: 'Landscaping'
  },
  { 
    image: basementWalkoutProgressConcretePath,
    alt: 'Concrete path installation for basement walkout',
    category: 'Concrete'
  },
  { 
    image: basementWalkoutProgressConcretePouring,
    alt: 'Pouring concrete for basement walkout steps',
    category: 'Hardscaping'
  },
  { 
    image: basementWalkoutProgressFinishedSteps,
    alt: 'Completed concrete steps for basement walkout',
    category: 'Hardscaping',
    featured: true
  },
  { 
    image: basementWalkoutProgressPreSteps,
    alt: 'Preparation work for basement walkout steps',
    category: 'Excavation'
  },
  { 
    image: basementWalkoutProgressStoneBrick,
    alt: 'Stone and brick work for basement walkout',
    category: 'Hardscaping'
  },
  { 
    image: basementWalkoutProgressStoneRetainerWall,
    alt: 'Stone retaining wall for basement walkout',
    category: 'Hardscaping'
  },
  { 
    image: basementWalkoutProgressWalkway,
    alt: 'Walkway construction for basement access',
    category: 'Hardscaping'
  },
  { 
    image: basementWalkoutProgressWoodFrame,
    alt: 'Wooden framework for basement walkout construction',
    category: 'Excavation'
  },
  { 
    image: bobcatGradingJobsite,
    alt: 'Bobcat machine grading a construction site',
    category: 'Excavation',
    featured: true
  },
  { 
    image: completedConcreteDrivewayCornerView,
    alt: 'Corner view of completed concrete driveway in Windsor',
    category: 'Driveways'
  },
  { 
    image: completedConcreteDrivewayWindsor,
    alt: 'Completed concrete driveway in Windsor',
    category: 'Driveways',
    featured: true
  },
  { 
    image: concreteFoundationHomeExcavation,
    alt: 'Excavation work for home concrete foundation',
    category: 'Excavation'
  },
  { 
    image: concreteWalkwayDrivewayWindsor,
    alt: 'Concrete walkway and driveway installation in Windsor',
    category: 'Driveways'
  },
  { 
    image: concreteWalkwayWindsor,
    alt: 'Concrete walkway installation in Windsor',
    category: 'Concrete'
  },
  { 
    image: dugUpTurfWindsorSodInstallation,
    alt: 'Prepared ground for sod installation in Windsor',
    category: 'Sod'
  },
  { 
    image: etHouseDrivewayWork,
    alt: 'Driveway construction for residential property',
    category: 'Driveways'
  },
  { 
    image: excavatorMovingStone,
    alt: 'Excavator moving large stones at construction site',
    category: 'Excavation'
  },
  { 
    image: installedSodWindsor,
    alt: 'Freshly installed sod lawn in Windsor',
    category: 'Sod'
  },
  { 
    image: levelledGravelDrivewayWindsor,
    alt: 'Levelled gravel driveway in Windsor',
    category: 'Driveways'
  },
  { 
    image: ourEquipmentLiftingBigRock,
    alt: 'Heavy equipment lifting large boulder',
    category: 'Excavation'
  },
  { 
    image: posingWithTheTruck,
    alt: 'Team member posing with company truck',
    category: 'Equipment',
    featured: true
  },
  { 
    image: soddedLawnComplete,
    alt: 'Completed sodded lawn installation',
    category: 'Sod',
    featured: true
  },
  { 
    image: soddedLawnFrontYardWindsor,
    alt: 'Front yard with new sod installation in Windsor',
    category: 'Sod'
  },
  { 
    image: soilGradedAndLevelledWindsorSod,
    alt: 'Graded and levelled soil prepared for sod in Windsor',
    category: 'Sod'
  },
  { 
    image: yardClearingWindsor,
    alt: 'Yard clearing and preparation in Windsor',
    category: 'Excavation'
  }
];

// Helper function to get featured projects
export function getFeaturedProjects(count = 6): Project[] {
  const featured = projectGallery.filter(project => project.featured);
  const additional = projectGallery.filter(project => !project.featured);
  
  if (featured.length >= count) {
    return featured.slice(0, count);
  } else {
    return [...featured, ...additional.slice(0, count - featured.length)];
  }
}

// Helper function to get projects by category
export function getProjectsByCategory(category: string): Project[] {
  return projectGallery.filter(project => project.category === category);
}

// Get unique categories
export function getCategories(): string[] {
  return [...new Set(projectGallery.map(project => project.category))];
}