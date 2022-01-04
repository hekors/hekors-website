import { FaDiscord, FaFire } from "react-icons/fa";
import Button from "../components/elements/Button";

export default function Landing() {
    return (
        <div className="landing-page">
            <div className="landing-page-content-wrapper content-center">
                {/* starting: hero section */}
                <div className="hero-section landing-page-hero-section"
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '90%',
                        marginRight: 'auto',
                        marginLeft: 'auto',
                        marginTop: '2rem',
                        paddingTop: '2.4rem',
                        paddingBottom: '2.4rem'
                    }}
                >
                    <img src="https://media.istockphoto.com/photos/portrait-of-young-latina-marketing-specialist-working-on-laptop-in-picture-id1298861980?b=1&k=20&m=1298861980&s=170667a&w=0&h=n0PtWzYOSDg1XU5S2nNUdM6C8SlFcj0o-Ayc7TsPKPc="
                        alt="developer-image" 
                        style={{ width: '460px', height: 'auto', borderRadius: '16px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)' }}
                        />
                    <div className="hero-section-content-wrapper">
                        <h1 className="hero-section-title" style={{ fontSize: '46px' }}>
                            Together. <br />
                            We're building a <br />
                            community of developers
                        </h1>
                        <p className="hero-section-description" style={{ fontSize: '18px', fontWeight: '600', marginTop: '0.4rem' }}>
                            A community of people doing some <br />great work. JOIN TODAY!
                        </p>
                    </div>
                </div>
                {/* ending: hero section */}
                {/* starting: CTA Card */}
                <div className="cta-card-wrapper"
                    style={{
                        padding: '1.8rem 2.4rem',
                        backgroundColor: 'white',
                        width: 'fit-content',
                        marginRight: 'auto',
                        marginLeft: 'auto',
                        marginTop: '2.4rem',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: '2.4rem',
                        borderRadius: '16px',
                        boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.3)'
                    }}
                >
                    <h4 className="cta-title" style={{ width: '40ch' }}>
                        Want to get into hackathons, open source, designing, software developer and much more... 
                        You will find someone to collaboarte, for sure.
                    </h4>
                    <div className="cta-buttons-wrapper" 
                        style={{ 
                            display: 'flex',
                            flexDirection: 'row',
                            gap: '1.2rem'
                        }}>
                        <Button><FaDiscord /> Join Discord</Button>
                        <Button type="plain"><FaFire /> Our Testimonials</Button>
                    </div>
                </div>
                {/* ending: CTA Card */}
            </div>
        </div>
    )
}