import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Java Developer",
      icon: web,
    },
    {
      title: "Web Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Competitive Coder",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Python and MySQL",
      company_name: "School",
      icon: starbucks,
      iconBg: "#383E56",
      date: "August 2021 - June 2022",
      points: [
        "Variables, data types, conditional statements, loops, functions, modules, input/output, lists, dictionaries, tuples, strings, file handling, exceptions, classes, objects, inheritance, polymorphism, encapsulation, decorators, and generators.",
        "Tables, columns, rows, indexes, queries, joins, relationships, constraints, transactions, stored procedures, triggers, views, backups, user management and etc.",
        "Using Python and MySQL, I created a library management system.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "College",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "June 2022 - January 2023",
      points: [
        "I started studying HTML, CSS, and vanilla Javascript, and I made projects like textutils and calculator.",
        "After learning about those technologies, I began studying PHP for backend development, and I used it to build an 'application form website' a project that used CRUD operations.",
        "then started learning ReactJs and NextJs and created some web applications.",
        "I used ReactJs and NextJs to build an Amazon clone and an e-commerce website, respectively.",
      ],
    },
    {
      title: "Data Structures and Algorithms",
      company_name: "College",
      icon: shopify,
      iconBg: "#383E56",
      date: "June 2022 - Feb 2023",
      points: [
        "Arrays, linked lists, stacks, queues, trees, graphs, sorting algorithms (e.g. bubble, insertion, quicksort), searching algorithms (e.g. linear, binary, hash).",
        "Dynamic programming, divide and conquer, greedy algorithms, heap, hash table, trie, segment tree, binary indexed tree, suffix tree, balanced search tree, Dijkstra's algorithm, A* algorithm, Floyd-Warshall algorithm, Knapsack problem, traveling salesman problem.",
        "5 ⭐ Programing in C in Hackerrank",
        "5 ⭐ Programing in Java in Hackerrank",
      ],
    },
    {
      title: "Java Developer",
      company_name: "iNeuron",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "I am familiar with networking, dynamic memory allocation, and Core Java's Oops.",
        "Using Java and OOP concepts like encapsulation, inheritance, and polymorphism, I developed the Guesser game.",
        "I am also familiar with advanced Java technologies like Servlet and JSP.",
        "I'm working on microservices, Hibernet, spring boot, and the spring framework in Java. ",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Vaibhav Jain",
      designation: "Prof.",
      company: "iNurture",
      image: "https://media.licdn.com/dms/image/C4E03AQERte_X_AeCCQ/profile-displayphoto-shrink_100_100/0/1632243044166?e=1684972800&v=beta&t=0EmZIJlJ70qD0Jx4lme4e9zR6G58ERhBHGhU-Q8j1V0",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Smriti Jain",
      designation: "Prof.",
      company: "iNurture",
      image: "https://media.licdn.com/dms/image/C4D03AQG3C9-og_2N_w/profile-displayphoto-shrink_400_400/0/1648026979847?e=1684972800&v=beta&t=mvzqeC_8VcOOAz6b1cXlG0F1Uh1Cqs_Vf2i8it0HX8A",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lokesh Sahu",
      designation: "Prof.",
      company: "iNurture",
      image: "https://media.licdn.com/dms/image/D4D03AQF6i_PT1JKqyg/profile-displayphoto-shrink_400_400/0/1667794581080?e=1684972800&v=beta&t=qIwWmwxW79erqh9F3M7xnfSiyTAkKe9oqUsrLX542Bk",
    },
  ];
  
  const projects = [
    {
      name: "RealTimeLocationTracking",
      description:
        "Real-time tracking of locations You have a full range of universities to choose from in this app or webapp, and the website will guide you there.",
      tags: [
        {
          name: "HTML, CSS",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "green-text-gradient",
        },
        {
          name: "PHP",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/priyanshugour70/Real-Time-Location-Tracking-website",
    },
    {
      name: "WebMart-360",
      description:
        "Web application Given that WebMart-360 is an exact replica of Amazon, including all features, it is an e-commerce website with all of Amazon's functionality.",
      tags: [
        {
          name: "React.Js",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/priyanshugour70/WebMart-360",
    },
    {
      name: "3D Portfolio",
      description:
        "You can see the potential and excellence of all technologies in my 3D portfolio, which was also created by me using ViteJs, ThreeJs and ReactJs.",
      tags: [
        {
          name: "React.Js",
          color: "blue-text-gradient",
        },
        {
          name: "Three.Js",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/priyanshugour70/3D-Portfolio-using-Vite-ReactJs",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };