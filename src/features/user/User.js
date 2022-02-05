import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    fetchProfile,
    updateFirstName,
    updateLastName,
    addHobby,
    updateHobbies,
    addSkill,
    updateSkills,
    updateIdentity
} from './userSlice';
import { user1, newHobbies, newSkills } from './../../constants/userData';

const User = () => {
    const dispatch = useDispatch();
    const userName = useSelector((state) => {
        return state.user?.first_name + " " + state.user?.last_name
    })
    const skills = useSelector(state => {
        return state.user?.skills
    })
    const hobbies = useSelector(state => {
        return state.user?.hobbies
    })
    return <>
        <hr></hr>
        <button onClick={() => {
            console.log("fetching")
            dispatch(fetchProfile(user1))
        }}>Fetch Profile</button>
        <button onClick={() => {
            dispatch(updateFirstName("Okba"))
        }}>
            Update First Name</button>
        <button onClick={() => {
            dispatch(updateLastName("Cemuz"))
        }}>Update Last Name</button>
        <button onClick={() => {
            dispatch(addHobby({
                id: 121313,
                name: "Going To GYM"
            }))
        }}>Add Hobby</button>
        <button onClick={() => {
            dispatch(updateHobbies(newHobbies))
        }}>Update Hobbies</button>
        <button onClick={() => {
            dispatch(addSkill({
                id: 121313,
                name: "AngularJS"
            }))
        }}>Add Skill</button>
        <button onClick={() => {
            dispatch(updateSkills(newSkills))
        }}>Update Skills</button>
        <button onClick={() => {
            dispatch(updateIdentity({
                height: "204",
                speed: "123 mph"
            }))
        }}>Update identity</button>
        <hr />

        <h2>{userName}</h2>
        <h3>User skils</h3>
        <ul>
            {skills.map(skill => {
                return <li>{skill.name}</li>
            })}
        </ul>
        <h3>User Hobbies</h3>
        <ul>
            {hobbies.map(hobby => {
                return <li>{hobby.name}</li>
            })}
        </ul>
    </>;
};

export default User;
