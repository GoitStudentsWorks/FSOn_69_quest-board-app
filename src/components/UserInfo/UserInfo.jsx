// import React from 'react';
// import { useSelector } from 'react-redux';
// import { Container, Avatar, UserIcon } from './UserInfo.styled';
// import EditProfile from 'components/EditProfile/EditProfile';
// import Sprite from '../../images/sprite.svg';

// const UserInfo = ({ theme }) => {
//   const { photo, name } = useSelector((state) => state.profile);
//   const [isModalOpen, setModalOpen] = React.useState(false);

//   const openModal = () => {
//     setModalOpen(true);
//   };

//   const closeModal = () => {
//     setModalOpen(false);
//   };

//   return (
//     <Container>
//       <div>{name}</div>
//       {photo ? (
//         <Avatar src={photo} alt="User Avatar" onClick={openModal} />
//       ) : (
//         <UserIcon className={`icon-user theme-${theme}`} onClick={openModal}>
//           <use href={`${Sprite}#icon-user`} />
//         </UserIcon>
//       )}
//       {isModalOpen && <EditProfile onClose={closeModal} />}
//     </Container>
//   );
// };

// export default UserInfo;


import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Avatar,  UserIcon  } from './UserInfo.styled';
import EditProfile from 'components/EditProfile/EditProfile';
import Sprite from '../../images/sprite.svg';

const setAvatarIcon = (activeUserTheme) => {
  switch (activeUserTheme) {
       case 'light':
      return '#icon-userlight';
      case 'dark':
      return '#icon-userdark';
    case 'violet':
      return '#icon-userviolet';
    default:
      return '#icon-userlight'; 
  }
}; 

const UserInfo = ({theme}) => {
  const { photo, name } = useSelector(state => state.profile);
  const [isModalOpen, setModalOpen] = React.useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const avatarIcon = setAvatarIcon(theme);

  return (
    <Container>
      <div>{name}</div>
      {photo ? (
        <Avatar src={photo} alt="User Avatar" onClick={openModal} />
      ) : (
        <UserIcon onClick={openModal}>
        <svg className={`icon-user`} width="32" height="32">
          <use href={Sprite + avatarIcon} />
        </svg>
      </UserIcon>
      )}
      {isModalOpen && <EditProfile onClose={closeModal} />}
    </Container>
  );
};

export default UserInfo;



