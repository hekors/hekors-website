import { FaBars } from 'react-icons/fa';
import MLHLHDBuild_Step01 from '../../assets/mlh_localhackday_step01.svg';
import MLHLHDBuild_Step02 from '../../assets/mlh_localhackday_step02.svg';

export default function MLHLocalHackDayBuild2022() {
    return (
        <div className="MLHLocalHackDayBuild2022-page">
            <div className="mlh-localhackday-build-2022-hero-section-wrapper content-center"
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '90%',
                    marginRight: 'auto',
                    marginLeft: 'auto',
                    marginTop: '4.8rem',
                    paddingTop: '2.4rem',
                    paddingBottom: '2.4rem'
                }}
            >
                <div className="hero-section-content-wrapper">
                    <h1 className="hero-section-title" style={{ fontSize: '46px' }}>
                        Happy New Year <span style={{ fontWeight: '500' }}>🥂</span> <br />
                        <span style={{ color: 'var(--h-pink)' }}>MLH LocalHackDay: Build</span> <br />
                        is here. 
                    </h1>
                    <p className="hero-section-description" style={{ fontSize: '18px', fontWeight: '600', marginTop: '0.4rem' }}>
                        Hekors, It's time to ASSEMBLE!
                    </p>
                </div>
                <img src="https://i2.wp.com/www.4ye.co.uk/wp-content/uploads/2014/09/avengers-gif_o_145258.gif?resize=500%2C268&ssl=1"
                    alt="developer-image" 
                    style={{ width: '540px', height: 'auto', borderRadius: '16px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)' }}
                />
            </div> 
            {/* starting: steps container */}
            <div className="steps-container content-center"></div>
                <div className="cta-card-wrapper gradient-bg"
                    style={{
                        padding: '0.8rem 1.4rem',
                        backgroundColor: 'white',
                        width: 'fit-content',
                        marginRight: 'auto',
                        marginLeft: 'auto',
                        marginTop: '3rem',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: '2.4rem',
                        borderRadius: '16px',
                        boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.2)'
                    }}
                >
                    <h4 className='coming-soon-title' style={{ color: 'var(--h-white)' }}>COMING SOON: 9th January 2022</h4>
                </div>
            {/* ending: steps container */}
        </div>
    )
}