import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Icon from "@/components/ui/icon"

const photobooks = [
  {
    id: 1,
    title: "Классика",
    subtitle: "Строгий и элегантный стиль",
    color: "from-stone-100 to-stone-200",
    variants: [
      { name: "Мини", size: "15×15 см", pages: "20 разворотов", price: "1 800 ₽" },
      { name: "Стандарт", size: "20×20 см", pages: "25 разворотов", price: "2 500 ₽" },
      { name: "Большой", size: "25×25 см", pages: "30 разворотов", price: "3 200 ₽" },
      { name: "Панорама", size: "30×20 см", pages: "25 разворотов", price: "3 600 ₽" },
      { name: "Люкс", size: "30×30 см", pages: "40 разворотов", price: "4 900 ₽" },
    ],
  },
  {
    id: 2,
    title: "Акварель",
    subtitle: "Нежные пастельные тона",
    color: "from-pink-100 to-purple-100",
    variants: [
      { name: "Мини", size: "15×15 см", pages: "20 разворотов", price: "2 000 ₽" },
      { name: "Стандарт", size: "20×20 см", pages: "25 разворотов", price: "2 800 ₽" },
      { name: "Большой", size: "25×25 см", pages: "30 разворотов", price: "3 500 ₽" },
      { name: "Панорама", size: "30×20 см", pages: "25 разворотов", price: "3 900 ₽" },
      { name: "Люкс", size: "30×30 см", pages: "40 разворотов", price: "5 200 ₽" },
    ],
  },
  {
    id: 3,
    title: "Золото",
    subtitle: "Премиум с золотым тиснением",
    color: "from-yellow-100 to-amber-200",
    variants: [
      { name: "Мини", size: "15×15 см", pages: "20 разворотов", price: "2 500 ₽" },
      { name: "Стандарт", size: "20×20 см", pages: "25 разворотов", price: "3 400 ₽" },
      { name: "Большой", size: "25×25 см", pages: "30 разворотов", price: "4 200 ₽" },
      { name: "Панорама", size: "30×20 см", pages: "25 разворотов", price: "4 600 ₽" },
      { name: "Люкс", size: "30×30 см", pages: "40 разворотов", price: "6 000 ₽" },
    ],
  },
  {
    id: 4,
    title: "Природа",
    subtitle: "Свежие зелёные оттенки",
    color: "from-green-100 to-emerald-200",
    variants: [
      { name: "Мини", size: "15×15 см", pages: "20 разворотов", price: "1 900 ₽" },
      { name: "Стандарт", size: "20×20 см", pages: "25 разворотов", price: "2 600 ₽" },
      { name: "Большой", size: "25×25 см", pages: "30 разворотов", price: "3 300 ₽" },
      { name: "Панорама", size: "30×20 см", pages: "25 разворотов", price: "3 700 ₽" },
      { name: "Люкс", size: "30×30 см", pages: "40 разворотов", price: "5 000 ₽" },
    ],
  },
  {
    id: 5,
    title: "Ночное небо",
    subtitle: "Глубокий тёмно-синий стиль",
    color: "from-blue-200 to-indigo-300",
    variants: [
      { name: "Мини", size: "15×15 см", pages: "20 разворотов", price: "2 200 ₽" },
      { name: "Стандарт", size: "20×20 см", pages: "25 разворотов", price: "3 000 ₽" },
      { name: "Большой", size: "25×25 см", pages: "30 разворотов", price: "3 800 ₽" },
      { name: "Панорама", size: "30×20 см", pages: "25 разворотов", price: "4 200 ₽" },
      { name: "Люкс", size: "30×30 см", pages: "40 разворотов", price: "5 500 ₽" },
    ],
  },
]

export function PhotobooksSection() {
  const [selected, setSelected] = useState<(typeof photobooks)[0] | null>(null)

  return (
    <section className="bg-secondary px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-widest mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Фотокниги
        </motion.p>

        <motion.h2
          className="text-3xl md:text-5xl font-serif text-foreground mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Память, которую хочется держать в руках
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {photobooks.map((book, i) => (
            <motion.div
              key={book.id}
              className={`relative bg-gradient-to-br ${book.color} rounded-2xl p-6 cursor-pointer min-h-[220px] flex flex-col justify-between overflow-hidden group`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ scale: 0.97 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelected(book)}
              data-clickable
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-white/50 flex items-center justify-center mb-4">
                  <Icon name="BookOpen" size={20} className="text-foreground/70" />
                </div>
                <h3 className="font-serif text-xl text-foreground">{book.title}</h3>
                <p className="text-sm text-foreground/60 mt-1">{book.subtitle}</p>
              </div>
              <div className="flex items-center gap-1 text-sm text-foreground/50 mt-6 group-hover:text-foreground/80 transition-colors">
                <span>5 форматов</span>
                <Icon name="ArrowRight" size={14} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            />
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-background rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl"
                initial={{ scale: 0.9, y: 40 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 40 }}
                transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.4 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className={`bg-gradient-to-br ${selected.color} rounded-t-2xl p-8`}>
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm text-foreground/50 uppercase tracking-widest mb-1">Фотокнига</p>
                      <h2 className="font-serif text-3xl text-foreground">{selected.title}</h2>
                      <p className="text-foreground/60 mt-1">{selected.subtitle}</p>
                    </div>
                    <button
                      onClick={() => setSelected(null)}
                      className="w-9 h-9 rounded-full bg-white/50 flex items-center justify-center hover:bg-white/80 transition-colors"
                      data-clickable
                    >
                      <Icon name="X" size={16} />
                    </button>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  {selected.variants.map((variant, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center justify-between bg-secondary rounded-xl px-5 py-4 hover:bg-accent/20 transition-colors cursor-pointer"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.07 }}
                      data-clickable
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-medium text-primary">
                          {i + 1}
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{variant.name}</p>
                          <p className="text-xs text-muted-foreground">{variant.size} · {variant.pages}</p>
                        </div>
                      </div>
                      <span className="font-serif text-lg text-foreground">{variant.price}</span>
                    </motion.div>
                  ))}

                  <button className="w-full mt-4 py-3 px-6 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
                    Заказать фотокнигу
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}
