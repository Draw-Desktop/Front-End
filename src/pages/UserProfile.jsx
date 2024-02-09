import React from 'react'
import UserInfo from '../components/Profile/UserInfo'
import styled from 'styled-components'
import Photos from '../components/Profile/Photos'
import Pagination from '../components/Profile/Pagination'
import Modal from '../components/Profile/Modal'

export default function UserProfile() {
  // const fetchProfile = async () => {
  //   try{
  //     const endpoint = `/api/uploader/profile`;
  //     const res = await axios.get(endpoint)
  //     console.log(res);
  //   }
  // }
  return (
    <ProfileWrap>
        <UserInfo></UserInfo>
        <Photos></Photos>
        <Pagination></Pagination>
        <Modal title="팔로워"></Modal>
    </ProfileWrap>
  )
}

export const ProfileWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
