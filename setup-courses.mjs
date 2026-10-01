import fs from "node:fs";
import path from "node:path";

const courses = [
  { slug: "math-basic", title: "ریاضیات پایه" },
  { slug: "math-1", title: "ریاضی ۱" },
  { slug: "math-2", title: "ریاضی ۲" },
  { slug: "math-foundations", title: "مبانی علوم ریاضی" },
  { slug: "matrices", title: "مبانی ماتریس‌ها" },
  { slug: "linear-algebra", title: "جبر خطی" },
  { slug: "numerical-analysis", title: "مبانی آنالیز عددی" },
  { slug: "mathematical-analysis", title: "مبانی آنالیز ریاضی" },
  { slug: "probability-statistics", title: "آمار و احتمال" },
  { slug: "data-structures", title: "ساختمان داده" },
  { slug: "algorithm-design", title: "طراحی الگوریتم" },
  { slug: "theory-of-computation", title: "نظریه محاسبه" },
  { slug: "mathematical-logic", title: "مبانی منطق" },
  { slug: "set-theory", title: "نظریه مجموعه‌ها" },
  { slug: "discrete-math", title: "ریاضیات گسسته" },
  { slug: "combinatorics", title: "مبانی ترکیبیات" },
];

const docsDir = path.resolve("src/content/docs");

for (const course of courses) {
  const courseDir = path.join(docsDir, course.slug);
  if (!fs.existsSync(courseDir)) {
    fs.mkdirSync(courseDir, { recursive: true });
  }

  const content = `---
title: ${course.title}
description: معرفی و جلسات درس ${course.title}
---

# ${course.title}

به دوره آموزشی **${course.title}** خوش آمدید.

این درس در حال بارگذاری سرفصل‌ها و جلسات است.
`;

  fs.writeFileSync(path.join(courseDir, "index.md"), content, "utf-8");
  console.log(`[ایجاد شد] ${course.slug}/index.md`);
}

console.log("\nتمام ۱۶ درس با موفقیت ساخته شدند!");
