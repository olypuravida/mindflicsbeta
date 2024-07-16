import { Poppins } from 'next/font/google'

export const poppins = Poppins({
display: 'swap',
    subsets: ['latin'],
    variable: '--font-poppins',
    weight: ['100', '300', '400', '500', '700', '900'],
})