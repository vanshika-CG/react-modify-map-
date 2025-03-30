import React from 'react'

function Mainmenu() {
  const boxes = [
    { image: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image9.png?raw=true', text: 'Weekly motivation' },
    { image: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image8.png?raw=true', text: 'Self meditation' },
    { image: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image7.png?raw=true', text: 'Word beyond act..' },
    { image: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image6.png?raw=true', text: 'The Alexa Show' },
    { image: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image5.png?raw=true', text: 'The stories of Ma..' },
    { image: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image10.png?raw=true', text: 'Motivation Daily ba..' },
  ]
  
  const boxes1 = [
    { image: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Liked.png?raw=true', text: 'Liked songs' },
    { image: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image4.png?raw=true', text: 'Neffex Playlist' },
    { image: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image3.png?raw=true', text: 'K/DA' },
    { image: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image1.png?raw=true', text: 'Dance/Electronic Mix' },
  ]
  
  // Added recommended playlists section for more authentic Spotify look
  const recommendedPlaylists = [
    { image: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image2.png?raw=true', text: 'Today\'s Top Hits', description: 'Rema & Selena Gomez are on top of the Hottest 50!' },
    { image: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image4.png?raw=true', text: 'RapCaviar', description: 'New music from Drake, Kendrick Lamar and more' },
    { image: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image1.png?raw=true', text: 'All Out 2010s', description: 'The biggest songs of the 2010s.' },
    { image: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image5.png?raw=true', text: 'Rock Classics', description: 'Rock legends & epic songs that continue to inspire generations.' },
  ]
  
  return (
    <>
      <div className='main'>
        <div className='header'>
          <div className='navigation-controls'>
            <img 
              src='https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/top%20arrow%20navigation.png?raw=true' 
              alt='navigation' 
              className='icon'>
            </img>
          </div>
          <div className='user-controls'>
            <img 
              src='https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/User.png?raw=true' 
              className='user'>
            </img>
          </div>
        </div>
        
        <h2 className='good'>Good morning</h2>
        
        <div className='boxes1'>
          {boxes1.map((box, i) => (
            <div className='box' key={i}>
              <img src={box.image} alt={box.text} className='like' />
              <p className='txt'>{box.text}</p>
            </div>
          ))}
          <div className='box'>
            <img 
              src='https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image2.png?raw=true' 
              className='like'>
            </img>
            <div className='txt'>Dance/Electronic Mix</div>
          </div>
        </div>
        
        <div className='section-header'>
          <h2 className='show'>Made For You</h2>
          <span className='see-all'>SEE ALL</span>
        </div>
        
        <div className='boxes'>
          {recommendedPlaylists.map((playlist, i) => (
            <div className='box2' key={i}>
              <img src={playlist.image} alt={playlist.text} className='pic' />
              <p className='xyz'>{playlist.text}</p>
              <p className='description'>{playlist.description}</p>
            </div>
          ))}
        </div>
        
        <div className='section-header'>
          <h2 className='show'>Shows you might like</h2>
          <span className='see-all'>SEE ALL</span>
        </div>
        
        <div className='boxes'>
          {boxes.map((box, i) => (
            <div className='box2' key={i}>
              <img src={box.image} alt={box.text} className='pic' />
              <p className='xyz'>{box.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Mainmenu