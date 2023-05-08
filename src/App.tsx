import './App.css';

function App() {
  return (
    <div className='App'>
      <AppProfile />
    </div>
  );
}

function AppProfile() {
  return (
    <div className='AppProfile'>
      <Avatar
        image='https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80'
        isNew={true}
      />

      <Profile
        image='https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80'
        name='James Kim'
        title='프론트엔드 개발자'
        isNew={true}
      />
      <Profile
        image='https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80'
        name='Anna Young'
        title='백엔드 개발자'
      />
      <Profile
        image='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80'
        name='Bob Yu'
        title='프론트엔드 개발자'
      />
    </div>
  );
}

interface AvatarInfo {
  image: string;
  isNew?: boolean;
}

interface UserInfo {
  image: string;
  name: string;
  title: string;
  isNew?: boolean;
}

function Profile({ image, name, title, isNew }: UserInfo) {
  return (
    <div className='profile'>
      <Avatar image={image} isNew={isNew} />
      <h1>{name}</h1>
      <h3>{title}</h3>
    </div>
  );
}

function Avatar({ image, isNew }: AvatarInfo) {
  return (
    <div className='avatar'>
      <img src={image} alt='Profile Image' />
      {isNew && <span className='new'>NEW</span>}
    </div>
  );
}

export default App;
