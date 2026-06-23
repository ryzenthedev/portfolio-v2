import {
  SiReact,
  SiVite,
  SiJavascript,
  SiHtml5,
  // ryzenthedev & swarthy
  SiCss,
  SiFigma,
  SiTailwindcss,
  SiGithub,
  SiTypescript,
  SiPython,
  SiNodedotjs,
  SiNextdotjs,
  SiRedux,
  SiSass,
  SiVercel,
} from 'react-icons/si'

export const content = {
  tr: {
    nav: {
      home: 'Ana Sayfa',
      about: 'Hakkımda',
      projects: 'Projelerim',
      contact: 'İletişim',
    },
    hero: {
      eyebrow: 'Merhaba, Hoşgeldiniz.',
      name: ' Ben, bir geliştiriciyim.',
      tagline: 'Genç bir geliştirici olarak, modern web deneyimleri yaratıyorum.',
      // ryzenthedev & swarthy
      cta: 'Daha Fazla Görüntüle',
    },
    about: {
      pageTitle: 'Hakkımda',
      title: 'Ben Kimim?',
      technologiesTitle: 'Kullandığım Teknolojiler',
      body: `Merhaba, ben bir yazılım geliştiricisiyim.

Yazılım ve teknoloji dünyasına olan yolculuğum, henüz çocukluk yaşlarımda dijital sistemlerin nasıl çalıştığına duyduğum merakla başladı. Bu merak, satırlara ilk kodlarımı döktüğümde profesyonel bir tutkuya dönüştü. O günden bu yana, sadece kod yazmayı değil; bir problemi en efektif şekilde nasıl çözeceğimi, modern teknolojilerin sınırlarını nasıl zorlayacağımı ve kullanıcı deneyimini en üst seviyeye nasıl taşıyacağımı öğrenmek için aralıksız bir gelişim süreci içerisindeyim.

Eğitim ve Akademik Temeller
Lise’den başarıyla mezun olduktan sonra, bilgisayar bilimleri ve yazılım mühendisliği alanında sağlam bir eğitim almak için çalışıyorum. Yazılım benim için sadece bir meslek değil; sürekli değişen dünyaya ayak uydurma ve geleceği inşa etme biçimidir.

Teknik Vizyon ve Uzmanlık Alanları
Yazılım dünyasının uçsuz bucaksız bir derya olduğunun bilincindeyim. Bu nedenle kendimi tek bir teknoloji ile sınırlamak yerine; Frontend teknolojileri, modern JavaScript kütüphaneleri ve performans odaklı sistemler üzerinde derinleşmeye odaklanıyorum. Geliştirdiğim her projede temiz kod (Clean Code) prensiplerini benimseyerek, sürdürülebilir ve ölçeklenebilir yapılar kurmayı amaçlıyorum. Yeni çıkan teknolojileri, frameworkleri ve sektörel trendleri yakından takip ederek portfolyomu her geçen gün daha kompleks ve işlevsel projelerle zenginleştiriyorum.

Gelecek Hedefleri
Öncelikli hedefim, yazılım mimarileri konusunda uzmanlaşarak karmaşık sistemlerin yönetilmesinde aktif rol oynamaktır. Problem çözme yeteneğim, analitik düşünme yapım ve öğrenmeye olan bitmek bilmeyen açlığımla, teknoloji ekosistemine değer katan bir mühendis olmayı amaçlıyorum. Sadece kod yazan biri değil, çözüm üreten, fark yaratan ve teknolojiye yön veren projelerin bir parçası olmak için her gün bir önceki günden daha fazla çalışıyorum.`
    },
    projects: {
      title: 'Öne Çıkan Projeler',
      body: 'React, Vite ve modern web teknolojileri kullanarak şık ve performanslı deneyimler yaratıyorum.',
      pageTitle: 'Projeler',
      heroDescription: 'Yaptığım işlerden seçkiler, detaylı bakmak için sayfayı aşağı kaydır.',
      noProjects: 'GitHub profilinden proje verisi yükleniyor veya uygun proje bulunamadı.',
      seeMore: 'Daha Fazla Görüntüle',
      defaultProjectDescription: 'GitHub deposu üzerinden eklenen proje.',
    },
    contact: {
      title: 'İletişim',
      body: 'Projeleriniz ve iş birliği için bana ulaşabilirsiniz.',
      heroDescription: 'Proje teklifleri, iş birliği veya sorularınız için buradan bana ulaşabilirsiniz.',
      formLabels: {
        name: 'İsim',
        email: 'E-posta',
        message: 'Mesaj',
      },
      placeholders: {
        name: 'Adınız',
        email: 'mail@ornek.com',
        message: 'Mesajınız...',
      },
      submit: 'Gönder',
      mailSubject: 'Yeni iletişim talebi',
      labels: {
        name: 'İsim',
        email: 'E-posta',
        message: 'Mesaj',
      },
    },
    projectDetail: {
      duration: 'Süre',
      github: "GitHub'a Git",
      githubLink: 'GitHub sayfasını aç',
      stats: 'İstatistikler',
      about: 'Proje Hakkında',
      technologies: 'Kullandığım Teknolojiler',
      back: 'Tüm Projelere Dön',
    },
    notFound: {
      eyebrow: '404 - Sayfa Bulunamadı',
      title: 'Bu sayfa kaybolmuş gibi gözüküyor.',
      description: 'Aradığınız içerik artık burada değil. Sanki bağlantı bir hata aldı. Ana sayfaya dönebilir veya projelerimi görüntüleyerek hızlıca tekrar yol alabilirsiniz.',
      home: 'Ana Sayfaya Dön',
      projects: 'Projelerime Git',
    },
    footer: {
      copy: '© 2026 ryzenthedev. Tüm hakları saklıdır.',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      eyebrow: 'Hello, welcome.',
      name: ' I am a developer.',
      tagline: 'As a young developer, I create modern web experiences.',
      cta: 'Learn More',
    },
    about: {
      pageTitle: 'About',
      title: 'Who am I?',
      technologiesTitle: 'Technologies I Use',
      body: `Hello, I’m a software developer.

My journey into software and technology began in childhood with a strong curiosity about how digital systems work. This curiosity became a professional passion when I wrote my first lines of code. Since then, I have been continuously learning not only how to write code but also how to solve problems in the most effective way, push the boundaries of modern technologies, and deliver exceptional user experiences.

Education and Academic Background
After graduating from high school, I have been building a foundation for further education in computer science and software engineering. For me, software is not just a profession; it is a way to keep up with a constantly changing world and build the future.

Technical Vision and Expertise
I understand that the software world is an endless ocean. Therefore, instead of limiting myself to a single technology, I focus on deepening my knowledge in frontend technologies, modern JavaScript libraries, and performance-oriented systems. In every project I develop, I embrace clean code principles to build maintainable and scalable architectures. I follow new technologies, frameworks, and industry trends closely, enriching my portfolio with increasingly complex and functional projects.

Future Goals
My primary goal is to become an expert in software architecture and play an active role in managing complex systems. With my problem-solving skills, analytical mindset, and endless hunger for learning, I aim to become an engineer who adds value to the technology ecosystem. I work every day to be part of projects that produce solutions, make a difference, and lead technology, not just someone who writes code.`
    },
    projects: {
      title: 'Featured Projects',
      body: 'I build elegant, high-performance experiences using React, Vite, and modern web technologies.',
      pageTitle: 'Projects',
      heroDescription: 'A selection of my work, scroll down for more details.',
      noProjects: 'Loading project data from GitHub or no suitable projects were found.',
      seeMore: 'See More',
      defaultProjectDescription: 'Project added via GitHub repository.',
    },
    contact: {
      title: 'Contact',
      body: 'You can reach out for projects and collaboration.',
      heroDescription: 'Contact me for project offers, collaborations, or questions.',
      formLabels: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
      },
      placeholders: {
        name: 'Your name',
        email: 'mail@example.com',
        message: 'Your message...',
      },
      submit: 'Send',
      mailSubject: 'New contact request',
      labels: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
      },
    },
    projectDetail: {
      duration: 'Duration',
      github: 'Go to GitHub',
      githubLink: 'Open GitHub page',
      stats: 'Statistics',
      about: 'About the Project',
      technologies: 'Technologies I Use',
      back: 'Back to all projects',
    },
    notFound: {
      eyebrow: '404 - Page Not Found',
      title: 'This page seems to have wandered off.',
      description: 'The content you are looking for is no longer here. You can return home or browse my projects to get back on track.',
      home: 'Return Home',
      projects: 'Go to Projects',
    },
    footer: {
      copy: '© 2026 ryzenthedev. All rights reserved.',
    },
  },
}

