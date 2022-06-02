const AudioPlayer = ({driveLink = "1S9Fu__E7fJKySlXMjDrHb2Q944Mumrwc"}) => {
  return(
      <div>
        <div>
          <audio className="container-audio" controls loop>
            <source src={`https://drive.google.com/uc?export=view&id=${driveLink}`}/>
          </audio>
        </div>
      </div>
  );
}
export default AudioPlayer;