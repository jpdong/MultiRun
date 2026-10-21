/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // 仅扫描明确使用 Tailwind 的文件
    
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    
  ],
  theme: {
    extend: {
      // 扩展现有设计系统的颜色、字体等
      // 这些将在后续任务中配置
    }
  },
  plugins: [],
}