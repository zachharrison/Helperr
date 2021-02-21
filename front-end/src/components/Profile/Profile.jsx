import React from 'react'
import './Profile.css'

const Profile = ({ cookies, state }) => {

  const user = Object.values(state.users).find(u => state.profile === u.name)


  return (
    <div className="profile-card">
      <div className="col-md-4 mt-4">
        <div className="card profile-card-4">
            <div className="card-body pt-5">
              <div className="card-name-container">
                <h5 className="card-title text-center">{user.name}</h5>
                <div className="icon-block text-center">Pretty stars</div>
              </div>
                <img src={user.avatar} alt="profile-image" className="profile"/>
                <p className="card-text text-center">Reviews: Bob fucked up my lawn!!</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
