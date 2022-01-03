import Button from "../components/elements/Button";
import { FaDiscord, FaFire } from 'react-icons/fa';

export default function Landing() {
    return (
        <div className="landing-page-wrapper">
            {/* starting: hero section only for landing page */}
            <section className="hero-section hero-section_landing content-center"
                style={{
                    marginTop: '6rem'
                }}
            >
                <h1 className="hero-section-title" 
                    style={{ 
                        fontWeight: '700',
                        fontSize: '64px'
                    }}>
                    Together. <br />
                    We can change the <br />world.
                </h1>
                <div className="landing landing_cta-buttons-wrapper"
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: '24px',
                        marginTop: '1.2rem'
                    }}
                >
                    <Button><FaDiscord /> Join Discord</Button>
                    <Button type="plain"><FaFire /> Check our Achievements</Button>
                </div>
                
            </section>
            {/* ending: hero section only for landing page */}

        </div>
    )
}