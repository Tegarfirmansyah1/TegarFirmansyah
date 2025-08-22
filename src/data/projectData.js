
export const projectData = [
  {
    slug: "ecommerce-platform",
    imgSrc: "/assets/images/project1.png",
    title: "E-commerce Platform",
    description: "A full-stack online shopping platform built with PHP and SQL.",
    longDescription: "Ini adalah platform e-commerce fungsional yang dibuat dari awal, mencakup fitur-fitur penting seperti katalog produk, keranjang belanja, proses checkout, dan panel admin untuk mengelola produk. Tujuannya adalah untuk memahami alur kerja e-commerce secara end-to-end.",
    challenges: "Tantangan utama adalah merancang skema database yang efisien untuk relasi antara user, produk, dan transaksi. Solusinya adalah dengan normalisasi database dan penggunaan query SQL yang dioptimalkan untuk performa.",
    tags: ["PHP", "SQL", "Bootstrap"],
    liveDemo: "https://tegar-firmansyah.vercel.app/maintenance", 
  },
  {
    slug: "chatting-web-prototype",
    imgSrc: "/assets/images/project2.png",
    title: "Prototipe Chating Web",
    description: "Desain UI/UX with prototype chatting web built with Figma.",
    longDescription: "Proyek ini berfokus pada desain antarmuka (UI) dan pengalaman pengguna (UX) untuk aplikasi web chatting. Prosesnya meliputi pembuatan wireframe, mockup high-fidelity, dan prototipe interaktif menggunakan Figma. Tujuannya adalah menciptakan desain yang bersih, intuitif, dan mudah digunakan.",
    challenges: "Menjaga konsistensi desain di berbagai komponen (chat bubbles, contact list, settings) adalah tantangan utama. Saya menyelesaikannya dengan membuat Design System sederhana di Figma, yang mencakup komponen, warna, dan tipografi yang dapat digunakan kembali.",
    tags: ["Figma", "CorelDraw", "UI/UX"],
    liveDemo: "https://www.figma.com/design/MVQmZn1wxAM6XS6YPnrOuK/Gars?node-id=0-1&m=dev&t=7TuSv3Pq0wuuqWdt-1",
  },
  {
    slug: "portfolio-website",
    imgSrc: "/assets/images/project3.png",
    title: "Portfolio Website",
    description: "Personal portfolio website built with Tailwind CSS and JavaScript.",
    longDescription: "Website ini adalah yang sedang Anda lihat sekarang! Dibangun menggunakan Next.js untuk performa server-side rendering dan di-styling dengan Tailwind CSS untuk pengembangan UI yang cepat. Tujuannya adalah untuk menciptakan portofolio yang cepat, responsif, dan menarik secara visual.",
    challenges: "Mengimplementasikan 'smooth scroll' yang akurat dengan offset untuk fixed navbar adalah tantangan kecil. Ini diselesaikan dengan menggunakan properti CSS 'scroll-margin-top' pada setiap section, sebuah solusi modern tanpa memerlukan JavaScript.",
    tags: ["Next.js", "React", "Tailwind CSS"],
    liveDemo: "https://tegar-firmansyah.vercel.app",
  },
   {
    slug: "shortened-url",
    imgSrc: "/assets/images/project4.png",
    title: "Shortened URL",
    description: "Shortened URL website built with Tailwind CSS and FullStack Next js.",
    longDescription: "Aplikasi ini memungkinkan pengguna untuk memendekkan URL yang panjang menjadi link yang lebih singkat dan mudah dibagikan. Dibangun secara full-stack dengan Next.js, aplikasi ini menangani request di sisi server, berinteraksi dengan database untuk menyimpan URL asli dan yang dipendekkan, serta menyediakan antarmuka yang bersih di sisi klien.",
    challenges: "Membangun logika untuk menghasilkan hash URL yang unik dan singkat secara konsisten. Saya mengatasinya dengan menggunakan algoritma hashing sederhana dan memastikan tidak ada kolisi di database sebelum menyimpan link baru.",
    tags: ["Next.js", "Full-Stack", "Tailwind CSS"],
    liveDemo: "https://5ort.vercel.app",
  }
];