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
  lightsun,
  tecware,
  plan,
  tesla,
  shopify,
  gooclone,
  instaclone,
  movies,
  shopnxt,
  carrent,
  jobit,
  tripguide,
  threejs,
  enterprise,
  vercel,
  github,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Sobre",
  },
  {
    id: "work",
    title: "Trabalho",
  },
  {
    id: "contact",
    title: "Contato",
  },
];

const services = [
  {
    title: "Desenvolvedor Web",
    icon: web,
  },
  // {
  //   title: "React Native Developer",
  //   icon: mobile,
  // },
  {
    title: "Desenvolvedor Backend",
    icon: backend,
  },
  {
    title: "Criador de Conteúdo",
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
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Desenvolvedor React.js",
    company_name: "LightSun",
    icon: lightsun,
    iconBg: "#383E56",
    date: "Jun 2020 - Dez 2020 ",
    points: [
      "Empresa criada pelo meu irmão durante a pandemia.",
      "Responsável pelo desenvolvimento e implementação do front-end.",
      "Implementação de um design responsivo e assegurar a compatibilidade com os navegadores mais utilizados.",
      "https://lightsun.eco.br/",
    ],
  },
  {
    title: "Desenvolvedor React.js Júnior",
    company_name: "Tecware",
    icon: tecware,
    iconBg: "#E6DEDD",
    date: "Mai 2019 - Ago 2019",
    points: [
      "Desenvolvimento de um sistema de Central de Delivery com integração aos marketplaces iFood, Rappi e Uber eats.",
      "Desenvolvimento das telas e suas funcionalidades das Lojas com seus respectivos 'Marketplaces', Produtos por Loja, Listas de Preços de Produtos por Loja.",
    ],
  },
  {
    title: "Coordenador/Analista de Suporte",
    company_name: "Plan Automação",
    icon: plan,
    iconBg: "#383E56",
    date: "Mai 2014 - Abr 2017",
    points: [
      "Coordenação e supervisão das atividades da área de suporte técnico do sistema fast-food Colibri.",
      "Responsabilizar-se pela abertura de chamados, acompanhar a quantidade de chamados semanal e mensal através de relatórios.",
      "Realizar instalação de equipamentos e sistemas.",
      "Distribuição das atividades a serem realizadas de acordo com as necessidades identificadas e definidas.",
      "Agendamento de visitas para implantação e/ou treinamento no cliente.",
      "Suporte ao sistema Colibri e Retaguarda(nível crítico)",
      "Consultoria na parte de Retaguarda (estoque, financeiro).",
      "Feedback para a área de desenvolvimento para realizar as correções necessárias.",
    ],
  },
  {
    title: "Gastronotech SP",
    company_name: "Gastronotech Automação LTDA",
    icon: enterprise,
    iconBg: "#E6DEDD",
    date: "2008 - 2013",
    points: [
      "Suporte ao Sistema de Automação Bematech Chef.",
      "Manutenção no banco de dados do sistema e falhas no sistema.",
      "Feedback para a área de desenvolvimento para realizar as correções necessárias.",
      "Implantação e treinamento do sistema nos módulos: Vendas, Estoque e Financeiro; Configuração de ECF, TEF, Microterminal, PocketPC, Ipad, Ipod, comandas x64.",
      "Implantação de Servidores com Windows Server 2003/2008 de acordo com a necessidade do cliente. Instalação e configuração do MS SQL Server 2000/2005/2008 para funcionar de acordo com a necessidade do cliente.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Loja de Jogos",
    description:
      "Aplicação web que permite os usuários cadastrarem-se na plataforma e fazer compras de jogos digitais. Permite realizar buscas de jogos, visualizar compras, editar perfil. Possui parte administrativa, com uma Dashboard que permite Cadastrar, Editar, Excluir tudo relacionado aos jogos, visualizar as compras de cada usuário e fazer buscas. usuário: lero@lero.com | senha: 12345 ",

    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: shopnxt,
    source_code_link: "https://shopnxt.vercel.app/",
    icon: vercel,
  },
  {
    name: "Movies DB",
    description: "Aplicação web simples de filmes.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: movies,
    icon: github,
    source_code_link: "https://github.com/cassianpry/movies",
  },
  {
    name: "Instaclone",
    description:
      "Um clone do Instagram, onde os usuários podem cadastrar-se, postar e comentar.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: instaclone,
    icon: github,
    source_code_link: "https://github.com/cassianpry/instaclone",
  },
  {
    name: "Gooclone",
    description: "Um clone do buscador do google.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: gooclone,
    icon: github,
    source_code_link: "https://github.com/cassianpry/google-clone",
  },
];

export { services, technologies, experiences, testimonials, projects };
