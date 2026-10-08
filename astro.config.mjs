// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeGalaxy from "starlight-theme-galaxy";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

export default defineConfig({
  site: "https://codeelite.ir",
  compressHTML: true, // فشرده‌سازی و حذف فاصله‌های خالی کدهای HTML
  prefetch: {
    prefetchAll: false,
    defaultStrategy: "hover", // به محض بردن ماوس روی لینک پیش‌بارگذاری شود
  },
  devToolbar: {
    enabled: false,
  },
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
  integrations: [
    starlight({
      title: "علی اکبر حسن زاده",
      head: [
        {
          tag: "script",
          content: `
            function handleProgressBar() {
              const progressBar = document.querySelector('.progress-scroll-container');
              if (!progressBar) return;

              const path = window.location.pathname.replace(/\\/+$/, '');
              const isExcluded = path === '' || path.includes('/about');

              if (isExcluded) {
                progressBar.style.setProperty('display', 'none', 'important');
              } else {
                progressBar.style.setProperty('display', 'block', 'important');
              }
            }

            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', handleProgressBar);
            } else {
              handleProgressBar();
            }
            document.addEventListener('astro:page-load', handleProgressBar);
            document.addEventListener('astro:after-swap', handleProgressBar);
          `,
        },
      ],
      defaultLocale: "root",
      locales: {
        root: {
          label: "فارسی",
          lang: "fa",
          dir: "rtl",
        },
      },
      customCss: ["katex/dist/katex.min.css", "./src/styles/custom.css"],
      components: {
        Sidebar: "./src/components/CustomSidebar.astro",
        Footer: "./src/components/CustomFooter.astro",
      },
      plugins: [starlightThemeGalaxy()],
      social: [
        // {
        //   icon: "github",
        //   label: "GitHub",
        //   href: "https://github.com/your-username",
        // },
        {
          icon: "x.com",
          label: "Twitter",
          href: "https://x.com/AliHz_cs",
        },
        {
          icon: "linkedin",
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/aliakbar-hasanzadeh-95484b412",
        },
        {
          icon: "instagram",
          label: "Instagram",
          href: "https://www.instagram.com/alihz_cs",
        },
      ],

      // ==========================================
      // ساختار مستقل دروس در سایدبار
      // ==========================================
      sidebar: [
        // ۱. درس اول: ریاضیات پایه (گروه کامل و باز)
        {
          label: "ریاضیات پایه",
          collapsed: false, // به صورت پیش‌فرض باز باشد
          items: [
            {
              label: "نگاه کلی و معرفی دوره",
              link: "/math-basic/",
            },

            // =========================================================
            // پودمان اول: حساب
            // =========================================================
            {
              label: "پودمان اول: حساب",
              items: [
                {
                  label: "مقدمه پودمان اول",
                  link: "/math-basic/arithmetic/",
                },
                {
                  label: "درس ۱: انواع اعداد در ریاضی",
                  link: "/math-basic/arithmetic/types-of-numbers/",
                },
                {
                  label: "درس ۲: عوامل و اعداد اول",
                  link: "/math-basic/arithmetic/factors-and-prime-numbers/",
                },
                {
                  label: "درس ۳: کسرها، نسبت‌ها و درصدها",
                  link: "/math-basic/arithmetic/fractions-ratios-and-percentages/",
                },
                {
                  label: "درس ۴: اعداد اعشاری",
                  link: "/math-basic/arithmetic/decimal-numbers/",
                },
                {
                  label: "درس ۵: توان‌ها",
                  link: "/math-basic/arithmetic/powers/",
                },
                {
                  label: "درس ۶: دستگاه‌های عددی",
                  link: "/math-basic/arithmetic/number-systems/",
                },
              ],
            },

            // =========================================================
            // پودمان دوم: مقدمه‌ای بر جبر
            // =========================================================
            {
              label: "پودمان دوم: مقدمه‌ای بر جبر",
              items: [
                {
                  label: "مقدمه پودمان دوم",
                  link: "/math-basic/algebra/",
                },
                {
                  label: "درس ۷: عبارت‌های جبری",
                  link: "/math-basic/algebra/algebraic-expressions/",
                },
                {
                  label: "درس ۸: توان‌ها",
                  link: "/math-basic/algebra/powers/",
                },
                {
                  label: "درس ۹: ضرب و تقسیم عبارت‌های جبری",
                  link: "/math-basic/algebra/algebraic-multiplication-and-division/",
                },
                {
                  label: "درس ۱۰: تجزیه عبارت‌های جبری",
                  link: "/math-basic/algebra/factorization-of-algebraic-expressions/",
                },
              ],
            },

            // =========================================================
            // پودمان سوم: عبارت‌ها و معادلات
            // =========================================================
            {
              label: "پودمان سوم: عبارت‌ها و معادلات",
              items: [
                {
                  label: "مقدمه پودمان سوم",
                  link: "/math-basic/expressions-and-equations/",
                },
                {
                  label: "درس ۱۱: عبارت‌ها و معادلات",
                  link: "/math-basic/expressions-and-equations/expressions-and-equations/",
                },
                {
                  label: "درس ۱۲: محاسبه مقدار عبارت‌ها",
                  link: "/math-basic/expressions-and-equations/evaluating-expressions/",
                },
              ],
            },

            // =========================================================
            // پودمان چهارم: نمودارها
            // =========================================================
            {
              label: "پودمان چهارم: نمودارها",
              items: [
                {
                  label: "مقدمه پودمان چهارم",
                  link: "/math-basic/graphs/",
                },
                {
                  label: "درس ۱۳: نمودار معادلات",
                  link: "/math-basic/graphs/graphs-of-equations/",
                },
                {
                  label: "درس ۱۴: استفاده از صفحه گسترده",
                  link: "/math-basic/graphs/using-a-spreadsheet/",
                },
                {
                  label: "درس ۱۵: نامعادلات",
                  link: "/math-basic/graphs/inequalities/",
                },
                {
                  label: "درس ۱۶: قدر مطلق",
                  link: "/math-basic/graphs/absolute-values/",
                },
              ],
            },

            // =========================================================
            // پودمان پنجم: معادلات خطی و دستگاه معادلات خطی
            // =========================================================
            {
              label: "پودمان پنجم: معادلات خطی و دستگاه معادلات خطی",
              items: [
                {
                  label: "مقدمه پودمان پنجم",
                  link: "/math-basic/linear-equations/",
                },
                {
                  label: "درس ۱۷: معادلات خطی",
                  link: "/math-basic/linear-equations/linear-equations/",
                },
              ],
            },

            // =========================================================
            // پودمان ششم: معادلات چندجمله‌ای
            // =========================================================
            {
              label: "پودمان ششم: معادلات چندجمله‌ای",
              items: [
                {
                  label: "مقدمه پودمان ششم",
                  link: "/math-basic/polynomial-equations/",
                },
                {
                  label: "درس ۱۸: معادلات چندجمله‌ای",
                  link: "/math-basic/polynomial-equations/polynomial-equations/",
                },
              ],
            },

            // =========================================================
            // پودمان هفتم: کسرهای جزئی
            // =========================================================
            {
              label: "پودمان هفتم: کسرهای جزئی",
              items: [
                {
                  label: "مقدمه پودمان هفتم",
                  link: "/math-basic/partial-fractions/",
                },
                {
                  label: "درس ۱۹: کسرهای جزئی",
                  link: "/math-basic/partial-fractions/partial-fractions/",
                },
                {
                  label: "درس ۲۰: مخرج‌های دارای عوامل تکراری و درجه دوم",
                  link: "/math-basic/partial-fractions/repeated-and-quadratic-factors/",
                },
              ],
            },

            // =========================================================
            // پودمان هشتم: مثلثات
            // =========================================================
            {
              label: "پودمان هشتم: مثلثات",
              items: [
                {
                  label: "مقدمه پودمان هشتم",
                  link: "/math-basic/trigonometry/",
                },
                {
                  label: "درس ۲۱: زاویه‌ها و نسبت‌های مثلثاتی",
                  link: "/math-basic/trigonometry/angles-and-trigonometric-ratios/",
                },
                {
                  label: "درس ۲۲: اتحادهای مثلثاتی",
                  link: "/math-basic/trigonometry/trigonometric-identities/",
                },
              ],
            },

            // =========================================================
            // پودمان نهم: توابع
            // =========================================================
            {
              label: "پودمان نهم: توابع",
              items: [
                {
                  label: "مقدمه پودمان نهم",
                  link: "/math-basic/functions/",
                },
                {
                  label: "درس ۲۳: پردازش اعداد",
                  link: "/math-basic/functions/processing-numbers/",
                },
                {
                  label: "درس ۲۴: ترکیب توابع",
                  link: "/math-basic/functions/composition-function-of-a-function/",
                },
                {
                  label: "درس ۲۵: توابع مثلثاتی",
                  link: "/math-basic/functions/trigonometric-functions/",
                },
                {
                  label: "درس ۲۶: توابع مثلثاتی معکوس",
                  link: "/math-basic/functions/inverse-trigonometric-functions/",
                },
                {
                  label: "درس ۲۷: توابع نمایی و لگاریتمی",
                  link: "/math-basic/functions/exponential-and-logarithmic-functions/",
                },
                {
                  label: "درس ۲۸: توابع زوج و فرد",
                  link: "/math-basic/functions/odd-and-even-functions/",
                },
                {
                  label: "درس ۲۹: حد",
                  link: "/math-basic/functions/limits/",
                },
              ],
            },

            // =========================================================
            // پودمان دهم: ماتریس‌ها
            // =========================================================
            {
              label: "پودمان دهم: ماتریس‌ها",
              items: [
                {
                  label: "مقدمه پودمان دهم",
                  link: "/math-basic/matrices/",
                },
                {
                  label: "درس ۳۰: ماتریس‌ها",
                  link: "/math-basic/matrices/matrices/",
                },
                {
                  label: "درس ۳۱: ماتریس‌های معکوس",
                  link: "/math-basic/matrices/inverse-matrices/",
                },
                {
                  label: "درس ۳۲: حل دستگاه معادلات خطی",
                  link: "/math-basic/matrices/solving-simultaneous-linear-equations/",
                },
              ],
            },

            // =========================================================
            // پودمان یازدهم: بردارها
            // =========================================================
            {
              label: "پودمان یازدهم: بردارها",
              items: [
                {
                  label: "مقدمه پودمان یازدهم",
                  link: "/math-basic/vectors/",
                },
                {
                  label: "درس ۳۳: کمیت‌های نرده‌ای و برداری",
                  link: "/math-basic/vectors/scalar-and-vector-quantities/",
                },
                {
                  label: "درس ۳۴: بردارها در فضا",
                  link: "/math-basic/vectors/vectors-in-space/",
                },
                {
                  label: "درس ۳۵: حاصل‌ضرب بردارها",
                  link: "/math-basic/vectors/products-of-vectors/",
                },
              ],
            },

            // =========================================================
            // پودمان دوازدهم: سری دوجمله‌ای
            // =========================================================
            {
              label: "پودمان دوازدهم: سری دوجمله‌ای",
              items: [
                {
                  label: "مقدمه پودمان دوازدهم",
                  link: "/math-basic/binomial-series/",
                },
                {
                  label: "درس ۳۶: فاکتوریل و ترکیب‌ها",
                  link: "/math-basic/binomial-series/factorials-and-combinations/",
                },
                {
                  label: "درس ۳۷: سری دوجمله‌ای",
                  link: "/math-basic/binomial-series/binomial-series/",
                },
                {
                  label: "درس ۳۸: نماد سیگما (Σ)",
                  link: "/math-basic/binomial-series/sigma-notation/",
                },
              ],
            },

            // =========================================================
            // پودمان سیزدهم: مجموعه‌ها
            // =========================================================
            {
              label: "پودمان سیزدهم: مجموعه‌ها",
              items: [
                {
                  label: "مقدمه پودمان سیزدهم",
                  link: "/math-basic/sets/",
                },
                {
                  label: "درس ۳۹: مجموعه‌ها و زیرمجموعه‌ها",
                  link: "/math-basic/sets/sets-and-subsets/",
                },
                {
                  label: "درس ۴۰: اعمال روی مجموعه‌ها",
                  link: "/math-basic/sets/set-operations/",
                },
                {
                  label: "درس ۴۱: ویژگی‌های مجموعه‌ها",
                  link: "/math-basic/sets/set-properties/",
                },
              ],
            },

            // =========================================================
            // پودمان چهاردهم: احتمال
            // =========================================================
            {
              label: "پودمان چهاردهم: احتمال",
              items: [
                {
                  label: "مقدمه پودمان چهاردهم",
                  link: "/math-basic/probability/",
                },
                {
                  label: "درس ۴۲: احتمال تجربی",
                  link: "/math-basic/probability/empirical-probability/",
                },
                {
                  label: "درس ۴۳: احتمال کلاسیک",
                  link: "/math-basic/probability/classical-probability/",
                },
                {
                  label: "درس ۴۴: قانون جمع احتمال",
                  link: "/math-basic/probability/addition-law-of-probability/",
                },
                {
                  label: "درس ۴۵: قانون ضرب و احتمال شرطی",
                  link: "/math-basic/probability/multiplication-law-and-conditional-probability/",
                },
              ],
            },

            // =========================================================
            // پودمان پانزدهم: آمار
            // =========================================================
            {
              label: "پودمان پانزدهم: آمار",
              items: [
                {
                  label: "مقدمه پودمان پانزدهم",
                  link: "/math-basic/statistics/",
                },
                {
                  label: "درس ۴۶: داده‌ها",
                  link: "/math-basic/statistics/data/",
                },
                {
                  label: "درس ۴۷: معیارهای گرایش به مرکز",
                  link: "/math-basic/statistics/measures-of-central-tendency/",
                },
                {
                  label: "درس ۴۸: پراکندگی",
                  link: "/math-basic/statistics/dispersion/",
                },
                {
                  label: "درس ۴۹: توزیع نرمال",
                  link: "/math-basic/statistics/normal-distribution/",
                },
              ],
            },

            // =========================================================
            // پودمان شانزدهم: رگرسیون و همبستگی
            // =========================================================
            {
              label: "پودمان شانزدهم: رگرسیون و همبستگی",
              items: [
                {
                  label: "مقدمه پودمان شانزدهم",
                  link: "/math-basic/regression-and-correlation/",
                },
                {
                  label: "درس ۵۰: رگرسیون",
                  link: "/math-basic/regression-and-correlation/regression/",
                },
                {
                  label: "درس ۵۱: همبستگی",
                  link: "/math-basic/regression-and-correlation/correlation/",
                },
              ],
            },

            // =========================================================
            // پودمان هفدهم: مقدمه‌ای بر مشتق‌گیری
            // =========================================================
            {
              label: "پودمان هفدهم: مقدمه‌ای بر مشتق‌گیری",
              items: [
                {
                  label: "مقدمه پودمان هفدهم",
                  link: "/math-basic/introduction-to-differentiation/",
                },
                {
                  label: "درس ۵۲: شیب‌ها",
                  link: "/math-basic/introduction-to-differentiation/gradients/",
                },
                {
                  label: "درس ۵۳: مشتق‌گیری بیشتر",
                  link: "/math-basic/introduction-to-differentiation/further-differentiation/",
                },
              ],
            },

            // =========================================================
            // پودمان هجدهم: مشتق‌گیری جزئی
            // =========================================================
            {
              label: "پودمان هجدهم: مشتق‌گیری جزئی",
              items: [
                {
                  label: "مقدمه پودمان هجدهم",
                  link: "/math-basic/partial-differentiation/",
                },
                {
                  label: "درس ۵۴: مشتق‌گیری جزئی",
                  link: "/math-basic/partial-differentiation/partial-differentiation/",
                },
                {
                  label: "درس ۵۵: مشتق‌گیری جزئی بیشتر",
                  link: "/math-basic/partial-differentiation/further-partial-differentiation/",
                },
                {
                  label: "درس ۵۶: محاسبه خطاها",
                  link: "/math-basic/partial-differentiation/calculating-errors/",
                },
              ],
            },

            // =========================================================
            // پودمان نوزدهم: انتگرال‌گیری
            // =========================================================
            {
              label: "پودمان نوزدهم: انتگرال‌گیری",
              items: [
                {
                  label: "مقدمه پودمان نوزدهم",
                  link: "/math-basic/integration/",
                },
                {
                  label: "درس ۵۷: انتگرال‌گیری",
                  link: "/math-basic/integration/integration/",
                },
                {
                  label: "درس ۵۸: انتگرال‌گیری از عبارت‌های چندجمله‌ای",
                  link: "/math-basic/integration/integration-of-polynomial-expressions/",
                },
                {
                  label: "درس ۵۹: انتگرال‌گیری با کسرهای جزئی",
                  link: "/math-basic/integration/integration-by-partial-fractions/",
                },
                {
                  label: "درس ۶۰: انتگرال‌گیری جزءبه‌جزء",
                  link: "/math-basic/integration/integration-by-parts/",
                },
                {
                  label: "درس ۶۱: مساحت زیر منحنی‌ها",
                  link: "/math-basic/integration/areas-under-curves/",
                },
                {
                  label: "درس ۶۲: انتگرال‌گیری به‌عنوان جمع",
                  link: "/math-basic/integration/integration-as-a-summation/",
                },
              ],
            },
          ],
        },
        // ۲. سایر دروس (بسته شده به صورت پیش‌فرض برای خلوت ماندن صفحه)
        {
          label: "ریاضی ۱",
          collapsed: true,
          items: [{ label: "معرفی درس", link: "/math-1/" }],
        },
        {
          label: "ریاضی ۲",
          collapsed: true,
          items: [{ label: "معرفی درس", link: "/math-2/" }],
        },
        {
          label: "مبانی علوم ریاضی",
          collapsed: true,
          items: [{ label: "معرفی درس", link: "/math-foundations/" }],
        },
        {
          label: "مبانی ماتریس‌ها",
          collapsed: true,
          items: [{ label: "معرفی درس", link: "/matrices/" }],
        },
        {
          label: "جبر خطی",
          collapsed: true,
          items: [{ label: "معرفی درس", link: "/linear-algebra/" }],
        },
        {
          label: "مبانی آنالیز عددی",
          collapsed: true,
          items: [{ label: "معرفی درس", link: "/numerical-analysis/" }],
        },
        {
          label: "مبانی آنالیز ریاضی",
          collapsed: true,
          items: [{ label: "معرفی درس", link: "/mathematical-analysis/" }],
        },
        {
          label: "آمار و احتمال",
          collapsed: true,
          items: [{ label: "معرفی درس", link: "/probability-statistics/" }],
        },
        {
          label: "ساختمان داده",
          collapsed: true,
          items: [{ label: "معرفی درس", link: "/data-structures/" }],
        },
        {
          label: "طراحی الگوریتم",
          collapsed: true,
          items: [{ label: "معرفی درس", link: "/algorithm-design/" }],
        },
        {
          label: "نظریه محاسبه",
          collapsed: true,
          items: [{ label: "معرفی درس", link: "/theory-of-computation/" }],
        },
        {
          label: "مدار منطقی",
          collapsed: true,
          items: [{ label: "معرفی درس", link: "/digital-logic/" }],
        },
        {
          label: "مبانی منطق",
          collapsed: true,
          items: [{ label: "معرفی درس", link: "/mathematical-logic/" }],
        },
        {
          label: "نظریه مجموعه‌ها",
          collapsed: true,
          items: [{ label: "معرفی درس", link: "/set-theory/" }],
        },
        {
          label: "ریاضیات گسسته",
          collapsed: true,
          items: [{ label: "معرفی درس", link: "/discrete-math/" }],
        },
        {
          label: "مبانی ترکیبیات",
          collapsed: true,
          items: [{ label: "معرفی درس", link: "/combinatorics/" }],
        },
      ],
    }),
  ],
});
