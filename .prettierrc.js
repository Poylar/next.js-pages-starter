module.exports = {
    printWidth: 80,
    tabWidth: 4,
    trailingComma: 'all',
    singleQuote: true,
    semi: true,
    importOrder: [
        'react',
        'next/',
        '^@/components/hooks/(.*)$',
        '^@/components/utils/(.*)$',
        '^@/components/ui/(.*)$',
        '^[*]', // Поместить все остальные импорты в конец
        '^[./]', // Поместить все относительные импорты в конец
    ],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
    plugins: [require.resolve('prettier-plugin-tailwindcss')],
};
