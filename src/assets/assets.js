import logo from './logo.svg'
import cross_icon from './cross_icon.svg'
import menu_icon from './menu_icon.svg'
import star_icon from './star_icon.svg'
import left_arrow from './left_arrow.svg'
import right_arrow from './right_arrow.svg'
import header_img from './header_img.png'
import brand_img from './brand_img.png'
import project_img_1 from './project_img_1.png'
import project_img_2 from './project_img_2.png'
import project_img_3 from './project_img_3.png'
import project_img_4 from './project_img_4.png'
import project_img_5 from './project_img_5.png'
import project_img_6 from './project_img_6.png'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import profile_img_3 from './profile_img_3.png'

export const assets = {
    logo,
    cross_icon,
    menu_icon,
    star_icon,
    header_img,
    brand_img,
    project_img_1,
    project_img_2,
    project_img_3,
    project_img_4,
    left_arrow,
    right_arrow,
}

export const projectsData = [
    {
      title: "Bellevue Hill",
      location: "Sydney",
      image: project_img_1
    },
    {
      title: "Brighton",
      location: "Melbourne",
      image: project_img_2
    },
    {
      title: "Unley Park",
      location: "Adelaide",
      image: project_img_3
    },
    {
      title: "Hamiltone",
      location: "Brisbane",
      image: project_img_4
    },
    {
      title: "Point Piper",
      location: "Sydney",
      image: project_img_5
    },
    {
      title: "Dalkeith",
      location: "Perth",
      image: project_img_6
    },
    
  ];

  export const testimonialsData = [
    {
        name: "Donald Jackman",
        title: "Marketing Manager",
        image: profile_img_1,
        alt: "Portrait of Donald Jackman",
        rating: 5,
        text: "Working with Titan Homes was the best decision we made during our home-buying journey. Their team was knowledgeable, responsive, and genuinely cared about finding the perfect home for our family. We never felt pressured — only supported. Highly recommended!"
    },
    {
        name: "Maria White",
        title: "Project Manager",
        image: profile_img_2,
        alt: "Portrait of Richard Nelson",
        rating: 4,
        text: "I was nervous about buying my first investment property, but Titan Homes made the process incredibly smooth. They explained everything clearly, helped with negotiations, and handled every detail with professionalism. I’ll definitely work with them again!"
    },
    {
        name: "James Washington",
        title: "Co-Founder",
        image: profile_img_3,
        alt: "Portrait of James Washington",
        rating: 5,
        text: "Titan Homes didn’t just help us find a house — they helped us build a future. Their local knowledge, honest advice, and dedication to our needs were unmatched. It truly felt like working with a partner, not just an agent"
    }
];