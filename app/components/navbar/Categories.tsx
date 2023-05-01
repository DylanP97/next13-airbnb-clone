'use client';

import { usePathname } from 'next/navigation';
import { useSearchParams } from 'next/navigation';

import CategoryBox from "../CategoryBox";
import Container from '../Container';
import { categoriesIcons } from '@/public/categories';

export const categories = [
  {
    label: 'Beach',
    icon: categoriesIcons['beach'],
    description: 'This property is close to the beach!',
  },
  {
    label: 'Windmills',
    icon: categoriesIcons['windmills'],
    description: 'This property is a windmill!',
  },
  {
    label: 'Design',
    icon: categoriesIcons['design'],
    description: 'This property is singularly designed!'
  },
  {
    label: 'Countryside',
    icon: categoriesIcons['countryside'],
    description: 'This property is in the countryside!'
  },
  {
    label: 'Amazing pools',
    icon: categoriesIcons['amazingpools'],
    description: 'This is property has a beautiful pool!'
  },
  {
    label: 'Islands',
    icon: categoriesIcons['islands'],
    description: 'This property is on an island!'
  },
  {
    label: 'Lake',
    icon: categoriesIcons['lake'],
    description: 'This property is near a lake!'
  },
  {
    label: 'Skiing',
    icon: categoriesIcons['skiing'],
    description: 'This property has skiing activies!'
  },
  {
    label: 'Surfing',
    icon: categoriesIcons['surfing'],
    description: 'This property has surfing activies!'
  },
  {
    label: 'Castles',
    icon: categoriesIcons['castles'],
    description: 'This property is an ancient castle!'
  },
  {
    label: 'Caves',
    icon: categoriesIcons['caves'],
    description: 'This property is in a spooky cave!'
  },
  {
    label: 'Treehouses',
    icon: categoriesIcons['treehouse'],
    description: 'This property is in an adventurous treehouse!'
  },
  {
    label: 'Camping',
    icon: categoriesIcons['camping'],
    description: 'This property offers camping activities!'
  },
  {
    label: 'Arctic',
    icon: categoriesIcons['arctic'],
    description: 'This property is in arctic environment!'
  },
  {
    label: 'Desert',
    icon: categoriesIcons['desert'],
    description: 'This property is in the desert!'
  },
  {
    label: 'Barns',
    icon: categoriesIcons['barns'],
    description: 'This property is in a barn!'
  },
  {
    label: 'Lux',
    icon: categoriesIcons['luxe'],
    description: 'This property is brand new and luxurious!'
  },
  {
    label: 'Amazing views',
    icon: categoriesIcons['amazingviews'],
    description: 'This property has amazing views!'
  },
  {
    label: 'Beach front',
    icon: categoriesIcons['beachfront'],
    description: 'This property is in front of a beach!'
  },
  {
    label: 'Boats',
    icon: categoriesIcons['boats'],
    description: 'This property is on a boat!'
  }
]

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
          gap-2
        "
      >
        {categories.map((item) => (
          <CategoryBox 
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
}
 
export default Categories;