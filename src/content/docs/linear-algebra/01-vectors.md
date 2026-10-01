---
title: جلسه ۱ - فضاهای برداری و استقلال خطی
description: مفاهیم پایه، بردارها در فضای n بعدی، تعاریف جبری و پیاده‌سازی محاسباتی
---

در این جلسه سنگ‌بنای جبر خطی مدرن را بنا می‌نهیم. ساختار بردارها نه تنها پایه‌گذار تحلیل سیستم‌های خطی در ریاضیات است، بلکه در یادگیری ماشین و گرافیک کامپیوتری نقشی بنیادین ایفا می‌کند.

---

## ۱. تعاریف پایه

<div class="math-box definition">
  <div class="box-title">تعریف ۱.۱ (فضای برداری $\mathbb{R}^n$)</div>
  مجموعه تمام چندتایی‌های مرتب از اعداد حقیقی به صورت $\mathbf{x} = (x_1, x_2, \dots, x_n)$ که تحت دو عمل <strong>جمع برداری</strong> و <strong>ضرب اسکالر</strong> بسته باشند، یک فضای اقلیدسی $n$-بعدی نامیده می‌شود:

$$\mathbf{x} + \mathbf{y} = \begin{bmatrix} x_1 + y_1 \\ x_2 + y_2 \\ \vdots \\ x_n + y_n \end{bmatrix}, \quad c\mathbf{x} = \begin{bmatrix} c x_1 \\ c x_2 \\ \vdots \\ c x_n \end{bmatrix} \quad (c \in \mathbb{R})$$

</div>

---

## ۲. ترکیب خطی و قضایای مرتبط

<div class="math-box theorem">
  <div class="box-title">قضیه ۱.۱ (آزمون استقلال خطی)</div>
  مجموعه بردارهای $\{\mathbf{v}_1, \mathbf{v}_2, \dots, \mathbf{v}_k\}$ مستقل خطی هستند اگر و تنها اگر معادله زیر:

$$c_1 \mathbf{v}_1 + c_2 \mathbf{v}_2 + \dots + c_k \mathbf{v}_k = \mathbf{0}$$

تنها جواب بدیهی $c_1 = c_2 = \dots = c_k = 0$ را داشته باشد.

</div>

<div class="math-box proof">
  <div class="box-title">اثبات قضیه:</div>
  فرض کنید ضریب ناصفری مانند $c_1 \neq 0$ وجود داشته باشد. در این صورت می‌توان $\mathbf{v}_1$ را برحسب سایر بردارها بازنویسی کرد:

$$\mathbf{v}_1 = -\frac{c_2}{c_1}\mathbf{v}_2 - \dots - -\frac{c_k}{c_1}\mathbf{v}_k$$

این یعنی $\mathbf{v}_1$ در اسپن بقیه بردارها قرار دارد که با فرض استقلال خطی در تناقض است.
<span class="qed">■</span>

</div>

---

## ۳. مثال کاربردی و حل مسئله

<div class="math-box example">
  <div class="box-title">مثال ۱.۱ (بررسی ضرب داخلی و توازی)</div>

دو بردار زیر در $\mathbb{R}^3$ مفروض هستند:

$$
\mathbf{u} = \begin{bmatrix} 1 \\ 2 \\ -1 \end{bmatrix}, \quad \mathbf{v} = \begin{bmatrix} 3 \\ -1 \\ 1 \end{bmatrix}
$$

ضرب داخلی (Dot Product) برابر است با:

$$
\langle \mathbf{u}, \mathbf{v} \rangle = (1)(3) + (2)(-1) + (-1)(1) = 3 - 2 - 1 = 0
$$

از آنجا که ضرب داخلی صفر شد، این دو بردار بر یکدیگر <strong>عمود (Orthogonal)</strong> هستند.

</div>

---

## ۴. کادرهای اخطار و نکات کلیدی (Callouts)

:::tip[نکته عملکردی]
در پیاده‌سازی‌های یادگیری ماشین، عملیات ماتریسی به جای حلقه‌های تکرار `for` از طریق دستورات برداری‌شده (SIMD Vectorization) روی پردازنده‌های گرافیکی اجرا می‌شوند.
:::

:::caution[خطای رایج محاسباتی]
همواره دقت کنید که ضرب ماتریسی خاصیت جابه‌جایی ندارد؛ یعنی به طور کلی:
$$\mathbf{A}\mathbf{B} \neq \mathbf{B}\mathbf{A}$$
:::

---

## ۵. پیاده‌سازی الگوریتمی و کد

محاسبه اندازه (نرم) و ضرب برداری در علوم کامپیوتر به اشکال زیر پیاده‌سازی می‌شود:

### پیاده‌سازی در Python (NumPy)

```python
import numpy as np

# تعریف بردارها در فضای R^3
u = np.array([1.0, 2.0, -1.0])
v = np.array([3.0, -1.0, 1.0])

# محاسبه ضرب داخلی و نرم بردار
dot_product = np.dot(u, v)
norm_u = np.linalg.norm(u)

print(f"Dot Product: {dot_product}")
print(f"Norm of u: {norm_u:.4f}")
```

پیاده‌سازی در ++C (رویکرد مدرن)C++#include <iostream>
#include <vector>
#include <numeric>
#include <cmath>

int main() {
std::vector<double> u = {1.0, 2.0, -1.0};
std::vector<double> v = {3.0, -1.0, 1.0};

    // محاسبه ضرب داخلی با std::inner_product
    double dot = std::inner_product(u.begin(), u.end(), v.begin(), 0.0);

    std::cout << "Dot Product: " << dot << std::endl;
    return 0;

}
۶. تمرین‌های پیشنهادیثابت کنید اگر بردارهای $\{\mathbf{v}_1, \mathbf{v}_2\}$ متعامد و ناصفر باشند، لزوماً مستقل خطی هستند.الگوریتمی به زبان دلخواه بنویسید که فرمول گرام-اشمیت (Gram-Schmidt) را برای پایه‌سازی یک زیرفضا پیاده کند.

---

### ۳. بررسی نتیجه

فایل‌ها را ذخیره کرده و صفحه جلسه اول را در مرورگر مشاهده کنید:
`http://localhost:4321/linear-algebra/01-vectors/`

- کادرهای تعاریف، قضایا، اثبات و مثال‌ها با حاشیه‌های رنگی و نورانی تفکیک می‌شوند.
- فرمول‌های ماتریسی با KaTeX به طور استاندارد و در جهت صحیح وسط‌چین رندر می‌شوند.
- بلوک‌های کد پایتون و ++C کاملاً چپ‌به‌راست و به همراه دکمه کپی کد و هایلایت نحوی استارلایت نمایش داده می‌شوند.
- باکس معرفی مدرس نیز دقیقاً در انتهای همین صفحه بالای دکمه «جلسه بعدی» جای می‌گیرد.
