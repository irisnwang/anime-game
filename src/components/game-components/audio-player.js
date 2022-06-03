const AudioPlayer = ({driveLink = "1S9Fu__E7fJKySlXMjDrHb2Q944Mumrwc"}) => {
  return(
      <div>
          <audio className="container-audio" controls autoPlay={true} loop={false}>
            <source src={`https://drive.google.com/uc?export=view&id=${driveLink}`}/>
          </audio>
      </div>
  );
}
export default AudioPlayer;