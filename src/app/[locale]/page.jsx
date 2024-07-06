import ThemeToggle from '@/components/themeToggle';
import { useTranslations } from 'next-intl';

export default function Home() {
    const t = useTranslations();
    return (
        <main>
            <ThemeToggle />
            <h1>{t('home')}</h1>
        </main>
    )
}



