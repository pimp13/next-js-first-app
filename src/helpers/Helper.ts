export const toUpperCamelCaseWithSpaces = (str: string): string => {
  return str
    .split(' ')  // رشته را بر اساس فاصله‌ها تقسیم می‌کند
    .map(word =>
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() // تبدیل حرف اول هر کلمه به بزرگ و باقی به کوچک
    )
    .join(' ');  // کلمات را دوباره به هم وصل می‌کند با حفظ فاصله‌ها
}
