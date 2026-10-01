// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeGalaxy from "starlight-theme-galaxy";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

export default defineConfig({
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
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/your-username",
        },
        {
          icon: "x.com",
          label: "Twitter",
          href: "https://x.com/your-username",
        },
        {
          icon: "linkedin",
          label: "LinkedIn",
          href: "https://linkedin.com/in/your-username",
        },
        {
          icon: "instagram",
          label: "Instagram",
          href: "https://instagram.com/your-username",
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
            { label: "نگاه کلی و معرفی دوره", link: "/math-basic/" },
            {
              label: "جلسه ۱: منطق ریاضی و گزاره‌ها",
              link: "/math-basic/logic/",
            },
            { label: "جلسه ۲: نظریه مجموعه‌ها", link: "/math-basic/sets/" },
            {
              label: "جلسه ۳: الگوها و استقرای ریاضی",
              link: "/math-basic/induction/",
            },
            // به مرور جلسات بعدی را دقیقاً در همین خط اضافه کنید:
            // { label: "جلسه ۴: نام مبحث", link: "/math-basic/slug-name/" },
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
