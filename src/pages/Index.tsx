import HeroSection from "@/components/HeroSection"
import { TextGradientScroll } from "@/components/ui/text-gradient-scroll"
import { Timeline } from "@/components/ui/timeline"
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials"
import { motion } from "framer-motion"
import SmoothScrollHero from "@/components/ui/smooth-scroll-hero"

export default function Index() {
  const missionStatement =
    "В студии «Импульс танца» мы верим: танец — это не просто движение, это язык души. Основанная в Новосибирске, наша студия объединяет детей и взрослых, которых связывает страсть к творчеству и самовыражению. Занимаешься ли ты впервые или уже выступаешь на сцене — мы здесь, чтобы раскрыть твой потенциал. Профессиональные педагоги, дружелюбная атмосфера и уникальная программа обучения помогут тебе найти себя в танце. Присоединяйся к нам — танцуй ради радости, свободы и вдохновения!"

  const timelineEntries = [
    {
      id: 1,
      image: "https://cdn.poehali.dev/projects/bd9e989e-d19a-418f-9e0e-036ff97f2339/files/e108e11e-d563-43d5-aded-39ae9db25451.jpg",
      alt: "Первые шаги в танце",
      title: "Первые шаги в танце",
      description:
        "Танец начинается с первых движений! Мы принимаем детей и взрослых без опыта и помогаем им открыть мир хореографии. Уникальная программа обучения адаптирована под каждого ученика — важна не подготовка, а желание танцевать.",
      layout: "left" as const,
    },
    {
      id: 2,
      image: "https://cdn.poehali.dev/projects/bd9e989e-d19a-418f-9e0e-036ff97f2339/files/e108e11e-d563-43d5-aded-39ae9db25451.jpg",
      alt: "Профессиональные педагоги студии",
      title: "Профессиональные педагоги",
      description:
        "Наши преподаватели — опытные хореографы с многолетней практикой. Они не просто учат технике, но и вдохновляют, поддерживают и помогают каждому ученику найти свой стиль. Здесь каждый найдет своего наставника.",
      layout: "right" as const,
    },
    {
      id: 3,
      image: "https://cdn.poehali.dev/projects/bd9e989e-d19a-418f-9e0e-036ff97f2339/files/e108e11e-d563-43d5-aded-39ae9db25451.jpg",
      alt: "Выступления и конкурсы",
      title: "Сцена ждет тебя",
      description:
        "Танец — это не только занятия в зале, это яркие выступления, конкурсы и незабываемые эмоции. В «Импульсе танца» каждый ученик получает возможность выйти на сцену и почувствовать восторг аплодисментов. Стань частью нашей большой танцевальной семьи!",
      layout: "left" as const,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Mission Statement Section with Grid Background */}
      <section id="mission" className="relative min-h-screen flex items-center justify-center py-20 bg-white">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black tracking-wider mb-12 text-gray-900">О НАС</h2>
            <TextGradientScroll
              text={missionStatement}
              className="text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed text-gray-800"
              type="word"
              textOpacity="soft"
            />
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="community" className="relative py-20 bg-white">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

        <div className="relative z-10">
          <div className="container mx-auto px-6 mb-16">
            <div className="text-center">
              <h2 className="text-4xl md:text-6xl font-black tracking-wider mb-6 text-gray-900">НАШИ НАПРАВЛЕНИЯ</h2>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
                Для детей и взрослых — от первых шагов до выступлений на сцене.
              </p>
            </div>
          </div>

          <Timeline entries={timelineEntries} />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative py-20 bg-white">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-black tracking-wider text-gray-900 mb-6">
              Что говорят наши{" "}
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">УЧЕНИКИ</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
              Реальные истории от учеников и родителей, которые нашли себя в танце вместе с «Импульсом танца».
            </p>
          </motion.div>

          <StaggerTestimonials />
        </div>
      </section>

      {/* Smooth Scroll Hero with CTA Overlay */}
      <section id="join" className="relative">
        <SmoothScrollHero
          scrollHeight={2500}
          desktopImage="/images/runners-motion-blur.png"
          mobileImage="/images/runners-motion-blur.png"
          initialClipPercentage={30}
          finalClipPercentage={70}
        />
      </section>
    </div>
  )
}