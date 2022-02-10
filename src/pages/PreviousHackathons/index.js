import React, { useState } from "react";
import Button from "../../components/elements/Button";
import PreviousEventsData from './previous-hackathons.json';

export default function PreviousHackathons() {
    const [previousEventsRef] = useState(PreviousEventsData);
    return (
        <React.Fragment>
            <div className="previous-hackathons-page">
                <div className="previous-hackathons-page-content-wrapper content-center" style={{
                    marginTop: '4rem',
                    textAlign: 'center'
                }}>
                    <h2 style={{ marginBottom: '1rem' }}>What's going on recently</h2>
                    <p>Hackathons, Events and Open Source Programs we've went to</p>
                </div>
                <div className="past-events-wrapper content-center" style={{
                    marginTop: '4rem',
                    display: 'grid',
                    gridTemplateColumns: 'auto auto auto',
                    rowGap: '1.2rem',
                    justifyContent: "space-between",
                    alignItems: 'center'
                }}>
                    {previousEventsRef.map((event, index) => (
                        <PreviousHackathonCard 
                            key={index}
                            title={event.title}
                            coverImage={event.coverImage}
                            link={event.link}
                            organizer={event.organizer}
                            highlightRoute={event.highlightRoute}
                        />
                    ))}
                </div>
            </div>
        </React.Fragment>
    )
}

function PreviousHackathonCard({title, coverImage, link, organizer, highlightRoute}) {
    return (
        <div className="previous-hackathon-card on-hover-transition" style={{
            width: 'fit-content',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '0.8rem',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: 'rgba(0, 0, 0, 0.08)',
            padding: '1rem',
            borderRadius: '8px', 
            boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.08)'
        }}>
            {coverImage 
                ? (
                    <img src={coverImage} alt="event-cover" style={{ width: '80px', height: '80px', borderRadius: '50%' }} />
                ) 
                : (
                    <div className="cover-image-container--empty" style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#f6f6f6' }}></div>
                )
            }
            <div className="event-details-wrapper" style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.6rem',
                alignItems: 'flex-start'
            }}>
                <h3 className="event-title">{title}</h3>
                <p className="event-organizer">Organized by: {organizer}</p>
                <div className="button-layer-wrapper" style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: '0.4rem'
                }}>
                    <Button onClick={() => window.open(link)}>Learn more</Button>
                    <Button type="plain" style={{ color: 'white', backgroundColor: 'black' }}
                        onClick={() => {
                            let highlightPageLink = 
                                highlightRoute ? highlightRoute : link;
                            window.location.href = highlightPageLink;
                        }}
                    >Highlights</Button>
                </div>
            </div>
        </div>
    )
}