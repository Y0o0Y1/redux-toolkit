import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux'

import {
    fetchProfile,
    updateFirstName,
    updateLastName,
    addHobby,
    updateHobbies,
    addSkill,
    updateSkills,
    updateIdentity,
} from './userSlice';
import { user1, newHobbies, newSkills } from './../../constants/userData';

const User = () => {
    const dispatch = useDispatch();
    const actions = bindActionCreators({
        fetchProfile,
        updateFirstName,
        updateLastName,
        addHobby,
        updateHobbies,
        addSkill,
        updateSkills,
        updateIdentity,
    }, dispatch)
    const userName = useSelector((state) => {
        console.log(state)
        if (state.user.first_name)
            return state.user?.first_name + " " + state.user?.last_name
        else
            return false
    })
    const skills = useSelector(state => {
        return state.user?.skills
    })
    const hobbies = useSelector(state => {
        return state.user?.hobbies
    })
    console.log(userName)
    return <>
        <hr></hr>
        <button onClick={() => {
            actions.fetchProfile(user1)
        }}>Fetch Profile</button>
        <button onClick={() => {
            actions.updateFirstName("Okba")
        }}>
            Update First Name</button>
        <button onClick={() => {
            actions.updateLastName("Cemuz")
        }}>Update Last Name</button>
        <button onClick={() => {
            actions.addHobby({
                id: 121313,
                name: "Going To GYM"
            })
        }}>Add Hobby</button>
        <button onClick={() => {
            actions.updateHobbies(newHobbies)
        }}>Update Hobbies</button>
        <button onClick={() => {
            actions.addSkill({
                id: 121313,
                name: "AngularJS"
            })
        }}>Add Skill</button>
        <button onClick={() => {
            actions.updateSkills(newSkills)
        }}>Update Skills</button>
        <button onClick={() => {
            actions.updateIdentity({
                height: "204",
                speed: "123 mph"
            })
        }}>Update identity</button>
        <hr />
        {userName ? <h2>{userName}</h2> : null}
        <h3>User skils</h3>
        <ul>
            {skills?.map(skill => {
                return <li>{skill.name}</li>
            })}
        </ul>
        <h3>User Hobbies</h3>
        <ul>
            {hobbies?.map(hobby => {
                return <li>{hobby.name}</li>
            })}
        </ul>
    </>;
};

export default User;
