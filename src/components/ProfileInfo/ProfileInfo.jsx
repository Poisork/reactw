import React  from 'react';
import s from './index.module.css'

class ProfileInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <img src="https://img1.fonwall.ru/o/ov/more-ostrova-plyazh-volny.jpg" alt="" />

        </div>
        <div className={s.descriptionBlock}>
          ava + des
        </div>

      </div>
    );
  }
}

export default ProfileInfo;