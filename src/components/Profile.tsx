interface AvatarInfo {
  image: string;
  isNew?: boolean;
}

interface UserInfo extends AvatarInfo {
  name: string;
  title: string;
}

export function Profile({ image, name, title, isNew }: UserInfo) {
  return (
    <div className='profile'>
      <Avatar image={image} isNew={isNew} />
      <h1>{name}</h1>
      <h3>{title}</h3>
    </div>
  );
}

export function Avatar({ image, isNew }: AvatarInfo) {
  return (
    <div className='avatar'>
      <img src={image} alt='Profile' />
      {isNew && <span className='new'>NEW</span>}
    </div>
  );
}
