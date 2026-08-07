import { Link } from "react-router-dom";
import { ArrowRight, Clock, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeUp, slideLeft, slideRight, stagger, viewport } from "@/hooks/useMotion";
import { blogPostsList } from "@/data/blog";
import { useBlogImages } from "@/hooks/useBlogImages";

export const ArticlesSection = () => {
  const { getHeroImage } = useBlogImages();
  const recentArticles = blogPostsList.slice(0, 3);

  return (
    <section className="py-20 bg-slate-50/70 border-y border-slate-100 dark:bg-slate-900/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger(0.1)}
        >
          <motion.div className="space-y-3 max-w-2xl" variants={slideLeft}>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-700 font-semibold uppercase tracking-wider text-xs border border-amber-500/20">
              <BookOpen size={14} className="text-amber-600" /> Knowledge Hub
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
              Latest Articles & <span className="text-gradient">Facade Guides</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base">
              Expert advice, cost breakdowns, and technical guides to help you make informed decisions for your facade projects.
            </p>
          </motion.div>
          <motion.div variants={slideRight}>
            <Link to="/blog">
              <Button variant="outline" className="group border-amber-500/30 hover:border-amber-600 hover:bg-amber-500/10 text-slate-800 dark:text-white font-semibold">
                View All Articles
                <ArrowRight className="ml-2 h-4 w-4 text-amber-600 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Articles Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger(0.12)}
        >
          {recentArticles.map((article, index) => (
            <motion.div key={article.slug} variants={fadeUp}>
              <Link
                to={`/blog/${article.slug}`}
                className="group flex flex-col h-full bg-white dark:bg-slate-800/90 rounded-2xl overflow-hidden shadow-sm border border-slate-200/80 dark:border-slate-700/60 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
              >
                {/* Thumbnail Image */}
                <div className="aspect-[16/10] overflow-hidden relative bg-slate-100">
                  <img
                    src={getHeroImage(article.slug, article.heroImage)}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading={index === 0 ? "eager" : "lazy"}
                    width="600"
                    height="375"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-600 text-white shadow-md">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
                      <Clock size={13} className="text-amber-600" />
                      <span>{article.readTime}</span>
                      <span>•</span>
                      <span>{article.date}</span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors line-clamp-2">
                      {article.title}
                    </h3>

                    <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 text-sm font-bold text-amber-600 dark:text-amber-400 pt-2 border-t border-slate-100 dark:border-slate-700/50">
                    Read Full Article
                    <ArrowRight
                      size={15}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
