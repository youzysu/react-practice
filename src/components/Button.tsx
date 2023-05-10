export default function Button() {
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    console.log(event);
    alert('You Clicked me!');
  };
  return <button onClick={handleClick}>이벤트 객체 컴온</button>;
}
