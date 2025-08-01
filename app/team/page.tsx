import { FiLinkedin, FiMail } from 'react-icons/fi'

export const metadata = {
  title: 'Ekibimiz',
  description: 'Biri İleri Teknoloji A.Ş. ekibini tanıyın. Uzman kadromuz ve deneyimli profesyonellerimiz.',
}

const teamMembers = [
  {
    name: 'Ahmet Yılmaz',
    title: 'Kurucu & CEO',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    linkedin: 'https://linkedin.com/in/ahmet-yilmaz',
    email: 'ahmet@biri.com.tr',
    bio: '10+ yıllık teknoloji deneyimi ile şirketin vizyonunu belirliyor ve stratejik büyümeyi yönetiyor.'
  },
  {
    name: 'Ayşe Demir',
    title: 'CTO & Teknoloji Direktörü',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
    linkedin: 'https://linkedin.com/in/ayse-demir',
    email: 'ayse@biri.com.tr',
    bio: 'Yazılım mimarisi ve teknoloji stratejisi konularında uzman, modern çözümler geliştiriyor.'
  },
  {
    name: 'Mehmet Kaya',
    title: 'Baş Yazılım Geliştirici',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    linkedin: 'https://linkedin.com/in/mehmet-kaya',
    email: 'mehmet@biri.com.tr',
    bio: 'Full-stack geliştirme konusunda uzman, React, Node.js ve Python teknolojilerinde deneyimli.'
  },
  {
    name: 'Zeynep Özkan',
    title: 'UX/UI Tasarım Uzmanı',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
    linkedin: 'https://linkedin.com/in/zeynep-ozkan',
    email: 'zeynep@biri.com.tr',
    bio: 'Kullanıcı deneyimi ve arayüz tasarımı konularında uzman, modern ve kullanıcı dostu tasarımlar yaratıyor.'
  },
  {
    name: 'Can Arslan',
    title: 'DevOps Mühendisi',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
    linkedin: 'https://linkedin.com/in/can-arslan',
    email: 'can@biri.com.tr',
    bio: 'Cloud altyapısı ve CI/CD süreçleri konusunda uzman, güvenli ve ölçeklenebilir sistemler kuruyor.'
  },
  {
    name: 'Elif Yıldız',
    title: 'Proje Yöneticisi',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face',
    linkedin: 'https://linkedin.com/in/elif-yildiz',
    email: 'elif@biri.com.tr',
    bio: 'Agile metodolojiler konusunda uzman, projelerin zamanında ve bütçe dahilinde tamamlanmasını sağlıyor.'
  }
]

export default function TeamPage() {
  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-secondary-900 mb-6">
            Ekibimiz
          </h1>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Deneyimli ve uzman kadromuz ile teknoloji dünyasında fark yaratıyoruz. 
            Her birimiz kendi alanında uzmanlaşmış profesyoneller olarak, 
            müşterilerimize en iyi hizmeti sunmak için çalışıyoruz.
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-primary-200 font-medium">{member.title}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-secondary-600 mb-4 leading-relaxed">
                    {member.bio}
                  </p>
                  
                  <div className="flex space-x-3">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center hover:bg-primary-200 transition-colors duration-200"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <FiLinkedin className="text-primary-600" size={20} />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="w-10 h-10 bg-secondary-100 rounded-lg flex items-center justify-center hover:bg-secondary-200 transition-colors duration-200"
                      aria-label={`${member.name} Email`}
                    >
                      <FiMail className="text-secondary-600" size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="bg-primary-600 section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ekibimize Katılın
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Teknoloji dünyasında fark yaratmak isteyen yetenekli profesyoneller 
            arıyoruz. Siz de ekibimizin bir parçası olun!
          </p>
          <a
            href="mailto:hr@biri.com.tr"
            className="bg-white text-primary-600 hover:bg-secondary-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 inline-flex items-center"
          >
            İş Başvurusu Yap
            <FiMail className="ml-2" size={20} />
          </a>
        </div>
      </section>
    </div>
  )
} 