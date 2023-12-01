import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../Context/global.context';

const Detail = () => {
    const { state, dispatch } = useGlobalContext();
    const { id } = useParams(); 
    const themeClass = state.theme === "dark" ? "dark-theme" : "light-theme";
    useEffect(() => {
      const fetchUserDetails = async () => {
        try {
          const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
          const userData = response.data;
          dispatch({ type: 'GET_CHARACTER', payload: userData });
        } catch (error) {
          console.error('Error fetching user details:', error);
        }
      };
  
      fetchUserDetails();
    }, [dispatch, id]); 
  
    const { character } = state;

  return (
    <div className={themeClass}>
      {character ? (
        <div>
          <h1>Detalles del dentista {character.id}</h1>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone:</th>
                <th>Website:</th>            
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{character.name}</td>
                <td>{character.email}</td>
                <td>{character.phone}</td>
                <td>{character.website}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <p>No se han cargado los detalles del usuario</p>
      )}
    </div>
  );
};

export default Detail;