import type React from "react"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const SQRT_5000 = Math.sqrt(5000)

// Running club testimonials data with randomly generated icons
const testimonials = [
  {
    tempId: 0,
    testimonial:
      "«Импульс танца» изменил жизнь моей дочери. Она пришла скромным ребёнком, а теперь выступает на сцене с такой уверенностью, что у меня слёзы на глазах каждый раз!",
    by: "Анна Соколова, мама ученицы",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=AnnaSokolova&backgroundColor=3b82f6&textColor=ffffff",
  },
  {
    tempId: 1,
    testimonial:
      "Я боялась начинать танцевать в 30 лет, но педагоги встретили меня с такой теплотой! Уже через месяц я влюбилась в занятия и не пропускаю ни одного.",
    by: "Марина Петрова, взрослая группа",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=MarinaPetrova&backgroundColor=10b981&textColor=ffffff",
  },
  {
    tempId: 2,
    testimonial:
      "Атмосфера в студии — это что-то особенное. Дети приходят на занятия с радостью, педагоги горят своим делом. Мой сын за полгода стал совершенно другим человеком!",
    by: "Дмитрий Козлов, папа ученика",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=DmitriyKozlov&backgroundColor=8b5cf6&textColor=ffffff",
  },
  {
    tempId: 3,
    testimonial:
      "Профессионализм преподавателей на высшем уровне. Моя дочь занимается уже два года, участвует в конкурсах и постоянно берёт призовые места. Очень гордимся!",
    by: "Светлана Иванова, мама ученицы",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=SvetlanaIvanova&backgroundColor=ef4444&textColor=ffffff",
  },
  {
    tempId: 4,
    testimonial:
      "«Импульс танца» — это не просто студия, это семья. Дети здесь дружат, поддерживают друг друга и растут вместе. Лучшее место для ребёнка в Новосибирске!",
    by: "Елена Новикова, мама ученицы",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=ElenaNovikova&backgroundColor=f59e0b&textColor=ffffff",
  },
  {
    tempId: 5,
    testimonial:
      "Записала дочку в 5 лет, и это было лучшее решение в нашей жизни. Танцы дали ей пластику, координацию и безграничную уверенность в себе. Спасибо педагогам!",
    by: "Ольга Морозова, мама ученицы",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=OlgaMorozova&backgroundColor=6366f1&textColor=ffffff",
  },
  {
    tempId: 6,
    testimonial:
      "Я занимаюсь в группе для взрослых уже год. Это лучшая инвестиция в себя — и физическая форма, и отличное настроение после каждого занятия. Рекомендую всем!",
    by: "Алексей Рахимов, взрослая группа",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=AlexeyRahimov&backgroundColor=ec4899&textColor=ffffff",
  },
  {
    tempId: 7,
    testimonial:
      "Переехали в Новосибирск и сразу нашли «Импульс танца». Дочка влилась в коллектив мгновенно — педагоги очень внимательны к каждому ребёнку. Счастливы, что нашли эту студию!",
    by: "Наталья Ким, мама ученицы",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=NatalyaKim&backgroundColor=06b6d4&textColor=ffffff",
  },
  {
    tempId: 8,
    testimonial:
      "Первое выступление сына на сцене — это незабываемый момент для всей семьи. Педагоги так тщательно готовят детей, что они выходят на сцену без тени страха.",
    by: "Михаил Соловьёв, папа ученика",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=MikhailSolovyev&backgroundColor=f97316&textColor=ffffff",
  },
  {
    tempId: 9,
    testimonial:
      "Программа обучения просто великолепна — всё структурировано, дети развиваются планомерно. Видно, что педагоги вкладывают душу в каждое занятие. Огромная благодарность!",
    by: "Кристина Волкова, мама ученицы",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=KristinaVolkova&backgroundColor=84cc16&textColor=ffffff",
  },
  {
    tempId: 10,
    testimonial:
      "Танцы в «Импульсе» — это не просто хобби, это настоящая школа жизни. Дисциплина, командная работа, творчество. Сын стал более собранным и ответственным.",
    by: "Тимур Асланов, папа ученика",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=TimurAslanov&backgroundColor=059669&textColor=ffffff",
  },
  {
    tempId: 11,
    testimonial:
      "Студия с душой! Педагоги помнят каждого ребёнка по имени, знают его особенности и находят индивидуальный подход. Дочь бежит на занятия с огромным удовольствием.",
    by: "Нина Павлова, мама ученицы",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=NinaPavlova&backgroundColor=0ea5e9&textColor=ffffff",
  },
  {
    tempId: 12,
    testimonial:
      "Начинали с нулём — теперь мой ребёнок занимает призовые места на городских конкурсах! Это заслуга потрясающих педагогов «Импульса танца».",
    by: "Роман Ким, папа ученицы",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=RomanKim&backgroundColor=dc2626&textColor=ffffff",
  },
  {
    tempId: 13,
    testimonial:
      "Никогда не думала, что начну танцевать во взрослом возрасте, но в «Импульсе» так комфортно и весело, что забываешь обо всех сомнениях. Теперь не представляю жизни без танцев!",
    by: "Екатерина Орлова, взрослая группа",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=EkaterinaOrlova&backgroundColor=7c3aed&textColor=ffffff",
  },
  {
    tempId: 14,
    testimonial:
      "Качество обучения очень высокое, а цены вполне доступные. Дочка занимается с удовольствием, мы видим прогресс уже после первых месяцев. Отличная студия!",
    by: "Даниил Пак, папа ученицы",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=DaniilPak&backgroundColor=ea580c&textColor=ffffff",
  },
  {
    tempId: 15,
    testimonial:
      "«Импульс танца» — это праздник каждый день. Отчётные концерты — просто шедевры! Вся семья приходит болеть и уходит в полном восторге.",
    by: "Раиса Грин, бабушка ученицы",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=RaisaGrin&backgroundColor=16a34a&textColor=ffffff",
  },
  {
    tempId: 16,
    testimonial:
      "Три года в студии — и дочка уже сама помогает малышам на занятиях. Педагоги воспитывают не только танцоров, но и настоящих лидеров. Это бесценно!",
    by: "Кирилл Вонг, папа ученицы",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=KirillVong&backgroundColor=2563eb&textColor=ffffff",
  },
  {
    tempId: 17,
    testimonial:
      "Хореография здесь на очень высоком уровне. Постановки красивые, музыкальные, дети всегда выглядят великолепно на сцене. Горжусь своей дочерью!",
    by: "Александра Фостер, мама ученицы",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=AlexandraFoster&backgroundColor=be185d&textColor=ffffff",
  },
  {
    tempId: 18,
    testimonial:
      "Занимаюсь в «Импульсе» уже полгода. За это время похудела, улучшила осанку и нашла замечательных подруг. Танцы — лучшее, что я делала для себя!",
    by: "Карина Мендес, взрослая группа",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=KarinaMendez&backgroundColor=0891b2&textColor=ffffff",
  },
  {
    tempId: 19,
    testimonial:
      "Сын пришёл застенчивым, а теперь выходит на сцену первым. Педагоги «Импульса танца» умеют раскрыть каждого ребёнка. Это настоящий талант — учить с душой!",
    by: "Виктория Степанова, мама ученика",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=VictoriaStefanova&backgroundColor=7c3aed&textColor=ffffff",
  },
]

