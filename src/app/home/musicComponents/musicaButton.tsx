import { MdLibraryMusic, MdNotificationImportant } from "react-icons/md";
import DraggableWindow from "../../../components/DraggableWindow";
import { scaleDown, scaleUp } from "@/components/animations";
import openSound from "../../../../public/sounds/openSound.mp3"
import useSound from "use-sound";
import { css } from "@linaria/core";
import { styled } from "@linaria/react";
import { useEffect, useState } from "react";
import useCheckMobile from "@/hooks/useCheckMobile";
import Musica from "../musica";
import checkString from "@/components/checkString";

interface props {
  name: string;
  Icon: any;
  children?: React.ReactNode;
}

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
`

const MusicaContaienr = styled.div`
  display: flex;
  align-items: flex-start;
`

const ButtonText = styled.p`
  font-size: var(--text-sm);
  font-weight: bolder;
`

const ButtonIcon = css`
  cursor: pointer;
  height: 3rem;
  width: 3rem;

  @media (min-width: 48rem) {
    height: 4rem;
    width: 4rem;
  }
`

const notify = css`
  animation: notify 2s ease-in-out infinite;
  margin-left: -1rem;

  @keyframes notify {
    0% {
      rotate: 10deg;
    }
    50% {
      rotate: -10deg;
    }
    100% {
      rotate: 10deg;
    }
  }
`

export function ToggleButton({
  name,
  Icon,
  children
}: props) {
  const [OpenSound] = useSound(openSound);
  const [showPopup, setShowPopup] = useState(false);
  const isMobile = useCheckMobile();

  const handleClick = () => {
    OpenSound()
    setShowPopup(!showPopup)
  }

  return (
    <>
      <ButtonContainer onClick={handleClick}>
        <Icon className={`${ButtonIcon} ${scaleUp} ${scaleDown}`} />
        <ButtonText>{name}</ButtonText>
      </ButtonContainer>

      {showPopup && (
        <DraggableWindow name={name} isMobile={isMobile} setState={setShowPopup}>
          {children}
        </DraggableWindow>
      )}
    </>
  )
}

export default function MusciaButton() {
  const [song, setSong] = useState<any>(null);
  const [playlist, setPlaylist] = useState<any>(null);

  const [notChecked, setNotChecked] = useState(true);
  const [OpenSound] = useSound(openSound);
  const [showPopup, setShowPopup] = useState(false);
  const isMobile = useCheckMobile();

  const handleClick = () => {
    OpenSound()
    setShowPopup(!showPopup)
    if (notChecked && setNotChecked) setNotChecked(false);
  }

  useEffect(() => {
    const fetchData = async () => {
      const fetchedRes = await fetch("/api/spotify");
      const fetchedToken = JSON.parse(await fetchedRes.text()).token
      const playlistId = process.env.NEXT_PUBLIC_SPOTIFY_PLAYLIST_ID as string;

      const currentPlaylist = await fetchSpotify(`https://api.spotify.com/v1/playlists/${playlistId}`, fetchedToken, true);
      const currentTrack = await fetchSpotify("https://api.spotify.com/v1/me/player/currently-playing", fetchedToken);

      setPlaylist(currentPlaylist);
      setSong(currentTrack);
    };

    fetchData();
  }, []);

  return (
    <>
      <ButtonContainer onClick={handleClick}>
        <MusicaContaienr>
          <MdLibraryMusic className={`${ButtonIcon} ${scaleUp} ${scaleDown}`} />
          {notChecked && song?.is_playing && (
            <MdNotificationImportant color="red" size={"1.5rem"} className={notify} />
          )}
        </MusicaContaienr>
        <ButtonText>música</ButtonText>
      </ButtonContainer>

      {showPopup && (
        <DraggableWindow name="música" isMobile={isMobile} setState={setShowPopup}>
          <Musica nowPlaying={song} playlist={playlist} />
        </DraggableWindow>
      )}
    </>
  )
}

async function fetchSpotify(url: string, accessToken: string, isPlaylist?: Boolean) {
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (isPlaylist) {
      const resText = await response.text()

      if (!resText) return null;

      const resJSON = JSON.parse(resText);

      let resInfo = {
        name: resJSON.name,
        description: checkString(resJSON.description as string),
        images: resJSON.images
      };
      return resInfo;
    } else {
      const resText = await response.text()
      const resJSON = JSON.parse(resText);

      return resJSON;
    }
  } catch (error) {
    return null;
  }
}