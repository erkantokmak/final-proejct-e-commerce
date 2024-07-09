import Image from "next/image";

import { useTranslations } from "next-intl";
import { HeroButton, HeroSub, HeroSubText, HeroText, HeroTitle, StyledLandingMobile } from "@/styles/HeroStyle";

const Hero = () => {
    const t = useTranslations();
    return (
        <main className="landingPage">
            <div className="container-xl">
                <div className="col-lg-6 ">
                    <HeroTitle>
                        {t("bannerTitle")}
                    </HeroTitle>
                    <HeroText>
                        {t("bannerText")}
                    </HeroText>
                    <HeroButton>
                        {t("bannerButton")}
                    </HeroButton>
                    <div className="pt-4 row">
                        <div className="col-md-4 col-6 text-md-start text-center">
                            <HeroSub>
                                200+
                            </HeroSub>
                            <HeroSubText>
                                {t("bannerCountOneText")}
                            </HeroSubText>
                        </div>
                        <div className="col-md-4 col-6 text-md-start text-center">
                            <HeroSub>
                                2,000+
                            </HeroSub>
                            <HeroSubText>
                                {t("bannerCountTwoText")}
                            </HeroSubText>
                        </div>
                        <div className="col-md-4 col-12 text-md-start text-center">
                            <HeroSub>
                                30,000+
                            </HeroSub>
                            <HeroSubText>
                                {t("bannerCountThreeText")}
                            </HeroSubText>
                        </div>
                    </div>
                </div>
                <StyledLandingMobile className="d-md-none d-block position-relative w-100">
                    <Image
                        src="/assets/banners/banneMobile.png"
                        alt="mobile-banner"
                        fill
                        className="rounded-4 object-fit-contain"
                    />
                </StyledLandingMobile>
            </div>
        </main>
    );
};

export default Hero