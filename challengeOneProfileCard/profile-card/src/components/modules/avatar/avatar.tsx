type AvatarProps = {
  imgPath: string;
};

export const Avatar = (props: AvatarProps) => {
  return <img className='avatar' alt='avatar' src={props.imgPath} />;
};
