import { SSearchBar, SearchBarContainer, SearchBarIconContainer } from '@/styles/ComponentStyle';
import { useTranslations } from 'next-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import Image from 'next/image';

const Searchbar = () => {
    const t = useTranslations();
    return (
        <>
            <SearchBarContainer>
                <SearchBarIconContainer>
                <FontAwesomeIcon icon={faSearch} width={20.27} height={20.27}/>
                </SearchBarIconContainer>
                <SSearchBar type="text" placeholder={t('searchbar')} className='form-control'/>
            </SearchBarContainer>
        </>
    )
}

export default Searchbar

