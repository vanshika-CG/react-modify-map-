function Sidebar(){
    return(
        <>
        <div className='sidebar'>
          <div className='logo'><img src='https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Spotify%20logo.png?raw=true' alt='logo' className='logo1'></img></div>
          <div className='home'>
            <img src='https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Home.png?raw=true' alt='home' className='home1'></img>
            <div className='text'>Home</div>
          </div>

          <div className='home'>
            <img src='https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/10.spotify-clone/assets/Search.png' alt='search' className='home1'></img>
            <div className='text'>Search</div>
          </div>

          <div className='home'>
            <img src='https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Your%20library.png?raw=true' alt='search' className='home1'></img>
            <div className='text'>Your Library</div>
          </div>

          <div className='section'>
            <img src='https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Create.png?raw=true' alt='search' className='home1'></img>
            <div className='text'>Create Playlist</div>
          </div>
          <div className='home'>
            <img src='https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/your%20episodes.png?raw=true' alt='search' className='home1'></img>
            <div className='text'>Your Episodes</div>
          </div>
          <div className='fav'>
            <p className='font'>FAV</p>
            <p className='font'>Daily Mix1</p>
            <p className='font'>Discover Weekly</p>
            <p className='font'>Malayalam</p>
            <p className='font'>Dance/Electronic Mix</p>
            <p className='font'>EDM/Popular</p>
          </div>

          <div className='inst'>
            <img src='https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/grommet-icons_install-option.png?raw=true' alt='search' className='home1'></img>
            <div className='text'>Install App</div>
          </div>
        </div>
        </>
    )
}
export default Sidebar