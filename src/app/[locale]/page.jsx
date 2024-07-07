
import { Container } from '@/styles/LayoutStyle';
import { useTranslations } from 'next-intl';
import {Link} from '../../navigation';

export default function Home() {
    const t = useTranslations();
    return (
        <main>
            <Container>
            <Link href="/login">Login</Link>
            <Link href="/" locale="tr">Switch to Tr</Link>
                <h1>{t('home')}</h1>
            </Container>
        </main>
    )
}
