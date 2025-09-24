// src/assets/data/projectsData.ts

// Proyecto 1
import Property_1 from '../images/proyecto_1/pic_1.jpeg';
import Property_1_2 from '../images/proyecto_1/pic_2.jpeg';
import Property_1_3 from '../images/proyecto_1/pic_3.jpeg';
import Property_1_4 from '../images/proyecto_1/pic_4.jpeg';
import Property_1_5 from '../images/proyecto_1/pic_5.jpeg';

// Proyecto 2
import Property_2 from '../images/proyecto_2/pic_1.jpeg';
import Property_2_2 from '../images/proyecto_2/pic_2.jpeg';
import Property_2_3 from '../images/proyecto_2/pic_3.jpeg';
import Property_2_4 from '../images/proyecto_2/pic_4.jpeg';
import Property_2_5 from '../images/proyecto_2/pic_5.jpeg';

// Proyecto 3
import Property_3 from '../images/proyecto_3/pic_1.jpeg';
import Property_3_2 from '../images/proyecto_3/pic_2.jpeg';
import Property_3_3 from '../images/proyecto_3/pic_3.jpeg';
import Property_3_4 from '../images/proyecto_3/pic_4.jpeg';
import Property_3_5 from '../images/proyecto_3/pic_5.jpeg';
import Property_3_6 from '../images/proyecto_3/pic_6.jpeg';
import Property_3_7 from '../images/proyecto_3/pic_7.jpeg';

// Proyecto 4
import Property_4 from '../images/proyecto_4/pic_1.jpeg';
import Property_4_2 from '../images/proyecto_4/pic_2.jpeg';
import Property_4_3 from '../images/proyecto_4/pic_3.jpeg';
import Property_4_4 from '../images/proyecto_4/pic_4.jpeg';
import Property_4_5 from '../images/proyecto_4/pic_5.jpeg';
import Property_4_6 from '../images/proyecto_4/pic_6.jpeg';
import Property_4_7 from '../images/proyecto_4/pic_7.jpeg';
import Property_4_8 from '../images/proyecto_4/pic_8.jpeg';
import Property_4_9 from '../images/proyecto_4/pic_9.jpeg';
import Property_4_10 from '../images/proyecto_4/pic_10.jpeg';
import Property_4_11 from '../images/proyecto_4/pic_11.jpeg';
import Property_4_12 from '../images/proyecto_4/pic_12.jpeg';
import Property_4_13 from '../images/proyecto_4/pic_13.jpeg';
import Property_4_14 from '../images/proyecto_4/pic_14.jpeg';

// Proyecto 5
import Property_5 from '../images/proyecto_5/pic_1.jpeg';
import Property_5_2 from '../images/proyecto_5/pic_2.jpeg';
import Property_5_3 from '../images/proyecto_5/pic_3.jpg';
import Property_5_4 from '../images/proyecto_5/pic_4.jpg';
import Property_5_5 from '../images/proyecto_5/pic_5.jpeg';
import Property_5_6 from '../images/proyecto_5/pic_6.jpeg';
import Property_5_7 from '../images/proyecto_5/pic_7.jpeg';
import Property_5_8 from '../images/proyecto_5/pic_8.jpeg';
import Property_5_9 from '../images/proyecto_5/pic_9.jpeg';
import Property_5_10 from '../images/proyecto_5/pic_10.jpeg';
import Property_5_11 from '../images/proyecto_5/pic_11.jpeg';
import Property_5_12 from '../images/proyecto_5/pic_12.jpeg';
import Property_5_13 from '../images/proyecto_5/pic_13.jpeg';
import Property_5_14 from '../images/proyecto_5/pic_14.jpeg';
import Property_5_15 from '../images/proyecto_5/pic_15.jpg';

// Proyecto 6
import Property_6 from '../images/proyecto_6/pic_1.jpeg';
import Property_6_2 from '../images/proyecto_6/pic_2.jpeg';
import Property_6_3 from '../images/proyecto_6/pic_3.jpeg';
import Property_6_4 from '../images/proyecto_6/pic_4.jpeg';

// Proyecto 7
import Property_7 from '../images/proyecto_7/pic_1.jpeg';
import Property_7_2 from '../images/proyecto_7/pic_2.jpeg';
import Property_7_3 from '../images/proyecto_7/pic_3.jpeg';

// Proyecto 8
import Property_8 from '../images/proyecto_8/pic_1.jpeg';
import Property_8_2 from '../images/proyecto_8/pic_2.jpeg';

export interface Project {
  title: string;
  location?: string;
  price?: string;
  images: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    title: "Casa Moderno",
    location: "CDMX",
    price: "$3.200.000",
    images: [Property_1, Property_1_2, Property_1_3, Property_1_4, Property_1_5],
    link: "/property/1",
  },
  {
    title: "Almacén Industrial",
    location: "Guadalajara",
    price: "$5.500.000",
    images: [Property_2, Property_2_2, Property_2_3, Property_2_4, Property_2_5],
    link: "/property/2",
  },
  {
    title: "Casa Minimalista",
    location: "Monterrey",
    price: "$4.100.000",
    images: [Property_3, Property_3_2, Property_3_3, Property_3_4, Property_3_5, Property_3_6, Property_3_7],
    link: "/property/3",
  },
  {
    title: "Almacén Logístico",
    location: "Querétaro",
    price: "$6.000.000",
    images: [Property_4, Property_4_2, Property_4_3, Property_4_4, Property_4_5, Property_4_6, Property_4_7, Property_4_8, Property_4_9, Property_4_10, Property_4_11, Property_4_12, Property_4_13, Property_4_14],
    link: "/property/4",
  },
  {
    title: "Almacén Logístico",
    location: "Querétaro",
    price: "$6.000.000",
    images: [Property_5, Property_5_2, Property_5_3, Property_5_4, Property_5_5, Property_5_6, Property_5_7, Property_5_8, Property_5_9, Property_5_10, Property_5_11, Property_5_12, Property_5_13, Property_5_14, Property_5_15],
    link: "/property/5",
  },
  {
    title: "Almacén Logístico",
    location: "Querétaro",
    price: "$6.000.000",
    images: [Property_6, Property_6_2, Property_6_3, Property_6_4],
    link: "/property/6",
  },
  {
    title: "Almacén Logístico",
    location: "Querétaro",
    price: "$6.000.000",
    images: [Property_7, Property_7_2, Property_7_3],
    link: "/property/7",
  },
  {
    title: "Almacén Logístico",
    location: "Querétaro",
    price: "$6.000.000",
    images: [Property_8, Property_8_2],
    link: "/property/8",
  },
];
