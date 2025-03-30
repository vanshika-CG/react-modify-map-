function Mainmenu() {
  const boxes = [
    { image: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image9.png?raw=true', text: 'Weekly motivation' },
    { image: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image8.png?raw=true', text: 'Self meditation' },
    { image: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image7.png?raw=true', text: 'Word beyond act..' },
    { image: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image6.png?raw=true', text: 'The Alexa Show' },
    { image: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image5.png?raw=true', text: 'The stories of Ma..' },
    { image: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image10.png?raw=true', text: 'Motivation Daily ba..' },
  ]
  const boxes1   = [
    { image: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Liked.png?raw=true', text: 'Liked songs' },
    { image: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image4.png?raw=true', text: 'Neffex Playlist' },
    { image: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image3.png?raw=true', text: 'K/DA' },
    { image: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image1.png?raw=true', text: 'Dance/Electronic Mix' },
  
  ]
  return (
    <>
      <div className='main'>
          <div className='header'>
            <div><img src='https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/top%20arrow%20navigation.png?raw=true' alt='img' className='icon'></img></div>
            <div><img src='https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/User.png?raw=true' className='user'></img></div>
          </div>
          <h2 className='good'>Good morning</h2>
       
            <div className='boxes1'>
{boxes1.map((box, i) => (
<div className='box'>
  <img src={box.image} alt={box.text} className='like' />
  <p className='txt'>{box.text}</p>
</div>
))}

          </div>
          <div className='box1'><img src='https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image2.png?raw=true' className='like'></img>
            <div className='txt'>Dance/Electronic Mix</div>
          </div>
          <h2 className='show'>Shows You might like</h2>
          <div className='boxes'>
{boxes.map((box, i) => (
<div className='box2'>
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

