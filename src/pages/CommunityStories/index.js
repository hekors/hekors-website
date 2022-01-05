import { useState } from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import BlogCard from '../../components/BlogCard';
import Button from '../../components/elements/Button';
import CommunityStoriesData from './_community_stories.json';

export default function CommunityStories() {
    const [communityStories] = useState(CommunityStoriesData);
    return (
        <div className="community-stories-page">
            <div className="community-stories-page-content-wrapper content-center"
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '90%',
                    marginRight: 'auto',
                    marginLeft: 'auto',
                    marginTop: '3.8rem',
                    paddingTop: '2.4rem',
                    paddingBottom: '2.4rem'
                }}
            >
                <img src="https://images.unsplash.com/photo-1638913660106-73b4bac0db09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80"
                    alt="developer-image" 
                    style={{ width: '540px', height: 'auto', borderRadius: '16px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)' }}
                />
                <div className="hero-section-content-wrapper">
                    <h1 className="hero-section-title" style={{ fontSize: '46px' }}>
                        Some documented stories <br />and experiences from <br />our community
                    </h1>
                    <p className="hero-section-description" style={{ fontSize: '18px', fontWeight: '600', marginTop: '0.4rem' }}>
                        You can also share a blog or video content sharing your experiences
                    </p>
                    <div className="hero-section-cta-buttons-wrapper" style={{ marginTop: '1.2rem' }}>
                        <Button style={{ width: '100%' }}><FaPencilAlt /> Share your experiences</Button>
                    </div>
                </div>
            </div>
            {/* starting: blogs */}
            <div className="community-stories-blogs-wrapper content-center" style={{
                marginTop: '4.8rem',
                padding: '0.6rem 1.2rem'
            }}>
                <h2 style={{ textAlign: 'center' }}>Blogs and Experiences</h2>
                <div className="community-stories-card-wrapper"
                    style={{
                        marginTop: '2.4rem',
                        display: 'grid',
                        gridTemplateColumns: 'auto auto',
                        alignItems: 'flex-start',
                        justifyContent: 'space-between',
                        rowGap: '2rem'
                    }}
                >
                    {communityStories.map((story, index) => (
                        <BlogCard key={index} 
                            title={story.title}
                            description={story.description}
                            author={story.author}
                            blogURL={story.url}
                        />
                    ))}
                </div>
            </div>
            {/* ending: blogs */}
        </div>
    )
}