interface TestimonialCardProps {
  position: number
  testimonial: (typeof testimonials)[0]
  handleMove: (steps: number) => void
  cardSize: number
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ position, testimonial, handleMove, cardSize }) => {
  const isCenter = position === 0
  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out",
        isCenter
          ? "z-10 bg-gray-900 text-white border-gray-900"
          : "z-0 bg-white text-gray-900 border-gray-200 hover:border-gray-400",
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%)
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px hsl(var(--border))" : "0px 0px 0px 0px transparent",
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-gray-300"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2,
        }}
      />
      <img
        src={testimonial.imgSrc || "/placeholder.svg"}
        alt={`${testimonial.by.split(",")[0]}`}
        className="mb-4 h-14 w-12 bg-gray-100 object-cover object-top"
        style={{
          boxShadow: "3px 3px 0px hsl(var(--background))",
        }}
      />
      <h3 className={cn("text-base sm:text-xl font-medium", isCenter ? "text-white" : "text-gray-900")}>
        "{testimonial.testimonial}"
      </h3>
      <p
        className={cn(
          "absolute bottom-8 left-8 right-8 mt-2 text-sm italic",
          isCenter ? "text-gray-300" : "text-gray-600",
        )}
      >
        - {testimonial.by}
      </p>
    </div>
  )
}

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365)
  const [testimonialsList, setTestimonialsList] = useState(testimonials)

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList]
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift()
        if (!item) return
        newList.push({ ...item, tempId: Math.random() })
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop()
        if (!item) return
        newList.unshift({ ...item, tempId: Math.random() })
      }
    }
    setTestimonialsList(newList)
  }

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)")
      setCardSize(matches ? 365 : 290)
    }
    updateSize()
    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  return (
    <div className="relative w-full overflow-hidden bg-white" style={{ height: 600 }}>
      {testimonialsList.map((testimonial, index) => {
        const position =
          testimonialsList.length % 2 ? index - (testimonialsList.length + 1) / 2 : index - testimonialsList.length / 2
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        )
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-white border-2 border-gray-300 hover:bg-gray-900 hover:text-white",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2",
          )}
          aria-label="Предыдущий отзыв"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-white border-2 border-gray-300 hover:bg-gray-900 hover:text-white",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2",
          )}
          aria-label="Следующий отзыв"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  )
}