export const aboutTechnologies = [
  {
    title: 'React',
    icon: <SiReact />,
  },
  {
    title: 'Vite',
    icon: <SiVite />,
  },
  {
    title: 'JavaScript',
    icon: <SiJavascript />,
  },
  {
    title: 'HTML',
    icon: <SiHtml5 />,
  },
  {
    title: 'CSS',
    icon: <SiCss />,
  },
  {
    title: 'Tailwind CSS',
    icon: <SiTailwindcss />,
  },
  {
    title: 'Next.js',
    icon: <SiNextdotjs />,
  },
  {
    title: 'Vercel',
    icon: <SiVercel />,
  },
  {
    title: 'Typescript',
    icon: <SiTypescript />,
  },
]

const techIconMap = {
  React: <SiReact />,
  Vite: <SiVite />,
  JavaScript: <SiJavascript />,
  TypeScript: <SiTypescript />,
  HTML: <SiHtml5 />,
  CSS: <SiCss />,
  Python: <SiPython />,
  'Node.js': <SiNodedotjs />,
  Node: <SiNodedotjs />,
  'Next.js': <SiNextdotjs />,
  'Tailwind CSS': <SiTailwindcss />,
  'Framer Motion': <SiFigma />,
  Redux: <SiRedux />,
  Sass: <SiSass />,
  'Responsive Tasarım': <SiTailwindcss />,
}

export const normalizeTechLabel = (tech) => tech.replace(/\s*\d+%$/, '')

export const getTechIcon = (tech) => techIconMap[normalizeTechLabel(tech)] || <SiGithub />

export const normalizeSlug = (value) =>
  value
    .toString()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

export const projectSummaries = {
  'react-website': 'Portföyüm için geliştirdiğim ilk web sitesi.'
}

export const projectDurations = {
  'react-website': {
    tr: 'Geliştirme Sürecinde',
    en: 'In development',
  },
}

export const createRepoTitle = (repoName) =>
  repoName
    .split(/[-_]/)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')
