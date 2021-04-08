import React from "react";
import Preloader from "../../common/preloader/preLoader";
import s from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div>
        <img
          className={s.img__content}
          src="https://static.toiimg.com/thumb/msid-58475411,width-748,height-499,resizemode=4,imgsize-142947/.jpg"
        ></img>
      </div>
      <div className={s.user}>
        <img className={s.img__ava} src={props.profile.photos.large} />
        <div>
          <ProfileStatus
            status={props.status}
            updateStatus={props.updateStatus}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;

{
  /* <img
className={s.img__ava}
src="https://killerattitudestatus.in/wp-content/uploads/2019/12/gud-night-images.jpg"
></img>
<div className={s.user__info}>
<div>Sergiy7</div>
<div>Date of birthday: 29 sept.</div>
<div>City: Kyiv</div>
</div> */
}
