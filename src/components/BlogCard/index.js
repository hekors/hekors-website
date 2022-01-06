import Button from '../elements/Button';
import './blog-card-style.css';

export default function BlogCard(BlogCardProps) {
    function getRandomColor() {
        const color = "hsl(" + Math.random() * 360 + ", 100%, 75%)";
        return color;
      }

    return (
        <div className="blog-card-component">
            <img src="https://media.discordapp.net/attachments/893516791823876096/927927196297863178/handdrawn-with-seamless-pattern-one-line-faces_69286-190.png"
                alt="developer-image" 
                style={{ 
                    width: '100%', 
                    height: 'auto', 
                    borderRadius: '16px', 
                    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', 
                    marginRight: 'auto',
                    marginLeft: 'auto'
                }}
            />
            <div className="blog-card-header">
                <img src={`https://github.com/${BlogCardProps.author.github_username}.png`} style={{border : `3px solid ${getRandomColor()}`}}/>
                <div className='blog-card-header-content-details'>
                    <h4 className="blog-title">{BlogCardProps.title}</h4>
                </div>
            </div>
            <p clasName="blog-description" style={{ marginTop: '0.6rem', width: '36ch' }}>
                    {BlogCardProps.description}
            </p>
            <Button onClick={() => window.open(BlogCardProps.blogURL)}
                style={{ marginTop: '1.4rem' }}
            >
                Read Experience
            </Button>
        </div>
    )
} 