import React from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

const HeroNews2 = () => {
  const { loading, error, data } = useFetch('http://localhost:1338/api/newsletters');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  const extractTextFromBody = (body) => {
    let text = '';
    body.forEach(section => {
      if (section.type === 'paragraph') {
        text += section.children.map(child => child.text).join(' ');
      }
    });
    return text;
  };

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  return (
    <div className='site-header'>
        <h1 className='cnavtext'>NEWS</h1>
        {data && data.map(Newsletter => (
          <div key={Newsletter.id} className='newsletter-card'>
            <h2>{Newsletter.attributes.Title}</h2>
            <p>{truncateText(extractTextFromBody(Newsletter.attributes.body), 200)}</p>
            <Link to={`http://localhost:1338/api/newsletters/${Newsletter.id}`}>Read More</Link>
          </div>
        ))}
    </div>
  )
}

export default HeroNews2