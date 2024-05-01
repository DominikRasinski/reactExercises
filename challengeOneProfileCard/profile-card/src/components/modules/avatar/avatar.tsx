type AvatarProps = {
  imgPath: string;
};

export const Avatar = (props: AvatarProps) => {
  return <img src={props.imgPath} />;
};
